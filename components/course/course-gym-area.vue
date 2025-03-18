<template>
    <section class="course-area pb-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tp-section text-center mb-105">
                        <h5 class="tp-section-5-subtitle mb-10">WANNA TRANSFORM YOUR LIFE?</h5>
                        <h3 class="tp-section-5-title">Latest GYM Courses</h3>
                    </div>
                </div>
            </div>
            <div class="tp-course-5-position wow fadeInUp" data-wow-delay=".3s">
                <div class="row tp-gx-60">
                    <div v-for="(course) in gym_course_data" :key="course.id" class="col-lg-4 col-md-6">
                        <course-single-item-two :course="course" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="tp-course-5-btn text-center wow fadeInUp" data-wow-delay=".5s">
                        <NuxtLink class="tp-btn-4" href="/course-with-filter">View all courses</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { gym_course_data } from "@/data/course-data";
</script>
