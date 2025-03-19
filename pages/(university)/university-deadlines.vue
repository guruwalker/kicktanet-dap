<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Dates & Deadlines" subtitle="Dates & Deadlines" :admission="true" />
            <!-- breadcrumb area end -->

            <!-- deadline area start -->
            <deadline-area />
            <!-- deadline area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Deadlines  | KICTANet" });
</script>
