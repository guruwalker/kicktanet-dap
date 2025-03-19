<template>
    <div>
        <nuxt-layout name="layout-six">

            <!-- hero area start -->
            <hero-banner-six />
            <!-- hero area end -->

            <!-- category area start -->
            <category-three />
            <!-- category area end -->

            <!-- shop area start -->
            <shop-area />
            <!-- shop area end -->

            <!-- cta area start -->
            <cta-four />
            <!-- cta area end -->

            <!-- author area start -->
            <shop-book-authors />
            <!-- author area end -->

            <!-- services area start -->
            <shop-services />
            <!-- services area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Home Books Shop  | KICTANet" });
</script>
