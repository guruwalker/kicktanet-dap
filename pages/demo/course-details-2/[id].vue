<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <template v-if="course">

                <!-- course details area start -->
                <course-details-area-two :course="course" />
                <!-- course details area end -->

                <!-- course details area start -->
                <course-details-related-courses />
                <!-- course details area end -->
            </template>

            <div v-if="!course" class="text-center mt-100 mb-80">
                <h3>No Course found with id: {{ id }}</h3>
            </div>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
import { all_courses } from '@/data/course-data';

definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Course Details 2  | KICTANet" });

const route = useRoute();
const id = route.params.id;

const course = all_courses.find((item) => item.id == Number(id));
</script>
