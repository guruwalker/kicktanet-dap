<template>
    <div>
        <nuxt-layout name="layout-four">

            <!-- hero area start -->
            <hero-banner-four />
            <!-- hero area end -->

            <!-- service area start -->
            <service-three />
            <!-- service area end -->

            <!-- category area start -->
            <category-two />
            <!-- category area end -->

            <!-- brand area start -->
            <brand-area-two />
            <!-- brand area end -->

            <!-- course area start -->
            <course-gym-area />
            <!-- course area end -->

            <!-- video area start -->
            <video-one />
            <!-- video area end -->

            <!-- text slider area start -->
            <text-slider />
            <!-- text slider area end -->

            <!-- pricing area start -->
            <pricing-area />
            <!-- pricing area end -->

            <!-- team area start -->
            <team-area-two />
            <!-- team area end -->

            <!-- banner area start -->
            <banner-two />
            <!-- banner area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Home Gym Coaching - Acadia" });
</script>
