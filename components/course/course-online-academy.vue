<template>
    <section class="tp-course-6-ptb lightblue-bg pt-120 pb-120">
        <div class="container custom-container-1300">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="tp-category-6-heading tp-course-6-heading mb-60 wow fadeInUp" data-wow-delay=".4s">
                        <h5 class="tp-section-3-subtitle color-9">Our Courses</h5>
                        <h3 class="tp-section-3-title color-9">Most Popular
                            <span>Courses
                                <img class="tp-underline-shape-5 wow bounceIn" data-wow-duration="1.5s"
                                    data-wow-delay=".4s" src="/images/hero/home-6/title-vector.png" alt="title-vector">
                            </span>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-course-6-btn text-lg-end mb-60">
                        <div class="tp-hero-6-btn">
                            <nuxt-link class="tp-btn-inner" href="/course-with-filter">View all Courses
                                <span>
                                    <svg-arrow-right-four />
                                </span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(course) in online_courses_data" :key="course.id" class="col-lg-6">
                    <course-single-grid-item :course="course" />
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-lg-8">
                    <div
                        class="tp-category-6-banner d-flex align-items-center justify-content-between tp-category-banner-bg mt-35">
                        <div class="tp-category-6-banner-shape">
                            <img src="/images/bg/category-shape-bg.png" alt="">
                        </div>
                        <div class="tp-category-banner-content d-flex align-items-center">
                            <div class="tp-category-banner-shape">
                                <svg-help-users />
                            </div>
                            <div class="tp-category-banner-text">
                                <span>Let Us Help</span>
                                <h4 class="tp-category-banner-title">Finding Your Right Courses</h4>
                            </div>
                        </div>
                        <div class="tp-category-banner-btn">
                            <nuxt-link class="tp-btn-2" href="/contact">Get Started</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { online_courses_data } from '@/data/course-data';
</script>