<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <!-- banner area start -->
            <breadcrumb-two title="Upcoming Events" subtitle="Upcoming Events" color="color" :pages="true" />
            <!-- banner area end -->

            <!-- event area start -->
            <event-four />
            <!-- event area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Event - Acadia" });
</script>
