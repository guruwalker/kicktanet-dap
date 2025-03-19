<template>
    <div>
        <nuxt-layout name="layout-ten">

            <!-- banner area start -->
             <shop-grid-area/>
            <!-- banner area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Shop Grid  | KICTANet" });
</script>
