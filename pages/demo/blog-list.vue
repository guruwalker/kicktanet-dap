<template>
    <div>
        <nuxt-layout name="layout-nine">

            <!-- breadcrumb area start -->
             <breadcrumb-two title="Blog List" subtitle="Blog List" />
            <!-- breadcrumb area end -->

            <!-- blog list area start -->
             <blog-list-area/>
            <!-- blog list area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Blog List  | KICTANet" });
</script>
