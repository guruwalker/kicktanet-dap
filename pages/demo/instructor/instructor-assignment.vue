<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner />
            <!-- banner area end -->

            <dashboard-content-wrapper>

                <!-- top area start -->
                <dashboard-instructor-top-filtering-area title="Assignments" />
                <!-- top area end -->

                <!-- assignment area start -->
                <dashboard-instructor-assignment-area />
                <!-- assignment area end -->

            </dashboard-content-wrapper>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor Assignment  | KICTANet" });
</script>
