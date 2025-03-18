<template>
    <div class="tp-course-filter-item mb-25 d-flex">
        <!-- Thumbnail -->
        <div class="tp-course-filter-thumb">
            <NuxtLink :to="`/course-details/${course.id}`">
                <img class="course-pink" :src="course.thumbnail" :alt="course.title" />
            </NuxtLink>
        </div>

        <!-- Content -->
        <div class="tp-course-filter-content">
            <!-- Tag and Rating -->
            <div class="tp-course-filter-tag d-flex align-items-center justify-content-between mb-10">
                <span class="tag-span">{{ course.category }}</span>
                <div class="tp-course-rating-star">
                    <p>{{ course.avg_rating }}<span> /{{ course.total_rating }}</span></p>
                    <div class="tp-course-rating-icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
            </div>

            <!-- Title -->
            <h4 :class="title_cls || 'tp-course-filter-title'">
                <NuxtLink :to="`/course-details/${course.id}`">
                    {{ sm_title ? removeTagInText(course.title).slice(0, 28) + '...' : removeTagInText(course.title) }}
                </NuxtLink>
            </h4>

            <!-- Meta Information -->
            <div class="tp-course-filter-meta">
                <span v-if="course.author_img">
                    <img :src="course.author_img" :alt="course.author_name"/>
                    {{ course.author_name }}
                </span>
                <span>
                    <svg-lessons />
                    {{ course.lessons }} Lessons
                </span>
                <span>
                    <svg-user-two />
                    {{ course.students }} Students
                </span>
            </div>

            <!-- Course Description -->
            <div class="tp-course-filter-p">
                <p>
                    In this course, We will learn how to create websites by structuring and styling your pages with HTML
                    and CSS.
                </p>
            </div>

            <!-- Pricing and Button -->
            <div class="tp-course-filter-pricing d-flex align-items-center justify-content-between">
                <div class="price">
                    <course-price :discount="course.discount" :price="course.price" />
                </div>
                <div class="tp-course-filter-btn">
                    <NuxtLink :to="`/course-details/${course.id}`">Preview this Course</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import type { ICourseDT } from '@/types/course-d-t';
import { removeTagInText } from '@/utils/index';


interface IProps {
    course: ICourseDT;
    sm_title?: boolean;
    title_cls?: string;
}

defineProps<IProps>();

</script>
