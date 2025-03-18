<template>
    <section class="tp-upcoming-area tp-upcoming-gap p-relative tp-upcoming-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-upcoming-box text-center">
                        <div class="tp-upcoming-logo tp-header-logo">
                            <nuxt-link href="/">
                                <img src="/images/logo/logo-white.png" alt="logo" />
                            </nuxt-link>
                        </div>
                        <div class="tp-upcoming-heading">
                            <h2 class="tp-upcoming-title">The site is currently <br /> down for maintenance</h2>
                            <p class="tp-upcoming-subtitle">We apologize for any inconveniences caused. <br /> we’ve almost done.</p>
                        </div>
                        <div class="tp-upcoming-countdwon">
                            <div class="tp-event-details-countdown">
                                <countdown-timer expiry-timestamp="november 30 2025 20:20:22" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
useSeoMeta({ title: "Up Coming - Acadia" });
</script>
