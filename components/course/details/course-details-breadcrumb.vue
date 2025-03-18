<template>
    <section class="tp-breadcrumb__area pt-25 pb-55 p-relative z-index-1 fix">
        <div class="tp-breadcrumb__bg" style="background-image: url(/images/breadcrumb/breadcrumb-bg-2.jpg);"></div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-12">
                    <div class="tp-breadcrumb__content">
                        <div class="tp-breadcrumb__list course-details mb-70">
                            <span><nuxt-link href="/"><svg-home /></nuxt-link></span>
                            <span>Courses / Design / {{ removeTagInText(course.title) }}</span>
                        </div>

                        <div class="tp-course-details-2-header">
                            <span class="tp-course-details-2-category">{{course.category}}</span>
                            <h3 class="tp-course-details-2-title">Bigener Adobe Illustrator for <br /> Graphic Design
                            </h3>
                            <div class="tp-course-details-2-meta-wrapper d-flex align-items-center flex-wrap">
                                <div class="tp-course-details-2-meta ">
                                    <div class="tp-course-details-2-author d-flex align-items-center">
                                        <div class="tp-course-details-2-author-avater">
                                            <img :src="course.author_img ? course.author_img : '/images/course/course-5-teacher-1.png'" alt="Salim Rana" />
                                        </div>
                                        <div class="tp-course-details-2-author-content">
                                            <span class="tp-course-details-2-author-designation">Teacher</span>
                                            <h3 class="tp-course-details-2-meta-title"><a href="#">Maria Fisce</a></h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="tp-course-details-2-meta">
                                    <span class="tp-course-details-2-meta-subtitle">Category</span>
                                    <h3 class="tp-course-details-2-meta-title">Data Science</h3>
                                </div>
                                <div class="tp-course-details-2-meta">
                                    <span class="tp-course-details-2-meta-subtitle">Last updated</span>
                                    <h3 class="tp-course-details-2-meta-title">15 July, 2024</h3>
                                </div>
                                <div class="tp-course-details-2-meta text-end">
                                    <div class="tp-course-details-2-meta-rating-wrapper">
                                        <div class="tp-course-rating-icon">
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <span class="tp-course-details-2-meta-subtitle">Review</span>
                                    </div>
                                </div>
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


type IProps = {
    course: ICourseDT
};

defineProps<IProps>();
</script>