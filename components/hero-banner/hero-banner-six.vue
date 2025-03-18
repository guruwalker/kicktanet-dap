<template>
    <section class="tp-shop-banner-ptb p-relative pt-110 pb-140">
        <div class="tp-shop-banner-bg" style="background-image: url(/images/shop/shop-thumb-bg.png);"></div>
        <div class="tp-shop-banner-space p-relative fix">

            <swiper :slides-per-view="1" :space-between="30" :modules="[Pagination]"
                :pagination="{ el: '.tp-shop-banner-dot', clickable: true }" class="tp-shop-banner-active">

                <swiper-slide v-for="(item) in sliderData" :key="item.id">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-7">
                                <div class="tp-shop-banner-thumb">
                                    <img :src="item.imgSrc" alt="">
                                </div>
                            </div>
                            <div class="col-lg-5">
                                <div class="tp-shop-banner-content">
                                    <span>{{item.subtitle}}</span>
                                    <h3 class="tp-shop-banner-title">{{item.title}}</h3>
                                    <div class="tp-shop-banner-btn">
                                        <NuxtLink to="/shop-grid">Shop Now <span>
                                              <svg-arrow-right-sm/>
                                            </span>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

            </swiper>

        </div>
        <div class="tp-shop-banner-dot"></div>
    </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";

const sliderData = [
    {
        id: 1,
        imgSrc: '/images/shop/shop-thumb-1.png',
        title: "Unleash your Imagination with Books",
        subtitle: "Sale Up To 25% Off",
    },
    {
        id: 2,
        imgSrc: '/images/shop/shop-thumb-2.png',
        title: "50% off hundreds of Books",
        subtitle: "Sale Up To 25% Off",
    },
    {
        id: 3,
        imgSrc: '/images/shop/shop-thumb-3.png',
        title: "Meet Your Next Favorite Book",
        subtitle: "Sale Up To 25% Off",
    },
];

</script>
