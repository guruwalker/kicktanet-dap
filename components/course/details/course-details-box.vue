<template>
    <div class="tp-course-details-3-widget">
        <div class="tp-course-details-2-widget-thumb p-relative">
            <img :src="course.thumbnail" alt="course-img" />
        </div>
        <div class="tp-course-details-3-widget-content">
            <div class="tp-course-details-2-widget-price d-flex justify-content-between align-items-center">
                <div class="price">
                    <CoursePrice :discount="course.discount" :price="course.price" />
                    <p v-if="course.discount">-{{ course.discount }}% off</p>
                </div>
                <div class="share p-relative">
                    <div class="tp-postbox-share">
                        <button class="p-relative">
                            <span>
                                <svg-share />
                            </span>
                        </button>

                        <ul class="tp-postbox-share-hover">
                            <li><a href="#"><i class="fab fa-facebook-f"></i> <b>Facebook</b></a></li>
                            <li><a href="#"><i class="fab fa-twitter"></i> <b>Twitter</b></a></li>
                            <li><a href="#"><i class="fab fa-youtube"></i> <b>Youtube</b></a></li>
                            <li><a href="#"><i class="fab fa-linkedin"></i> <b>Linkedin</b></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="tp-course-details-2-widget-btn">
                <nuxt-link href="/cart">Add to Cart</nuxt-link>
                <nuxt-link class="active" href="/course-with-filter">Buy Course</nuxt-link>
                <p>Limited offer, cancel anytime.</p>
            </div>
            <div class="tp-course-details-2-instructor-social text-center">
                <social-links-two />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ICourseDT } from '@/types/course-d-t';

type IProps = {
    course: ICourseDT;
}

defineProps<IProps>();
</script>