<template>
    <section class="event-area pt-90 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="tp-section-2 text-center mb-50">
                        <h2 class="tp-section-2-title">Upcoming Event Schedule</h2>
                    </div>
                </div>
            </div>
            <div class="row">

                <div v-for="(item) in kids_event_data" :key="item.id" class="col-lg-4 col-md-6">
                    <div class="tp-event-3-item mb-30 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-event-3-thumb">
                            <NuxtLink :to="`/event-details/${item.id}`">
                                <img :src="item.image" :alt="item.title">
                            </NuxtLink>
                            <div class="tp-event-3-date">
                                <span>{{ item.date.day }}</span>
                                <p>{{ item.date.month }}</p>
                            </div>
                        </div>
                        <div class="tp-event-3-content">
                            <h3 class="tp-event-3-title">
                                <NuxtLink :to="`/event-details/${item.id}`">{{ item.title }}</NuxtLink>
                            </h3>
                            <span>
                                <img src="/images/icon/location.svg" alt="location">
                                {{ item.location }}
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { kids_event_data } from '@/data/event-data';
</script>
