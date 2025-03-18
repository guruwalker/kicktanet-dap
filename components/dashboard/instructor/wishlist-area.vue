<template>
    <!-- course area start -->
    <div class="course-area">
        <div class="row">
            <div class="col-lg-6">
                <div class="tp-dashboard-section">
                    <h2 class="tp-dashboard-title">Wishlist</h2>
                </div>
            </div>
        </div>

        <div class="row">
            <div v-for="course in online_courses_data.slice(startItem, endItem)" :key="course.id" class="col-xl-4 col-md-6">
                <course-single-dashboard-course-item :course="course" />
            </div>
        </div>
    </div>
    <!-- course area end -->

    <!-- pagination area start -->
    <div class="tp-dashboard-pagination pt-20">
        <div class="tp-pagination">
            <ui-pagination :total-items="online_courses_data.length" :items-per-page="limit" :max-pages-shown="5"
            v-model="currentPage" @pageChange="updatePage" />
        </div>
    </div>
    <!-- pagination area end -->
</template>

<script setup lang="ts">
import {online_courses_data} from '@/data/course-data';
const limit = 6;
const length = computed(() => online_courses_data.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, limit);
</script>
