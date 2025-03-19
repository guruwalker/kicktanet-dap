<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner />
            <!-- banner area end -->

            <dashboard-content-wrapper>

                <!-- analytic area start -->
                <dashboard-instructor-analytics-overview-area />
                <!-- analytic area end -->

            </dashboard-content-wrapper>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor Analytics Overview  | KICTANet" });
</script>
