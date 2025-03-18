<template>
    <section class="tp-program-area tp-program-3-bg pb-100 pt-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-lg-7">
                    <div class="tp-section-2 text-center mb-60">
                        <span class="tp-section-2-subtitle mb-10">Our Programs</span>
                        <h2 class="tp-section-2-title">Discover Our Educational Programs</h2>
                    </div>
                </div>
            </div>
            <div class="row">

                <div v-for="(item) in kids_program_data" class="col-xl-4 col-md-6">
                    <div class="tp-program-3-item mb-40 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-program-3-thumb">
                            <NuxtLink to="/university-program">
                                <img :src="item.img" alt="">
                            </NuxtLink>
                        </div>
                        <div class="tp-program-3-content">
                            <h4 class="tp-program-3-title">
                                <NuxtLink to="/university-program">{{ item.title }}</NuxtLink>
                            </h4>
                            <p v-html="item.description"></p>
                            <div class="tp-program-3-schedule d-flex align-items-center">
                                <div class="tp-program-3-schedule-item">
                                    <span>Age</span>
                                    <p>{{ item.age }}</p>
                                </div>
                                <div class="tp-program-3-schedule-item">
                                    <span>Time</span>
                                    <p>{{ item.time }}</p>
                                </div>
                                <div class="tp-program-3-schedule-item">
                                    <span>Size</span>
                                    <p>{{ item.size }}</p>
                                </div>
                            </div>
                            <div class="tp-program-3-btn">
                                <NuxtLink :to="`/course-details-2/${item.id}`">Preview this Course</NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="tp-program-3-shape">
            <div class="tp-program-3-shape-1">
                <img src="/images/program/program-3-shape-1.png" alt="">
            </div>
            <div class="tp-program-3-shape-2"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { kids_program_data } from '@/data/program-data';
</script>
