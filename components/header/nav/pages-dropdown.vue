<template>
    <div class="megamenu-demo-fullwidth p-relative">
        <div class="row">
            <!-- Left Column -->
            <div class="col-xl-8 col-lg-12">
                <div class="tp-megamenu-fullwidth-list-wrapper">
                    <div class="row tp-gx-90">
                        <div v-for="pd in pagesDropdown" :key="pd.id" :class="`col-xl-${pd.id === 2 ? 6 : 3}`">
                            <!-- Dropdown Lists -->
                            <div v-if="pd.id !== 2" class="tp-megamenu-fullwidth-list">
                                <h4 class="tp-megamenu-fullwidth-title">{{ pd.title }}</h4>
                                <ul>
                                    <li v-for="sm in pd.dropdown_menus" :key="sm.id">
                                        <NuxtLink :to="sm.link">{{ sm.title }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>

                            <!-- Special Case: ID === 2 -->
                            <div v-else class="tp-megamenu-fullwidth-list">
                                <h4 class="tp-megamenu-fullwidth-title">{{ pd.title }}</h4>
                                <div class="tp-megamenu-fullwidth-list-wrap">
                                    <div class="row">
                                        <div class="col-xl-6 col-12">
                                            <ul>
                                                <li v-for="sm in pd.dropdown_menus.slice(0, 6)" :key="sm.id">
                                                    <NuxtLink :to="sm.link">{{ sm.title }}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-xl-6 col-12">
                                            <ul>
                                                <li v-for="sm in pd.dropdown_menus.slice(6)" :key="sm.id">
                                                    <NuxtLink :to="sm.link">{{ sm.title }}</NuxtLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column -->
            <div class="col-xl-4 col-lg-12">
                <div class="tp-megamenu-fullwidth-item-wrap d-none d-xl-block">
                    <div class="row">
                        <div class="col-lg-12">
                            <div
                                class="tp-megamenu-fullwidth-item d-flex justify-content-between align-items-center mb-8">
                                <div class="tp-megamenu-fullwidth-content blue">
                                    <h4 class="tp-megamenu-fullwidth-content-title">
                                        Online <br /> Learning Platforms
                                    </h4>
                                    <NuxtLink class="tp-btn" to="/course-with-filter">
                                        All Course <span>
                                            <svg-arrow-right-sm />
                                        </span>
                                    </NuxtLink>
                                </div>
                                <div class="tp-megamenu-fullwidth-content-thumb">
                                    <img src="/images/shape/menu-shape-1.png" alt="menu-shape" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div
                                class="tp-megamenu-fullwidth-item bg d-flex justify-content-between align-items-center">
                                <div class="tp-megamenu-fullwidth-content">
                                    <h4 class="tp-megamenu-fullwidth-content-title">
                                        Accelerated <br /> Degree Programs
                                    </h4>
                                    <NuxtLink class="tp-btn" to="/university-program">
                                        All Programs <span>
                                            <svg-arrow-right-sm />
                                        </span>
                                    </NuxtLink>
                                </div>
                                <div class="tp-megamenu-fullwidth-content-thumb">
                                    <img src="/images/shape/menu-shape-2.png" alt="menu-shape" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IPagesDropdown } from '@/types/menu-d-t';



defineProps<{ pagesDropdown: IPagesDropdown[] }>()

</script>