<template>
    <section class="event-area tp-event-4 grey-bg pt-115 pb-90">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-lg-6">
                    <div class="tp-event-4-section mb-60">
                        <h5 class="tp-section-subtitle">Events</h5>
                        <h3 class="tp-section-4-title">Upcoming <span> Events
                                <svg xmlns="http://www.w3.org/2000/svg" width="130" height="10" viewBox="0 0 130 10" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M125.062 8.93792C70.1883 -2.76192 22.1358 4.10077 5.29024 8.85108C3.83077 9.26264 1.75893 9.15211 0.66266 8.6042C-0.433612 8.0563 -0.139185 7.2785 1.32028 6.86694C19.892 1.62988 70.7793 -5.48976 128.327 6.7801C129.914 7.11852 130.47 7.8759 129.568 8.47177C128.667 9.06763 126.649 9.27634 125.062 8.93792Z"
                                        fill="#161613" />
                                </svg>
                            </span>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-event-4-all-btn text-lg-end mb-70">
                        <nuxt-link class="tp-btn-3" href="/event">See More Events</nuxt-link>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(event) in high_school_events" :key="event.id" class="col-lg-4 col-md-6">
                    <div class="tp-event-4-item mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-event-4-thumb-wrap text-center">
                            <div class="tp-event-4-thumb fix">
                                <img :src="event.image" :alt="event.title">
                            </div>
                        </div>
                        <div class="tp-event-4-box">
                            <div class="tp-event-4-content">
                                <p>{{ event.date.day }} {{ event.date.month }}, {{ event.date.year }}</p>
                                <h4 class="tp-event-4-title"><nuxt-link :href="`/event-details/${event.id}`">{{ event.title }}</nuxt-link></h4>
                                <span><img src="/images/icon/location.svg" alt=""> {{ event.location }}</span>
                            </div>
                            <div class="tp-event-4-info d-flex align-items-center justify-content-between">
                                <div class="tp-event-4-people">
                                    <img src="/images/event/event-4-shape-1.png" alt="">
                                </div>
                                <div class="tp-event-4-btn">
                                    <nuxt-link :href="`/event-details/${event.id}`">Get Ticket</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { high_school_events } from "@/data/event-data";
</script>