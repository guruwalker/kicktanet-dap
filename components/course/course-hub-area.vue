<template>
    <section class="tp-course-7-ptb pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <course-single-list-item-two v-for="course in online_courses_data.slice(0, 3)" :key="course.id"
                        :course="course" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { online_courses_data } from '@/data/course-data';
</script>