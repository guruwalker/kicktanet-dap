<template>
    <section class="tp-hero-area">
        <swiper :modules="[EffectFade, Autoplay]" :slides-per-view="1" effect="fade" :autoplay="{ delay: 3500 }" class="swiper tp-slider-active">
            <swiper-slide v-for="slider in heroSliderData" :key="slider.id">
                <div class="tp-hero-item">
                    <div class="container">
                        <div class="row">
                            <div class="col-xxl-9 col-lg-11">
                                <div class="tp-hero-wrapper">
                                    <span class="tp-hero-subtitle">{{ slider.subtitle }}</span>
                                    <h2 class="tp-hero-title">{{ slider.title }}</h2>
                                    <div class="tp-hero-btn">
                                        <nuxt-link class="tp-btn" href="/university-program">
                                            Enroll Now
                                            <span>
                                                <svg-arrow-right-one />
                                            </span>
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tp-hero-bg" data-background="assets/img/hero/hero-bg-1.jpg"
                        :style="{ 'background-image': 'url(' + slider.bgImg + ')' }"></div>
                </div>
            </swiper-slide>
        </swiper>
    </section>
</template>

<script setup lang="ts">
import { EffectFade, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const heroSliderData = [
    {
        id: 1,
        subtitle: "Be apart of our history",
        title: "Landmark to Create the Future.",
        bgImg: "/images/hero/hero-bg-1.jpg",
    },
    {
        id: 2,
        subtitle: "Be apart of our history",
        title: "Education to Create the Future.",
        bgImg: "/images/hero/hero-bg-2.jpg",
    },
    {
        id: 3,
        subtitle: "Be apart of our history",
        title: "Discipline to Create the Future.",
        bgImg: "/images/hero/hero-bg-3.jpg",
    },
];

</script>