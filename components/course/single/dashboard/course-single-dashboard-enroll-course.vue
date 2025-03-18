<template>
    <div class="tp-dashboard-course mb-25">
        <div class="tp-dashboard-course-thumb">
            <nuxt-link :to="`/course-details/${course.id}`">
                <img :src="course.thumbnail" alt="thumbnail" />
            </nuxt-link>
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
                <nuxt-link :to="`/course-details/${course.id}`">
                    {{ removeTagInText(course.title) }}
                </nuxt-link>
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
            <div class="tp-dashboard-progress">
                <div class="tp-dashboard-progress-info d-flex align-items-center justify-content-between">
                    <span>{{ Math.round((course.progress ?? 0 / 100) * course.lessons) }} / {{ course.lessons }}</span>
                    <span>{{ course.progress ?? 0 }}% Complete</span>
                </div>
                <div class="progress" role="progressbar" aria-label="Progress Example"
                    :aria-valuenow="course.progress ?? 0" aria-valuemin="0" aria-valuemax="100">
                    <div class="progress-bar" :style="{ width: `${course.progress ?? 0}%` }"></div>
                </div>
            </div>
            <div class="tp-dashboard-course-btn">
                <nuxt-link class="tpd-btn-border w-100" :to="`/dashboard/instructor-certificate`">
                    Download Certificate
                </nuxt-link>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { removeTagInText } from '@/utils/index';
import { type ICourseDT } from '@/types/course-d-t';

defineProps<{
    course: ICourseDT;
}>();

const router = useRouter();

</script>
