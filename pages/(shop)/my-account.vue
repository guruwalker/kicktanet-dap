<template>
    <div>
        <nuxt-layout name="layout-ten">

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
useSeoMeta({ title: "My Account - Acadia" });
</script>
