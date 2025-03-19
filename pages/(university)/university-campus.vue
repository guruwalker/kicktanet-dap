<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Campus Life" subtitle="Campus Life" />
            <!-- breadcrumb area end -->

            <!-- campus area start -->
            <campus-choose-area-two />
            <!-- campus area end -->

            <!-- counter area start -->
            <counter-five />
            <!-- counter area end -->

            <!-- campus student area start -->
            <campus-student-area />
            <!-- campus student area end -->

            <!-- campus activity area start -->
            <campus-activity-area />
            <!-- campus activity area end -->

            <!-- campus video area start -->
            <campus-video-area />
            <!-- campus video area end -->

            <!-- campus life area start -->
            <campus-life-area />
            <!-- campus life area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Campus  | KICTANet" });
</script>
