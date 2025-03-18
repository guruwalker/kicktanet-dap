<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner :student-banner="true" />
            <!-- banner area end -->

            <dashboard-content-wrapper :student-sidebar="true">

                <!-- my quiz area start -->
                <dashboard-instructor-quiz-list-area />
                <!-- my quiz area end -->

            </dashboard-content-wrapper>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Student My Quiz - Acadia" });
</script>
