<template>
    <div class="tp-course-item p-relative fix mb-30">
        <div class="tp-course-teacher mb-15">
            <span>
                <template v-if="course.author_img">
                    <img :src="course.author_img" :alt="course.author_name" />
                </template>
                {{ course.author_name }}
            </span>
            <span v-if="course.discount && course.discount > 0" class="discount">
                -{{ course.discount }}%
            </span>
        </div>
        <div class="tp-course-thumb">
            <NuxtLink :to="`/course-details/${course.id}`">
                <img class="course-lightblue" :src="course.thumbnail" :alt="course.title"/>
            </NuxtLink>
        </div>
        <div class="tp-course-content">
            <div class="tp-course-tag mb-10">
                <span>{{ course.category }}</span>
            </div>
            <div class="tp-course-meta">
                <span>
                    <svg-lessons /> {{ course.lessons }} Lessons
                </span>
                <span>
                    <svg-user-two /> {{ course.students }} Student
                </span>
            </div>
            <h4 class="tp-course-title">
                <NuxtLink :to="`/course-details/${course.id}`">
                    <div v-html="sanitizedTitle"></div>
                </NuxtLink>
            </h4>
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
                <div class="tp-course-pricing home-2">
                    <course-price :discount="course.discount" :price="course.price" />
                </div>
            </div>
        </div>
        <div class="tp-course-btn home-2">
            <NuxtLink :to="`/course-details/${course.id}`">Preview this Course</NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICourseDT } from '@/types/course-d-t';

interface Props {
    course: ICourseDT;
    removeTag?: boolean;
}

const props = defineProps<Props>();

// Compute sanitized title if removeTag is true
const sanitizedTitle = computed(() =>
    props.removeTag ? props.course.title.replace(/(<([^>]+)>)/gi, "") : props.course.title
);
</script>
