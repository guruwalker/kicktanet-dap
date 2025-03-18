<template>
    <div class="tp-breadcrumb__content">
        <div class="tp-breadcrumb__list inner-after">
            <span class="white"><NuxtLink to="/"><svg-home /></NuxtLink></span>
            <span class="white">Course Grid</span>
        </div>
        <div class="tp-course-details-2-header">
            <h3 class="tp-course-details-3-title">{{ removeTagInText(course.title) }}</h3>
            <div class="tp-course-details-3-meta-wrapper d-flex align-items-center flex-wrap">
                <div class="tp-course-details-2-meta ">
                    <div class="tp-course-details-2-author d-flex align-items-center">
                        <div class="tp-course-details-2-author-avater">
                            <img :src="course.author_img ? course.author_img : '/images/course/course-5-teacher-1.png'"
                                alt="Salim Rana" />
                        </div>
                        <div class="tp-course-details-2-author-content">
                            <span class="tp-course-details-2-author-designation">Teacher</span>
                            <h3 class="tp-course-details-2-meta-title"><a href="#">{{ course.author_name }}</a></h3>
                        </div>
                    </div>
                </div>
                <div class="tp-course-details-2-meta">
                    <span class="tp-course-details-2-meta-subtitle">Category</span>
                    <h3 class="tp-course-details-2-meta-title">{{ course.category }}</h3>
                </div>
                <div class="tp-course-details-2-meta">
                    <span class="tp-course-details-2-meta-subtitle">Last updated</span>
                    <h3 class="tp-course-details-2-meta-title">15 July, 2024</h3>
                </div>
                <div class="tp-course-details-2-meta text-end">
                    <div class="tp-course-details-2-meta-rating-wrapper">
                        <div class="tp-course-rating-icon">
                            <span><svg-star-two /></span>
                            <span><svg-star-two /></span>
                            <span><svg-star-two /></span>
                            <span><svg-star-two /></span>
                            <span><svg-star-two /></span>
                        </div>
                        <span class="tp-course-details-2-meta-subtitle">Review</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICourseDT } from '@/types/course-d-t';


type IProps = {
    course: ICourseDT
};

defineProps<IProps>();
</script>
