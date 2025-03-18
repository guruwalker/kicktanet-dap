<template>
    <section class="tp-event-details-breadcrumb-bg pb-110 p-relative z-index-1 fix"
        style="background-image: url(/images/event/event/event-details-bg.jpg);">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-12">
                    <div class="tp-breadcrumb__list tp-event-details-breadcrumb-list pb-120">
                        <span><nuxt-link href="/"><svg-home /></nuxt-link></span>
                        <span>Event</span>
                        <span>Global Education Fall Meeting for Everyone</span>
                    </div>
                    <div class="tp-event-details-breadcrumb-content">
                        <span class="tp-event-details-breadcrumb-subtitle">Lectures</span>
                        <h4 class="tp-event-details-breadcrumb-title">Global Education <br>
                            Fall Meeting for Everyone.</h4>
                        <div class="tp-event-details-countdown">
                            <div class="tp-event-details-countdown-inner">
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

</script>