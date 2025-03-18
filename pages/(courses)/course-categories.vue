<template>
    <div>
        <nuxt-layout name="layout-eleven" :isTransparent="true">

            <!-- category banner area start -->
            <category-banner />
            <!-- category banner area end -->

            <!-- category area start -->
             <category-courses/>
            <!-- category area end -->

            <!-- banner area start -->
             <banner-one/>
            <!-- banner area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Course Categories - Acadia" });
</script>
