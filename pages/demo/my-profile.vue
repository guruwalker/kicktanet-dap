<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <!-- banner area start -->
            <section class="tp-dashboard-banner-wrap">
                <div class="tp-dashboard-banner-shape">
                    <img src="/images/dashboard/bg/dashboard-bg-shape-1.jpg" alt="shape">
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-dashboard-banner-bg mt-30"
                                style="background-image:url(/images/dashboard/bg/dashboard-bg-1.jpg)">
                                <div class="tp-instructor-wrap d-flex justify-content-between">
                                    <div class="tp-instructor-info d-flex">
                                        <div class="tp-instructor-avatar">
                                            <img src="/images/dashboard/profile/dashboard-profile.jpg" alt="">
                                        </div>
                                        <div class="tp-instructor-content">
                                            <h4 class="tp-instructor-title">Indigo Violet</h4>
                                            <div class="tp-instructor-rate d-flex align-items-center">
                                                <span class="profile">20 Courses</span>
                                                <span class="profile">37 Students</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tp-profile-social">
                                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- banner area end -->

            <!-- profile bio area start -->
            <section class="tp-profile-arae">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-profile-box my-profile p-relative">
                                <div class="tp-profile-content">
                                    <h3 class="tp-profile-title">
                                        Biography
                                    </h3>
                                    <p> Indigo Violet is an accomplished educator and expert in the field of computer
                                        science, with over 15 years of experience in both academia and industry. She
                                        currently serves as a Professor of Computer Science at Tech University</p>
                                    <p>As an English lecturer, I am fervently dedicated to shaping the linguistic and
                                        literary acumen of my students. With a profound passion for language education,
                                        I employ dynamic and innovative teaching methods to inspire a love for
                                        literature and effective communication. My commitment extends beyond the
                                        curriculum, fostering an environment where students develop critical thinking
                                        skills and a deep <br> appreciation for the nuances of the English language.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- profile bio area end -->

            <!-- course area start -->
            <section class="course-area pt-80 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-profile-wrapper">
                                <h4>My Popular Courses</h4>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="course in online_courses_data.slice(0, 3)" :key="course.id"
                            class="col-lg-4 col-md-6">
                            <course-single-item :course="course" />
                        </div>
                    </div>
                </div>
            </section>
            <!-- course area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
import { online_courses_data } from "@/data/course-data";

definePageMeta({
    layout: false,
});
useSeoMeta({ title: "My Profile  | KICTANet" });
</script>
