<template>
    <section class="tp-breadcrumb__area pt-110 pb-90 p-relative z-index-1">
        <div class="tp-breadcrumb__bg details3"
            style="background-image: url(/images/breadcrumb/breadcrumb-bg-3.jpg);">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <course-details-breadcrumb-two :course="course" />
                </div>

                <div class="col-lg-5">
                    <course-details-box :course="course" />
                </div>
                <div class="col-lg-7">
                    <course-details-lists />

                    <div class="tp-course-details-3-main">
                        <div class="tp-course-details-2-nav d-flex align-items-center">
                            <course-details-nav />
                        </div>

                        <div class="tp-course-details-2-content">
                            <course-details-info />

                            <div id="curriculum" class="pt-70">
                                <h4 class="tp-course-details-2-main-title">Course Curriculum</h4>
                                <course-details-curriculum />
                            </div>

                            <div id="instructors" class="pt-100">
                                <h4 class="tp-course-details-2-main-title">Your Instructors</h4>
                                <course-details-instructor />
                            </div>

                            <div id="reviews">
                                <h4 class="tp-course-details-2-main-title">Ratings & Reviews</h4>
                                <course-details-rating-reviews />
                            </div>

                            <h4 class="tp-course-details-2-main-title">Featured review</h4>
                            <course-details-featured-reviews />


                            <h4 class="tp-course-details-2-main-title">Write a Review</h4>
                            <div class="tp-course-details-2-comment-box pr-25">
                                <span>What is it like to Course?</span>
                                <course-details-review-form />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import type { ICourseDT } from '@/types/course-d-t';

interface Props {
    course: ICourseDT;
}

defineProps<Props>();
</script>