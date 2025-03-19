<template>
    <div>
        <nuxt-layout name="layout-ten">

            <!-- banner area start -->
            <wishlist-area />
            <!-- banner area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Wishlist  | KICTANet" });
</script>
