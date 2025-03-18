<template>
    <div class="megamenu-demo-container p-relative">
        <div class="row tp-gx-20">
            <div v-for="hm_m in homeDropdown" :key="hm_m.id" class="col-xl-3 col-md-6 col-12">
                <div class="tp-megamenu-home-item text-center p-relative mb-30">
                    <div class="tp-megamenu-home-thumb">
                        <NuxtLink :to="hm_m.link">
                            <img :src="hm_m.img" :alt="hm_m.title" width="270" height="170" />
                        </NuxtLink>
                    </div>
                    <h4 class="tp-megamenu-home-title">
                        <NuxtLink class="red" :to="hm_m.link">
                            {{ hm_m.title }}
                        </NuxtLink>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IHomeDropdown } from '@/types/menu-d-t';


defineProps<{ homeDropdown: IHomeDropdown[] }>()
</script>