<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner />
            <!-- banner area end -->

            <dashboard-content-wrapper>

                <!-- calender area start -->
                <client-only>
                    <dashboard-instructor-calender-area />
                </client-only>
                <!-- calender area end -->

            </dashboard-content-wrapper>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor Calender  | KICTANet" });
</script>
