<template>
    <div>
        <nuxt-layout name="layout-ten">

            <!-- checkout area start -->
             <checkout-area/>
            <!-- checkout area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Checkout - Acadia" });
</script>
