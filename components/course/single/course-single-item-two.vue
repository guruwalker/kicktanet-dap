v<template>
    <div class="tp-course-5-item mb-60">
        <div class="tp-course-5-hover"></div>
        <div class="tp-course-5-thumb">
            <img :src="course.thumbnail" :alt="course.title" />
            <div class="tp-course-5-price">
                <span>
                    {{ course.discount === 0
                        ? "Free"
                        : course.discount
                            ? formatPrice(discountPrice(course.price, course.discount))
                            : formatPrice(course.price) }}
                </span>
            </div>
        </div>
        <div class="tp-course-5-content">
            <div class="tp-course-5-avatar d-flex align-items-center">
                <span v-if="course.author_img">
                    <img :src="course.author_img" :alt="course.author_name"/>
                </span>
                <h5 class="tp-course-5-avatar-title">
                    <a href="#">{{ course.author_name }}</a>
                </h5>
            </div>
            <h4 class="tp-course-5-title">
                <NuxtLink :to="`/course-details/${course.id}`">{{ course.title }}</NuxtLink>
            </h4>
            <div class="tp-course-meta">
                <span>
                    <span>
                        <svg-lessons />
                    </span>
                    {{ course.lessons }} Lessons
                </span>
                <span>
                    <span>
                        <svg-user-two />
                    </span>
                    {{ course.students }} Student
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { formatPrice } from '@/lib/format-price';
import { discountPrice } from '@/utils/index';
import type { ICourseDT } from '@/types/course-d-t';

// Props definition
interface Props {
    course: ICourseDT;
}

defineProps<Props>();
</script>
