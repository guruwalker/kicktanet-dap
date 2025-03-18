<template>
    <div class="tp-dashboard-course tp-dashboard-course-2 mb-25">
        <div class="tp-dashboard-course-thumb">
            <NuxtLink :to="`/course-details/${course.id}`">
                <img :src="course.thumbnail" :alt="removeTagInText(course.title)" />
            </NuxtLink>
        </div>
        <div class="tp-dashboard-course-content">
            <div class="tp-dashboard-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>({{ course.total_rating }} Reviews)</span>
            </div>
            <h4 class="tp-dashboard-course-title">
                <NuxtLink :to="`/course-details/${course.id}`">
                    {{ removeTagInText(course.title) }}
                </NuxtLink>
            </h4>
            <div class="tp-dashboard-course-meta">
                <span>
                    <svg-lessons />
                    {{ course.lessons }} Lessons
                </span>
                <span>
                    <svg-user-two />
                    {{ course.students }} Students
                </span>
            </div>
            <div class="tp-dashboard-btn d-flex align-items-center justify-content-between">
                <div class="tp-course-pricing text-start">
                    <CoursePrice :discount="course.discount" :price="course.price" />
                </div>
                <div class="tp-course-action d-flex align-items-center">
                    <div class="tpd-action-inexact-btn">
                        <NuxtLink :to="`/create-new-course`" class="tpd-action-btn">
                            <svg-pen-one />
                        </NuxtLink>
                    </div>
                    <!-- item action -->
                    <course-single-dashboard-item-action :courseId="course.id" />
                    <!-- item action -->
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { removeTagInText } from '@/utils/index';
import type { ICourseDT } from '@/types/course-d-t';

defineProps<{
    course: ICourseDT;
}>();

</script>
