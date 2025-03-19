<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner />
            <!-- banner area end -->

            <dashboard-content-wrapper>

                <!-- top area start -->
                <dashboard-instructor-top-filtering-area />
                <!-- top area end -->

                <!-- Quiz area start -->
                <dashboard-instructor-quiz-attemps-area />
                <!-- Quiz area end -->

            </dashboard-content-wrapper>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor Quiz  | KICTANet" });
</script>
