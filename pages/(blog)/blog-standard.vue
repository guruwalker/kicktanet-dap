<template>
    <div>
        <nuxt-layout name="layout-nine">

            <!-- breadcrumb area start -->
             <breadcrumb-two title="Our Blog" subtitle="Blog Standard" />
            <!-- breadcrumb area end -->

            <!-- blog standard area start -->
             <blog-standard-area/>
            <!-- blog standard area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Blog Standard - Acadia" });
</script>
