<template>
    <section class="brand-area theme-bg-2 tp-brand-5-bg mb-120">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="tp-brand-5-section text-center">
                        <h4 class="tp-brand-5-title">The renovator is proudly partnered with</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <swiper :slides-per-view="6" :loop="true" :modules="[Autoplay]" :autoplay="{ delay: 5000 }"
                        :breakpoints="{ 1200: { slidesPerView: 6 }, 992: { slidesPerView: 4 }, 768: { slidesPerView: 3 }, 576: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }" class="swiper tp-brand-5-active">
                        <swiper-slide v-for="(b, i) in brands" :key="i">
                            <div class="tp-brand-5-item">
                                <img :src="b" alt="brand">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

// brands 
const brands = [
    '/images/brand/brand-5-logo-1.png',
    '/images/brand/brand-5-logo-2.png',
    '/images/brand/brand-5-logo-3.png',
    '/images/brand/brand-5-logo-4.png',
    '/images/brand/brand-5-logo-5.png',
    '/images/brand/brand-5-logo-6.png',
    '/images/brand/brand-5-logo-1.png',
    '/images/brand/brand-5-logo-2.png',
    '/images/brand/brand-5-logo-3.png',
    '/images/brand/brand-5-logo-4.png',
    '/images/brand/brand-5-logo-5.png',
    '/images/brand/brand-5-logo-6.png',
];


</script>
