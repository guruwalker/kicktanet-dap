<template>
    <div>
        <nuxt-layout name="layout-ten">

            <!-- banner area start -->
             <cart-area/>
            <!-- banner area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Cart  | KICTANet" });
</script>
