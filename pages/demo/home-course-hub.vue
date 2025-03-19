<template>
    <div>
        <nuxt-layout name="layout-seven">

            <!-- hero area start -->
            <hero-banner-eight />
            <!-- hero area end -->

            <!-- course area start -->
             <course-hub-area />
            <!-- course area end -->

            <!-- fun fact area start -->
             <fun-fact-two />
            <!-- fun fact area end -->

            <!-- course area start -->
             <course-area spacing="pt-120 pb-100" />
            <!-- course area end -->

            <!-- testimonial area start -->
             <testimonial-three/>
            <!-- testimonial area end -->

            <!-- brand area start -->
             <brand-area spacing="pt-120 pb-120"/>
            <!-- brand area end -->

            <!-- course live area start -->
             <course-live-area-two />
            <!-- course live area end -->

            <!-- cta area start -->
             <cta-five />
            <!-- cta area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Home Course Hub  | KICTANet" });
</script>
