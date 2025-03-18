<template>
    <section class="trainer-area pb-110 pt-110" style="background-color: #FAF6F3;">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="tp-trainer-5-wrapper mb-40 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-section-5 mb-30">
                            <h5 class="tp-section-5-subtitle mb-5">Professional trainers</h5>
                            <h3 class="tp-section-5-title">Our team of personal trainers</h3>
                            <p>Alienum phaedrum torquatos nec eu, vis detraxitssa <br> ericuliser ex, nihil expetendis
                                in mei.</p>
                        </div>
                        <div class="tp-trainer-5-btn">
                            <NuxtLink class="tp-btn-4" href="/university-leadership">Get started</NuxtLink>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="tp-trainer-5-wrap wow fadeInUp" data-wow-delay=".5s">

                        <swiper :slides-per-view="2" :space-between="30" :loop="true" :modules="[Autoplay]" :autoplay="{ delay: 5000 }" :breakpoints="{ 1200: { slidesPerView: 2 }, 992: { slidesPerView: 2 }, 768: { slidesPerView: 2 }, 576: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }" class="swiper tp-trainer-5-active">

                            <swiper-slide v-for="(item) in gym_trainer_data" :key="item.id" class="tp-trainer-5-item">
                                <div class="tp-trainer-5-thumb">
                                    <img :src="item.image" alt="">
                                </div>

                                <div class="tp-trainer-5-box">
                                    <div class="tp-trainer-5-content">
                                        <div class="tp-trainer-5-info">
                                            <h4 class="tp-trainer-5-title">
                                                <NuxtLink to="/my-account">{{ item.name }}</NuxtLink>
                                            </h4>
                                            <span>{{ item.title }}</span>
                                        </div>
                                        <div class="tp-trainer-5-social">
                                            <a v-for="(s, i) in item.socials" :key="i" :href="s.link" target="_blank">
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
import { Autoplay } from "swiper/modules";
import { gym_trainer_data } from "@/data/team-data";

</script>
