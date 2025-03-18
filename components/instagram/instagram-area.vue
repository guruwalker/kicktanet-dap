<template>
    <div class="instagram-area tp-instagram-wrapper grey-bg pb-20">
        <div >
            <swiper :slides-per-view="5" :space-between="10" :modules="[Autoplay]" :autoplay="{ delay: 3500 }" :loop="true" :breakpoints="{ 1200: { slidesPerView: 5 }, 992: { slidesPerView: 4 }, 768: { slidesPerView: 3 }, 576: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }" class="swiper tp-instagram-active wow fadeInUp" data-wow-delay=".2s">
                <swiper-slide v-for="item in instagramData" class="tp-instagram-item">
                    <a class="popup-image" :href="item.link">
                        <img :src="item.src" alt="image">
                    </a>
                    <div class="tp-instagram-shape">
                        <img src="/images/instagram/instagram-shape.svg" alt="">
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const instagramData = [
    {
        id: 1,
        link: "https://www.instagram.com",
        src: "/images/instagram/instagram-thumb-1.jpg",
    },
    {
        id: 2,
        link: "https://www.instagram.com",
        src: "/images/instagram/instagram-thumb-2.jpg",
    },
    {
        id: 3,
        link: "https://www.instagram.com",
        src: "/images/instagram/instagram-thumb-3.jpg",
    },
    {
        id: 4,
        link: "https://www.instagram.com",
        src: "/images/instagram/instagram-thumb-4.jpg",
    },
    {
        id: 5,
        link: "https://www.instagram.com",
        src: "/images/instagram/instagram-thumb-5.jpg",
    },
    {
        id: 6,
        link: "https://www.instagram.com",
        src: "/images/instagram/instagram-thumb-2.jpg",
    },
];

</script>