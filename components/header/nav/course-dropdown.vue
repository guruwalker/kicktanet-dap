<template>
    <div class="megamenu-demo-courses p-relative">
        <div class="tp-megamenu-courses-content">
            <div class="row tp-gx-50">
                <div v-for="cm in courseDropdown" :key="cm.id" class="col-xl-6">
                    <div class="tp-megamenu-courses-list">
                        <h4 class="tp-megamenu-courses-title">{{ cm.title }}</h4>
                        <NuxtLink v-for="dm in cm.dropdown_menus" :key="dm.id" :to="dm.link">
                            {{ dm.title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-megamenu-courses-wrap d-none d-xl-block">
            <h4 class="tp-megamenu-courses-wrap-title">Developer hub</h4>
            <p>Start building fast, with code samples and more</p>
            <div class="tp-megamenu-courses-thumb">
                <img src="/images/menu/menu-shape-3.png" alt="shape" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICourseDP } from '@/types/menu-d-t';

// Props
defineProps<{ courseDropdown: ICourseDP[] }>();
</script>
