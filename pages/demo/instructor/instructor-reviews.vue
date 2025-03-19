<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner />
            <!-- banner area end -->

            <dashboard-content-wrapper>

                <!-- reviews area start -->
                <dashboard-instructor-reviews-area />
                <!-- reviews area end -->

            </dashboard-content-wrapper>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor Reviews  | KICTANet" });
</script>
