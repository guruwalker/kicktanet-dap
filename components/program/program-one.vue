<template>
    <section class="program-area mb-75">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tp-program-wrap wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-section text-center mb-55">
                            <h3 class="tp-section-title">
                                <span> Academic
                                    <img class="tp-underline-shape-2 wow bounceIn" data-wow-duration="1.5s"
                                        data-wow-delay=".4s" src="/images/unlerline/program-1-svg-1.svg"
                                        alt="underline">
                                </span> Programs
                            </h3>
                            <p>Focusing on high education with the best quality.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <swiper :slides-per-view="3" :space-between="30" :loop="true"
                        :pagination="{ clickable: true, el: '.tp-program-dot' }" :modules="[Pagination]"
                        :breakpoints="{ 1200: { slidesPerView: 3 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 576: { slidesPerView: 1 }, 0: { slidesPerView: 1 } }"
                        class="swiper tp-program-active wow fadeInUp" data-wow-delay=".6s">

                        <swiper-slide v-for="(item) in university_classic_program_data" :key="item.id"
                            class="tp-program-item grey-bg mb-50">
                            <div class="tp-program-thumb fix">
                                <NuxtLink to="/university-application-form">
                                    <img :src="item.img" alt="program-thumb">
                                </NuxtLink>
                            </div>
                            <div class="tp-program-content">
                                <h3 class="tp-program-title">
                                    <NuxtLink to="/university-application-form">{{ item.title }}</NuxtLink>
                                </h3>
                                <p v-html="item.description"></p>
                                <div class="tp-program-tag">
                                    <p>
                                        <span>
                                            <img src="/images/icon/program-tag-1.svg" alt="program-icon">
                                        </span>{{ item.category }}
                                    </p>
                                </div>
                            </div>
                            <div class="tp-program-btn">
                                <NuxtLink to="/university-application-form">Apply Now</NuxtLink>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
                <div class="col-12">
                    <div class="tp-program-dot text-center"></div>
                </div>
                <div class="col-12">
                    <div class="tp-program-all text-center">
                        <p>Explore the most appropriate promgram.​​ <NuxtLink to="/university-program">View all Programs
                                <span>
                                    <svg-arrow-right-sm-three />
                                </span>
                            </NuxtLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { university_classic_program_data } from '@/data/program-data';
</script>
