<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Computer Science" subtitle="Computer Science" />
            <!-- breadcrumb area end -->

            <!-- university course details area start -->
            <university-course-details-area />
            <!-- university course details area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Course Details - Acadia" });
</script>
