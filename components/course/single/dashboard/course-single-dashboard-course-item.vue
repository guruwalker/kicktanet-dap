<template>
    <div class="tp-dashboard-course tp-dashboard-course-2 mb-25">
        <div class="tp-course-teacher mb-15">
            <span>
                <img v-if="course.author_img" :src="course.author_img" :alt="course.author_name"/>
                {{ course.author_name }}
            </span>
            <span v-if="course.discount && course.discount > 0" class="discount">
                -{{ course.discount }}%
            </span>
        </div>
        <div class="tp-dashboard-course-thumb">
            <NuxtLink :to="`/course-details/${course.id}`">
                <img :src="course.thumbnail" alt="thumbnail" />
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
                    {{ course.students }} Student
                </span>
            </div>
            <div class="tp-dashboard-btn d-flex align-items-center justify-content-between">
                <button class="tpd-btn-border">
                    <span><svg-dashboard-cart /></span>
                    Add to cart
                </button>
                <div class="tp-dashboard-course-free">
                    <span>{{ course.price === 0 ? 'Free' : formatPrice(course.price) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { removeTagInText } from '@/utils/index';
import { formatPrice } from '@/lib/format-price';
import type { ICourseDT } from '@/types/course-d-t';

defineProps<{
    course: ICourseDT;
}>();
</script>
