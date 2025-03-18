<template>
    <section :class="`course-area tp-course-wrapper ${spacing}`">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-xxl-5 col-xl-6 col-lg-7">
                    <div class="tp-section mb-40">
                        <h5 class="tp-section-3-subtitle">Our Courses</h5>
                        <h3 class="tp-section-3-title">Most Popular
                            <span>Courses
                                <img class="tp-underline-shape-6 wow bounceIn" data-wow-duration="1.5s"
                                    data-wow-delay=".4s" src="/images/unlerline/course-2-svg-1.svg" alt="">
                            </span>
                        </h3>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-6 col-lg-5">
                    <div class="tp-course-tab d-flex justify-content-lg-end mb-40">
                        <nav>
                            <div class="nav" id="nav-tab" role="tablist">
                                <button v-for="tab in tab_navs" :key="tab"
                                    :class="`nav-link ${activeTab === tab ? 'active' : ''}`" @click="activeTab = tab">
                                    {{ tab }}
                                    <span>
                                        <img src="/images/course/course-2-shape-1.png" alt="">
                                    </span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tab-content wow fadeInUp" data-wow-delay=".3s" id="nav-tabContent">

                        <div class="row">
                            <div v-for="course in filterCourse" :key="course.id" class="col-lg-4 col-md-6">
                                <course-single-item :course="course" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-lg-8">
                    <div class="tp-category-banner d-flex align-items-center justify-content-between tp-category-banner-bg mt-35"
                        style="background-image: url(/images/bg/category-bg.jpg);">
                        <div class="tp-category-banner-content d-flex align-items-center">
                            <div class="tp-category-banner-shape">
                                <img src="/images/shape/category-2-shape-1.png" alt="shape">
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
const tab_navs = ["All Courses", "Trending", "Popularity", "Featured"];
const activeTab = ref(tab_navs[0]);
import { online_courses_data } from "@/data/course-data";
import type { ICourseDT } from "@/types/course-d-t";

withDefaults(defineProps<{ spacing?: string;}>(), {
    spacing: 'mt-100 mb-100'
});

const filterCourse = ref<ICourseDT[]>([...online_courses_data]);
watch(activeTab, (newTab) => {
    if (newTab === "All Courses") {
        filterCourse.value = [...online_courses_data];
    } else if (newTab === "Trending") {
        filterCourse.value = online_courses_data.slice(2, 4);
    } else if (newTab === "Popularity") {
        filterCourse.value = online_courses_data.slice(4, 6);
    } else if (newTab === "Featured") {
        filterCourse.value = online_courses_data.slice(0, 2);
    }
});
</script>