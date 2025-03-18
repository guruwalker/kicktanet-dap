<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner :student-banner="true" />
            <!-- banner area end -->

            <dashboard-content-wrapper :student-sidebar="true">

                <!-- question answer area start -->
                <dashboard-student-question-answer-area />
                <!-- question answer area end -->

            </dashboard-content-wrapper>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Student Question Answer - Acadia" });
</script>
