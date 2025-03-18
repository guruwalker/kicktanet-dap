<template>
    <div>
        <nuxt-layout name="layout-nine">

            <!-- banner area start -->
             <blog-stories-banner/>
            <!-- banner area end -->

            <!-- blog stories area start -->
             <blog-stories-sidebar-area/>
            <!-- blog stories area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Blog Stories Sidebar - Acadia" });
</script>
