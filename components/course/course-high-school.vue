<template>
    <section class="course-area grey-bg pb-120">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tp-section text-center mb-60">
                        <h5 class="tp-section-subtitle">Pick Course as per your Area of Interest</h5>
                        <h3 class="tp-section-4-title">Most Famous <span>Online
                                <svg xmlns="http://www.w3.org/2000/svg" width="120" height="9" viewBox="0 0 120 9" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M115.442 8.25039C64.7892 -2.54947 20.433 3.78533 4.88329 8.17023C3.53609 8.55013 1.62363 8.4481 0.611686 7.94234C-0.400258 7.43658 -0.128479 6.71861 1.21872 6.33871C18.3618 1.5045 65.3347 -5.06747 118.455 6.25855C119.92 6.57094 120.434 7.27006 119.601 7.82009C118.769 8.37012 116.907 8.56277 115.442 8.25039Z"
                                        fill="#161613" />
                                </svg>
                            </span> Courses</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="course in high_school_course_data" :key="course.id" class="col-lg-6">
                    <course-single-list-item :course="course" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { high_school_course_data } from "@/data/course-data";
</script>
