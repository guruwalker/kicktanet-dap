<template>
    <div class="tp-course-details-2-widget">
        <div class="tp-course-details-2-widget-thumb p-relative">
            <img :src="course.thumbnail" alt="course-img" />
            <a href="#" @click.prevent="playVideo('_RpLvsA1SNM')">
                <span>
                    <svg-play />
                </span>
            </a>
        </div>
        <div class="tp-course-details-2-widget-content">
            <div class="tp-course-details-2-widget-price">
                <CoursePrice :discount="course.discount" :price="course.price" />
            </div>
            <div class="tp-course-details-2-widget-btn">
                <NuxtLink class="active" href="/cart">Add to Cart</NuxtLink>
                <NuxtLink to="/course-with-filter">Buy Course</NuxtLink>
                <p>30-Day Money-Back Guarantee</p>
            </div>

            <div class="tp-course-details-2-widget-list">
                <h5>This course includes:</h5>

                <div class="tp-course-details-2-widget-list-item-wrapper">

                    <div class="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                        <span> <svg-lecture /> Lectures</span>
                        <span>40</span>
                    </div>
                    <div class="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                        <span> <svg-duration /> Duration</span>
                        <span>4h 50m</span>
                    </div>
                    <div class="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                        <span> <svg-skill-level /> Skill Level</span>
                        <span>Beginner</span>
                    </div>
                    <div class="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                        <span> <svg-language /> Language</span>
                        <span>{{ course.language }}</span>
                    </div>
                    <div class="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                        <span> <svg-dead-line /> Deadline</span>
                        <span>30 Nov 2024</span>
                    </div>
                    <div class="tp-course-details-2-widget-list-item d-flex align-items-center justify-content-between">
                        <span> <svg-certificate /> Certificate</span>
                        <span>Yes</span>
                    </div>

                    <div class="tp-course-details-2-widget-share d-flex align-items-center justify-content-between">
                        <a class="share" href="#"><span><svg-share clr="#5169F1" /></span> Share this course</a>
                        <a class="coupon" href="#">Apply coupon</a>
                    </div>
                    <div class="tp-course-details-2-widget-search p-relative">
                        <form action="#">
                            <input type="text" placeholder="Enter Coupon Code" />
                            <button type="submit">Apply</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICourseDT } from '@/types/course-d-t';
const {playVideo} = useVideoPopup();

interface Props {
    course: ICourseDT;
}

defineProps<Props>();
</script>
