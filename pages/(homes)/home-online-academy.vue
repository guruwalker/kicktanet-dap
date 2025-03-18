<template>
    <div>
        <nuxt-layout name="layout-seven">

            <!-- hero area start -->
            <hero-banner-seven />
            <!-- hero area end -->

            <!-- fun fact area start -->
            <fun-fact-area :bg="false" top_cls="tp-funfact-6-ptb" custom_container="custom-container-1300" />
            <!-- fun fact area end -->

            <!-- category area start -->
            <category-four />
            <!-- category area end -->

            <!-- course area start -->
            <course-online-academy />
            <!-- course area end -->

            <!-- team area start -->
            <team-area-three />
            <!-- team area end -->

            <!-- banner area start -->
            <banner-one custom_container="custom-container-1300" />
            <!-- banner area end -->

            <!-- brand area start -->
            <brand-area custom_container="custom-container-1300" />
            <!-- brand area end -->

            <!-- testimonial area start -->
            <testimonial-three />
            <!-- testimonial area end -->

            <!-- blog area start -->
            <blog-two />
            <!-- blog area end -->

            <!-- cta area start -->
             <cta-two top_cls="tp-cta-6-area pt-120 pb-120" bg-clr="#5956E9" />
            <!-- cta area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Home Online Academy - Acadia" });
</script>
