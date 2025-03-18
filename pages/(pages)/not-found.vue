<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <!-- not found area start -->
            <div class="tp-error-area pt-120 pb-120">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="tp-error-wrapper text-center">
                                <h4 class="tp-error-title">Oops!</h4>
                                <div class="tp-error-thumb mb-50">
                                    <img src="/images/error/error.png" alt="error-img" />
                                </div>
                                <div class="tp-error-content">
                                    <h4 class="tp-error-title-sm">Something went Wrong...</h4>
                                    <p>Sorry, "we couldn't" find your page.</p>
                                    <nuxt-link class="tp-btn-inner" href="/">Back to Home</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- not found area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Not Found - Acadia" });
</script>
