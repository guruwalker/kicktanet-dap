<template>
    <div>
        <nuxt-layout name="layout-eleven" :isTransparent="true">

            <!-- course banner area start -->
             <course-banner-with-tab :list-active="true"/>
            <!-- course banner area end -->

            <!-- course filter area start -->
             <course-with-tab-area :list-active="true"/>
            <!-- course filter area end -->

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
useSeoMeta({ title: "Course With Tab List - Acadia" });
</script>
