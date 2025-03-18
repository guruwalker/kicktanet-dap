<template>
    <section class="event-area grey-bg pt-85 pb-110">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-xl-5 col-md-8">
                    <div class="tp-event-section mb-60 wow fadeInUp" data-wow-delay=".2s">
                        <div class="tp-section">
                            <h3 class="tp-section-2-title">Recent & Upcoming
                                <span> Events <img class="tp-underline-shape-3 wow bounceIn" data-wow-duration="1.5s"
                                        data-wow-delay=".4s" src="/images/unlerline/event-1-svg-1.svg" alt="">
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-7 col-md-4">
                    <div class="tp-event-btn text-md-end mb-70">
                        <NuxtLink class="tp-btn" href="/event">See More Events
                            <span>
                                <svg-arrow-right-one />
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="tp-event-wrap wow fadeInUp" data-wow-delay=".3s">

                <div v-for="event in university_classic_event_data" :key="event.id" class="tp-event-item">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <div class="tp-event-list">
                                <h4 class="tp-event-list-count">{{event.date.day}}</h4>
                                <span>{{event.date.month}}, {{event.date.year}}</span>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="tp-event-content">
                                 <h3 class="tp-event-title">
                                    <hover-reveal-item :title="event.title" :img="event.image" />
                                 </h3>
                                <div class="tp-event-info">
                                    <span><i class="fa-sharp fa-light fa-clock"></i>8:00AM - 10:00AM</span>
                                    <span><i class="fa-sharp fa-light fa-location-dot"></i>United States</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1">
                            <div class="tp-event-arrow text-lg-end">
                                <NuxtLink to="/event-details/1">
                                    <span>
                                        <svg-arrow-right-three />
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import {university_classic_event_data} from '@/data/event-data';
</script>
