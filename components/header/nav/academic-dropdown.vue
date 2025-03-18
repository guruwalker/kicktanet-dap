<template>
    <div class="megamenu-demo-academics p-relative">
        <div class="tp-megamenu-academics-border">
            <div class="row tp-gx-50">
                <div v-for="dp in academic_dropdown" :key="dp.id" class="col-xl-3 col-12">
                    <div class="tp-megamenu-academics-list">
                        <h4 class="tp-megamenu-academics-title">{{ dp.title }}</h4>
                            <NuxtLink v-for="dm in dp.dropdown_menus" :key="dm.id" :href="dm.link">
                                {{ dm.title }}
                            </NuxtLink>
                    </div>
                </div>

                <div class="col-xl-6 col-12">
                    <div class="tp-megamenu-academics-banner p-relative d-none d-xl-block">
                        <h4 class="tp-megamenu-academics-banner-title">Alumni</h4>
                        <img src="/images/menu/menu-shape-2.png" alt="shape" />
                        <p>
                            Everything that I learned at <br />
                            Kempbelle University really <br />
                            helped put me above the <br />
                            competition in the field <br />
                            of Computer Science.
                        </p>
                        <a href="#">
                            Our Alumni
                            <span>
                                <svg-arrow-right-two clr="currentColor" />
                            </span>
                        </a>
                        <div class="tp-megamenu-academics-banner-shape">
                            <img src="/images/menu/menu-shape.png" alt="shape" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12 d-none d-xl-block">
                <div class="tp-megamenu-academics-btns text-center">
                    <NuxtLink to="/university-request-info">Request Info</NuxtLink>
                    <NuxtLink class="active" href="/university-application-form">
                        Apply Now
                    </NuxtLink>
                    <NuxtLink to="/university-schedule">Visit University</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { IAcademicDP } from '@/types/menu-d-t';
defineProps<{ academic_dropdown: IAcademicDP[] }>();
</script>
