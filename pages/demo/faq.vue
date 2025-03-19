<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <!-- breadcrumb area start -->
            <breadcrumb-two title="Faq Page" subtitle="Faq Page" color="color" :pages="true" />
            <!-- breadcrumb area end -->

            <!-- faq area start -->
            <faq-area />
            <!-- faq area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "FAQ  | KICTANet" });
</script>
