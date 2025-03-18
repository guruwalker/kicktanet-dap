<template>
    <div class="tp-course-grid-item d-flex mb-30">
        <div class="tp-course-grid-thumb">
            <nuxt-link :to="`/course-details/${course.id}`">
                <img :src="course.thumbnail" :alt="removeTagInText(course.title)" />
            </nuxt-link>
        </div>
        <div class="tp-course-grid-content">
            <div class="tp-course-filter-tag mb-10">
                <span class="tag-span">{{ course.category }}</span>
                <span v-if="course.discount && course.discount > 0" class="discount">
                    -{{ course.discount }}%
                </span>
            </div>
            <div class="tp-course-meta">
                <span>
                    <svg-lessons />
                    {{ course.lessons }} Lessons
                </span>
                <span>
                    <svg-user-two/>
                    {{ course.students }} Students
                </span>
            </div>
            <h4 class="tp-course-grid-title">
                <nuxt-link :to="`/course-details/${course.id}`">
                    {{ removeTagInText(course.title) }}
                </nuxt-link>
            </h4>
            <div class="tp-course-teacher tp-course-grid-teacher">
                <span>
                    <img v-if="course.author_img" :src="course.author_img" :alt="course.author_name"/>
                    {{ course.author_name }}
                </span>
            </div>
            <div class="tp-course-rating d-flex align-items-end justify-content-between">
                <div class="tp-course-rating-star">
                    <p>
                        {{ course.avg_rating }}
                        <span> /{{ course.total_rating }}</span>
                    </p>
                    <div class="tp-course-rating-icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                </div>
                <div class="tp-course-pricing">
                    <course-price :discount="course.discount" :price="course.price" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import type { ICourseDT } from '@/types/course-d-t';
import { removeTagInText } from '@/utils/index';

interface Props {
    course: ICourseDT;
}

defineProps<Props>();
</script>