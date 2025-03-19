<template>
    <div>
        <nuxt-layout name="shop-layout">

            <!-- my account area start -->
             <my-account-area/>
            <!-- my account area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "My Account  | KICTANet" });
</script>
