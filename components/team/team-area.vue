<template>
    <section class="team-area pt-100 mb-100">
        <div class="container">
            <div class="row align-items-end">
                <div class="col-lg-6 col-md-8">
                    <div class="tp-section mb-45">
                        <h5 class="tp-section-3-subtitle">Our Team</h5>
                        <h3 class="tp-section-3-title">Meet Our
                            <span>Teachers
                                <img class="tp-underline-shape-9 wow bounceIn" data-wow-duration="1.5s"
                                    data-wow-delay=".4s" src="/images/unlerline/team-2-svg-1.svg" alt="">
                            </span>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-6 col-md-4">
                    <div class="tp-team-2-arrow d-flex align-items-center justify-content-md-end mb-55">
                        <div class="tp-team-2-prev pointer">
                            <span>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 11L1 6L6 1" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                        <div class="tp-team-2-next pointer">
                            <span>
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <swiper :slides-per-view="4" :space-between="30" :loop="true" :navigation="{nextEl: '.tp-team-2-next',prevEl: '.tp-team-2-prev'}" :modules="[Navigation]" :breakpoints="{ 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 576: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }" class="swiper tp-team-2-active wow fadeInUp" data-wow-delay=".5s">
                <swiper-slide v-for="(item) in online_instructors_data" :key="item.id">
                    <div class="tp-team-2-item">
                        <div class="tp-team-2-bg"></div>
                        <div class="tp-team-2-social">
                            <span class="tp-team-2-social-wrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" class="feather feather-plus">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </span>
                            <div class="tp-team-2-social-icon">
                                <a v-for="(s) in item.socials" :key="s.id" :href="s.link" target="_blank">
                                    <i :class="s.iconCls"></i>
                                </a>
                            </div>
                        </div>
                        <div class="tp-team-2-thumb">
                            <img :src="item.image" :alt="item.name">
                        </div>
                        <div class="tp-team-2-content">
                            <h4 class="tp-team-2-title"><NuxtLink to="/my-account">{{ item.name }}</NuxtLink></h4>
                            <span>{{ item.title }}</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { online_instructors_data } from "@/data/team-data";
</script>
