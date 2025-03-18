<template>
    <div>
        <nuxt-layout name="layout-two">

            <!-- hero area start -->
            <hero-banner-two />
            <!-- hero area end -->

            <!-- category area start -->
            <category-one />
            <!-- category area end -->

            <!-- fun fact area start -->
            <fun-fact-area />
            <!-- fun fact area end -->

            <!-- course area start -->
            <course-area />
            <!-- course area end -->

            <!-- course live area start -->
            <course-live-area />
            <!-- course live area end -->

            <!-- testimonial area start -->
            <testimonial-two />
            <!-- testimonial area end -->

            <!-- team area start -->
            <team-area />
            <!-- team area end -->

            <!-- brand area start -->
            <brand-area />
            <!-- brand area end -->

            <!-- banner area start -->
            <banner-one />
            <!-- banner area end -->

            <!-- cta area start -->
            <cta-two />
            <!-- cta area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Home Online Course - Acadia" });
</script>
