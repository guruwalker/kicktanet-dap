<template>
    <section class="tp-dashboard-course-wrapper">
        <div class="tp-dashboard-section">
            <h2 class="tp-dashboard-title">Recent Reviews</h2>
        </div>
        <div class="tpd-table mb-25">
            <ul>
                <li class="tpd-table-head">
                    <div class="tpd-table-row">
                        <div class="tpd-reviews-student">
                            <h4 class="tpd-table-title">Student</h4>
                        </div>
                        <div class="tpd-reviews-date">
                            <h4 class="tpd-table-title">Date</h4>
                        </div>
                        <div class="tpd-reviews-feedback">
                            <h4 class="tpd-table-title">Rating</h4>
                        </div>
                    </div>
                </li>

                <li v-for="(review, i) in recentReviewsData" :key="i">
                    <div class="tpd-table-row">
                        <div class="tpd-reviews-student">
                            <div class="tpd-reviews-profile d-flex align-items-center">
                                <div class="tpd-reviews-thumb">
                                    <img :src="review.studentImg" :alt="review.studentName" />
                                </div>
                                <h4 class="tpd-reviews-thumb-title">{{ review.studentName }}</h4>
                            </div>
                        </div>
                        <div class="tpd-reviews-date">
                            <span>{{ review.date }}</span>
                            <p>{{ review.time }}</p>
                        </div>
                        <div class="tpd-reviews-feedback">
                            <div class="tp-instructor-rating">
                                <i v-for="i in 5" :class="`fa-solid fa-star ${i < review.rating ? '' : 'fa-light'}`"></i>
                            </div>
                            <span class="span">{{ review.feedback }}</span>
                            <div class="tpd-course-wrap">
                                <span class="tpd-course-name">Course:</span>
                                <span class="tpd-course-title">{{ review.courseTitle }}</span>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </section>
</template>

<script setup lang="ts">

const recentReviewsData = [
    {
        id: 1,
        studentName: "Joss Sticks",
        studentImg: "/images/dashboard/profile/reviews-profile-1.png",
        date: "August 27, 2024",
        time: "8:31 am",
        rating: 5,
        feedback: "Nice Course",
        courseTitle: "Design Masterclass",
    },
    {
        id: 2,
        studentName: "Benjamin Evalent",
        studentImg: "/images/dashboard/profile/reviews-profile-2.png",
        date: "January 30, 2024",
        time: "10:21 am",
        rating: 5,
        feedback: "Is Great Course!",
        courseTitle: "3D Motion Design",
    },
    {
        id: 3,
        studentName: "Hanson Deck",
        studentImg: "/images/dashboard/profile/reviews-profile-3.png",
        date: "April 20, 2024",
        time: "1:05 pm",
        rating: 5,
        feedback: "Awesome",
        courseTitle: "Graphic Design Masterclass",
    },
    {
        id: 4,
        studentName: "Hanson Violet",
        studentImg: "/images/dashboard/profile/reviews-profile-4.png",
        date: "August 27, 2024",
        time: "10:21 am",
        rating: 5,
        feedback: "Is Great Course!",
        courseTitle: "Graphic Design Masterclass",
    },
    {
        id: 5,
        studentName: "Indigo Violet",
        studentImg: "/images/dashboard/profile/reviews-profile-5.png",
        date: "January 30, 2024",
        time: "10:21 am",
        rating: 5,
        feedback: "Awesome",
        courseTitle: "Design System in Figma",
    },
];
</script>
