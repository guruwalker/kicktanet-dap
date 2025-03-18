<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner />
            <!-- banner area end -->

            <dashboard-content-wrapper>

                <!-- announcement area start -->
                <dashboard-instructor-announcement-area :modal-id="modalId" />
                <!-- announcement area end -->

            </dashboard-content-wrapper>

            <!-- announcement modal -->
            <modal-announcement :modal-id="modalId" />
            <!-- announcement modal -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor Announcements - Acadia" });

const modalId  = ref("add-announcement");
</script>
