<template>
    <section class="tp-progress-wrapper">
        <div class="row">
            <div class="col-lg-6">
                <div class="tp-dashboard-section">
                    <h2 class="tp-dashboard-title">In progress Courses</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="tp-progress-wrap">
                    <div v-for="(course, index) in progressData" :key="index"
                        class="tp-progress-item d-flex align-items-center">
                        <div class="tp-progress-thumb">
                            <img :src="course.img" alt="course-thumb" />
                        </div>
                        <div class="tp-progress-content">
                            <div class="tp-progress-rate d-flex align-items-center">
                                <div class="tp-progress-rating">
                                    <i v-for="i in 5" :key="i" class="fa-solid fa-star"
                                        :class="{ filled: i <= course.rating }"></i>
                                </div>
                                <span> {{ course.rating.toFixed(2) }} </span>
                                <span> ({{ course.totalRatings }} Ratings)</span>
                            </div>
                            <h4 class="tp-progress-title">
                                <NuxtLink :to="`/course-details-2/1`">{{ course.title }}</NuxtLink>
                            </h4>
                            <p>
                                Completed Lessons:
                                <span>
                                    {{ course.completedLessons }} of {{ course.totalLessons }} lessons
                                </span>
                            </p>
                            <div class="tp-progress-bar d-flex align-items-center">
                                <div class="progress" role="progressbar">
                                    <div class="progress-bar" :style="{ width: `${course.progressPercent}%` }"></div>
                                </div>
                                <span>{{ course.progressPercent }}% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const progressData = [
    {
        img: "/images/dashboard/course/progress-course-thumb-1.jpg",
        rating: 4.0,
        totalRatings: 18,
        title: "Fundamentals of Business Analysis",
        completedLessons: 4,
        totalLessons: 2,
        progressPercent: 70,
    },
    {
        img: "/images/dashboard/course/progress-course-thumb-2.jpg",
        rating: 5.0,
        totalRatings: 16,
        title: "Design System in Figma",
        completedLessons: 4,
        totalLessons: 2,
        progressPercent: 50,
    },
];
</script>
