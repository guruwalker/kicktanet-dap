<template>
    <div v-if="state.filteredCoursesByRoute.length > 0" class="tp-grid-area pt-80 pb-40">
        <div class="container">
            <div class="tp-course-grid-sidebar p-relative">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="tp-course-grid-sidebar-left d-flex align-items-center">
                            <div class="tp-course-grid-sidebar-search p-relative mr-30 d-none d-lg-block">
                                <course-filter-search-term btnCls="tp-sidebar-search-btn" svgClr="currentColor" :path="'/course-with-sidebar'" />
                            </div>
                            <div class="tp-course-grid-sidebar-tab tp-tab">
                                <ul class="nav nav-tabs" id="filterTab" role="tablist">
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                            aria-selected="true" tabindex="0">
                                            <svg-grid />
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#profile" type="button" role="tab" aria-controls="profile"
                                            aria-selected="false" tabindex="-1">
                                            <svg-list />
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div class="tp-course-filter-top-result">
                                <p>Showing 1–{{state.filteredCoursesByRoute.length}} of {{state.allCourseData.length}} results</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="tp-course-grid-sidebar-right d-flex justify-content-start justify-content-lg-end">
                            <div class="tp-course-grid-select tp-course-grid-sidebar-select">
                                <select-course-sort-by />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCourseFilter } from '@/pinia/use-course-filter';

const state = useCourseFilter();
</script>