<template>
    <div class="tp-hero-area lightblue-bg tp-hero-2-bg">
        <div class="container custom-container">
            <div class="tp-hero-2-wrap">
                <div class="row align-items-end">
                    <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-12">
                        <div class="tp-hero-2-content">
                            <span class="tp-hero-2-subtitle wow fadeInUp" data-wow-delay=".3s">Keep Learning</span>
                            <h2 class="tp-hero-2-title wow fadeInUp" data-wow-delay=".5s">Best digital
                                <span>Online 
                                    <img class="wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="/images/unlerline/hero-2-svg-1.svg" alt="">
                                </span>
                                Courses
                            </h2>
                            <p class=" wow fadeInUp" data-wow-delay=".7s">Acquire global knowledge and build your <br>
                                professional skills</p>
                            <div class="tp-hero-2-btn wow fadeInUp" data-wow-delay=".9s">
                                <nuxt-link class="tp-btn-border" href="/course-with-filter">Find Courses
                                    <span>
                                        <svg-arrow-right-four/>
                                    </span>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="offset-xxl-4 col-xxl-3 offset-xl-2 col-xl-4 col-lg-5 col-md-6">
                        <div class="tp-hero-2-course p-relative wow fadeInUp" data-wow-delay=".5s">
                            <course-single-item :course="online_courses_data[0]" />
                        </div>
                    </div>
                </div>
                <div class="tp-hero-2-thumb">
                    <img src="/images/hero/hero-2-thumb-1.png" alt="">
                </div>
            </div>
        </div>
        <div class="tp-hero-2-shape">
            <div class="tp-hero-2-shape-1">
                <span>
                    <svg-shape-two/>
                </span>
            </div>
            <div class="tp-hero-2-shape-2">
                <img src="/images/hero/hero-2-shape-2.png" alt="">
            </div>
            <div class="tp-hero-2-shape-3">
                <img src="/images/hero/hero-2-shape-3.png" alt="">
            </div>
            <div class="tp-hero-2-shape-4">
                <img src="/images/hero/hero-2-shape-4.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {online_courses_data} from '@/data/course-data';
</script>