<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <!-- event details banner area start -->
            <event-details-banner />
            <!-- event details banner area end -->

            <!-- event details area start -->
            <event-details-area v-if="event" :event="event" />
            <!-- event details area end -->
        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
import { all_events } from '@/data/event-data';

definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Event Details - Acadia" });

const route = useRoute();
const id = route.params.id
const event = all_events.find((item) => item.id == Number(id));
</script>
