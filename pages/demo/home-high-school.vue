<template>
    <div>
        <nuxt-layout name="layout-five">

            <!-- hero area start -->
            <hero-banner-five />
            <!-- hero area end -->

            <!-- about area start -->
            <about-two />
            <!-- about area end -->

            <!-- counter area start -->
            <counter-two />
            <!-- counter area end -->

            <!-- program area start -->
            <program-three />
            <!-- program area end -->

            <!-- course area start -->
            <course-high-school />
            <!-- course area end -->

            <!-- why choose us area start -->
            <why-choose-us />
            <!-- why choose us area end -->

            <!-- testimonial area start -->
            <testimonial-one />
            <!-- testimonial area end -->

            <!-- event area start -->
            <event-three />
            <!-- event area end -->

            <!-- tutoring-features area start -->
            <tutoring-features />
            <!-- tutoring-features area end -->

            <!-- plan area start -->
            <plan-area />
            <!-- plan area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Home High School  | KICTANet" });
</script>
