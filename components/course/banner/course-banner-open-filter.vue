<template>
    <section class="tp-course-filter-area tp-course-filter-bg p-relative tp-course-filter-space">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-breadcrumb__content-filter mb-50">
                        <div class="tp-breadcrumb__list">
                            <span>
                                <NuxtLink to="/"><svg-home /></NuxtLink>
                            </span>
                            <span class="color">All Courses</span>
                        </div>
                        <h3 class="tp-breadcrumb__title">All Courses</h3>
                        <p>We have the largest collection of <span>{{state.allCourseData.length}}</span> courses</p>
                    </div>
                    <div class="tp-course-grid-wrap p-relative">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="tp-course-filter-top-left d-flex align-items-center">
                                    <div class="tp-course-filter-top-tab tp-tab mb-20">
                                        <ul class="nav nav-tabs" id="filterTab" role="tablist">
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                    data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                                    aria-selected="true" tabindex="0">
                                                    <svg-grid clr="#031F42" />
                                                    Grid
                                                </button>
                                            </li>
                                            <li class="nav-item" role="presentation">
                                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                    data-bs-target="#profile" type="button" role="tab"
                                                    aria-controls="profile" aria-selected="false" tabindex="-1">
                                                    <svg-list clr="#031F42" />
                                                    List
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tp-course-filter-top-result mb-20">
                                        <p>
                                            Showing 1–{{ state.filteredCoursesByRoute?.length }} of {{
                                            state.allCourseData?.length }} results
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div
                                    class="tp-course-filter-top-right d-flex align-items-center justify-content-start justify-content-lg-end">
                                    <div class="tp-course-filter-top-right-search d-none d-lg-block">
                                        <!-- filter search -->
                                        <course-filter-search-term :path="'/course-open-filter'" />
                                        <!-- filter search -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useCourseFilter } from '@/pinia/use-course-filter';

const state = useCourseFilter();
</script>
