<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="About Us" subtitle="About Us" />
            <!-- breadcrumb area end -->

            <!-- about area start -->
            <about-two spacing="pt-90 pb-90" />
            <!-- about area end -->

            <!-- counter area start -->
             <counter-three/>
            <!-- counter area end -->

            <!-- mission area start -->
             <mission-area-one />
            <!-- mission area end -->

            <!-- about area start -->
             <about-three />
            <!-- about area end -->

            <!-- team area start -->
             <team-area-four />
            <!-- team area end -->

            <!-- about campus area start -->
             <about-campus />
            <!-- about campus area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University About - Acadia" });
</script>
