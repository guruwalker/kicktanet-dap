<template>
    <div class="megamenu-demo-small p-relative">
        <div class="tp-megamenu-small-content">
            <div class="row tp-gx-50">
                <div class="col-xl-6">
                    <div class="tp-megamenu-list">
                        <NuxtLink v-for="dm in dropdown_menus.slice(0, 4)" :key="dm.id" :href="dm.link">
                            {{ dm.title }}
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="tp-megamenu-list">
                        <NuxtLink v-for="dm in dropdown_menus.slice(4)" :key="dm.id" :href="dm.link">
                            {{ dm.title }}
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-megamenu-small-cta-wrap d-none d-xl-block">
            <div class="row">
                <div class="col-xl-12">
                    <div class="tp-megamenu-small-cta d-flex">
                        <div class="tp-megamenu-small-cta-thumb">
                            <img src="/images/cta/menu-cta-shape.png" alt="cta-shape" />
                        </div>
                        <h4 class="tp-megamenu-small-cta-title">
                            All signature programs
                        </h4>
                        <div class="tp-megamenu-small-cta-btn">
                            <NuxtLink class="tp-btn" href="/university-application-form">
                                Apply now
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { IDropdownMenus } from '@/types/menu-d-t';

defineProps<{ dropdown_menus: IDropdownMenus[] }>();
</script>
