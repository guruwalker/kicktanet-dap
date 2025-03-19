<template>
    <div>
        <nuxt-layout name="layout-three">

            <!-- hero area start -->
            <hero-banner-three />
            <!-- hero area end -->

            <!-- service area start -->
            <service-two />
            <!-- service area end -->

            <!-- process area start -->
            <process-one />
            <!-- process area end -->

            <!-- program area start -->
            <program-two />
            <!-- program area end -->

            <!-- gallery area start -->
            <gallery-one />
            <!-- gallery area end -->

            <!-- subject area start -->
            <subject-one />
            <!-- subject area end -->

            <!-- event area start -->
            <event-two />
            <!-- event area end -->

            <!-- cta area start -->
            <cta-three />
            <!-- cta area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Home Kids Education  | KICTANet" });
</script>
