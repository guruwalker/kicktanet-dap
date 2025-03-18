<template>
    <section class="tp-dashboard-course-wrapper">
        <div class="row">
            <div class="col-6">
                <div class="tp-dashboard-section">
                    <h2 class="tp-dashboard-title">My Courses</h2>
                </div>
            </div>
            <div class="col-6">
                <div class="tp-dashboard-course-details text-sm-end">
                    <nuxt-link href="/course-with-filter">
                        Browse All Course <i class="fa-regular fa-angle-right"></i>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="tp-dashboard-course-list">
                    <ul>
                        <li class="active">
                            <div class="tp-dashboard-course-item">
                                <div class="tp-dashboard-course-name">
                                    <h5 class="tp-dashboard-course-name-title">Course Name</h5>
                                </div>
                                <div class="tp-dashboard-course-enroll">
                                    <span>Enrolled</span>
                                </div>
                                <div class="tp-dashboard-course-rating">
                                    <span>Rating</span>
                                </div>
                            </div>
                        </li>
                        <li v-for="(course, index) in courseData" :key="index">
                            <div class="tp-dashboard-course-item">
                                <div class="tp-dashboard-course-name">
                                    <h5 class="tp-dashboard-course-name-title">{{ course.name }}</h5>
                                </div>
                                <div class="tp-dashboard-course-enroll">
                                    <span>{{ course.enrollCount }}</span>
                                </div>
                                <div class="tp-dashboard-course-rating">
                                    <i v-for="(i) in 5"
                                        :class="`fa-star ${i < course.rating ? 'fa-solid' : 'fa-light'}`"></i>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const courseData = [
    {
        name: 'Product Design',
        enrollCount: 45,
        rating: 5,
    },
    {
        name: 'Graphic Design Masterclass',
        enrollCount: 12,
        rating: 3,
    },
    {
        name: 'Fundamentals of Business Analysis',
        enrollCount: 22,
        rating: 2,
    },
    {
        name: 'Design System in Figma',
        enrollCount: 30,
        rating: 5,
    },
    {
        name: '3D Motion Design',
        enrollCount: 8,
        rating: 5,
    },
];
</script>