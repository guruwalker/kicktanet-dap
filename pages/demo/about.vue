<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <!-- banner area start -->
            <about-banner />
            <!-- banner area end -->

            <!-- tutor area start -->
            <tutor-area />
            <!-- tutor area end -->

            <!-- counter area start -->
            <counter-six />
            <!-- counter area end -->

            <!-- mission area start -->
            <mission-area-one top_cls="pt-120 pb-120" bg-clr="#F3F4F8" />
            <!-- mission area end -->

            <!-- team area start -->
            <team-area />
            <!-- team area end -->

            <!-- brand area start -->
            <brand-area />
            <!-- brand area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "About - Acadia" });
</script>
