<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner />
            <!-- banner area end -->

            <dashboard-content-wrapper>

                <!-- fact area start -->
                <dashboard-instructor-dashboard-fact-area />
                <!-- fact area end -->

                <!-- progress area start -->
                <dashboard-instructor-dashboard-progress-area />
                <!-- progress area end -->

                <!-- my-courses area start -->
                <dashboard-instructor-dashboard-my-courses />
                <!-- my-courses area end -->

            </dashboard-content-wrapper>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor Dashboard  | KICTANet" });
</script>
