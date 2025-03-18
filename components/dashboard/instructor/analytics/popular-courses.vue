<template>
    <section class="tp-dashboard-course-wrapper">
        <div class="tp-dashboard-section">
            <h2 class="tp-dashboard-title">Most Popular Courses</h2>
        </div>
        <div class="tp-dashboard-course-list">
            <ul>
                <li v-for="(course, i) in popularCoursesData" :class="i === 0 ? 'active' : ''">
                    <div class="tp-dashboard-course-item">
                        <div class="tp-dashboard-course-name">
                            <h5 class="tp-dashboard-course-name-title">{{ course.name }}</h5>
                        </div>
                        <div class="tp-dashboard-course-enroll">
                            <span>{{ course.enroll }}</span>
                        </div>
                        <div class="tp-dashboard-course-rating">
                            <!-- Render stars based on the course rating -->
                            <i v-for="(i) in 5" :class="i < course.rating ? 'fa-solid fa-star' : 'fa-light fa-star'" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">

const popularCoursesData = [
    {
        id: 1,
        name: 'Product Design',
        enroll: 45,
        rating: 5,
    },
    {
        id: 2,
        name: 'Graphic Design Masterclass',
        enroll: 12,
        rating: 3,
    },
    {
        id: 3,
        name: 'Fundamentals of Business Analysis',
        enroll: 22,
        rating: 2,
    },
    {
        id: 4,
        name: 'Design System in Figma',
        enroll: 30,
        rating: 5,
    },
    {
        id: 5,
        name: '3D Motion Design',
        enroll: 8,
        rating: 5,
    },
];
</script>
