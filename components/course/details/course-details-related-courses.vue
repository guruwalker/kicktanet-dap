<template>
    <section class="tp-course-details-2-related-area pb-80">
        <div class="container">
            <div class="tp-course-details-2-related-border"></div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-course-details-2-related-heading pt-80">
                        <h3 class="tp-course-details-2-related-title">Related Courses</h3>
                        <p>10,000+ unique online course list designs</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="item in related_courses" :key="item.id" class="col-lg-4 col-md-6">
                    <course-single-item :course="item" :removeTag="true" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { all_courses } from '@/data/course-data';

const related_courses = all_courses.slice(0, 3);
</script>