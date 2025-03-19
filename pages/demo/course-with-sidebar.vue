<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <!-- breadcrumb area start -->
            <breadcrumb-two title="Course With Sidebar" subtitle="Course With Sidebar" />
            <!-- breadcrumb area end -->

            <!-- course filter sidebar top area start -->
             <course-filter-sidebar-top-area/>
            <!-- course filter sidebar top area end -->

            <!-- course filter sidebar area start -->
             <course-with-sidebar-area/>
            <!-- course filter sidebar area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Course With Sidebar  | KICTANet" });
</script>
