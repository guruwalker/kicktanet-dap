<template>
    <section class="team-area pt-100 mb-100">
        <div class="container custom-container-1300">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <div class="tp-team-6-wrap">
                        <div class="tp-team-6-heading mb-45">
                            <h5 class="tp-section-3-subtitle color-9">Instructors</h5>
                            <h3 class="tp-section-3-title color-9">Classes <br>
                                Taught by Real <br>
                                <span>Creators
                                    <svg-shape-line-four />
                                </span>
                            </h3>
                        </div>
                        <div class="tp-team-6-nav">
                            <div class="tp-team-2-arrow d-flex">
                                <div class="tp-team-2-prev pointer">
                                    <span>
                                        <svg-arrow-prev-two />
                                    </span>
                                </div>
                                <div class="tp-team-2-next pointer">
                                    <span>
                                        <svg-arrow-next-two />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- align-items-end -->
                <div class="col-md-8">
                    <div class="tp-team-6-wrapper">

                        <swiper :slides-per-view="4" :space-between="30" :modules="[Navigation]" :breakpoints="{ 1400: { slidesPerView: 3 }, 1200: { slidesPerView: 2.5 }, 992: { slidesPerView: 2.2 }, 576: { slidesPerView: 1 }, 0: { slidesPerView: 1 } }" :navigation="{nextEl: '.tp-team-2-next',prevEl: '.tp-team-2-prev'}" class="swiper tp-team-6-active wow fadeInUp" data-wow-delay=".5s">

                            <swiper-slide v-for="(item) in online_academy_creators" :key="item.id">
                                <div class="tp-event-details-item text-center mb-30">
                                    <div class="tp-event-details-item-thumb">
                                        <img :src="item.image" alt="event-img">
                                    </div>
                                    <div class="tp-event-details-item-content">
                                        <h4 class="tp-event-details-item-title color-9">
                                            <nuxt-link href="/my-account">{{ item.name }}</nuxt-link>
                                        </h4>
                                        <p>{{ item.title }}</p>
                                        <div class="tp-event-details-item-social">
                                            <a v-for="(s) in item.socials" :key="s.id" :href="s.link" target="_blank">
                                                <i :class="s.iconCls"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </swiper-slide>

                        </swiper>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { online_academy_creators } from "@/data/team-data";

const slider_setting = {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    // Navigation arrows
    navigation: {
        nextEl: ".tp-team-2-next",
        prevEl: ".tp-team-2-prev",
    },
    breakpoints: {
        '1400': {
            slidesPerView: 3,
        },
        '1200': {
            slidesPerView: 2.5,
        },
        '992': {
            slidesPerView: 2.2,
        },
        '768': {
            slidesPerView: 1,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}
</script>