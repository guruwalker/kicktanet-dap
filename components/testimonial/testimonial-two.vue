<template>
    <section class="testimonial-area lightblue-bg pb-85">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-6 col-lg-8">
                    <div class="tp-testimonial-section">
                        <div class="tp-section text-center mb-40">
                            <h5 class="tp-section-3-subtitle">Live Courses</h5>
                            <h3 class="tp-section-3-title">Student
                                <span>Say
                                    <img class="tp-underline-shape-8 wow bounceIn" data-wow-duration="1.5s"
                                        data-wow-delay=".4s" src="/images/unlerline/testimonial-2-svg-1.svg" alt="">
                                </span>
                                About KICTANet
                            </h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-xl-5 col-lg-6 col-md-8">
                    <div class="tp-testimonial-2-avatar-active p-relative">
                        <button @click="carouselRef?.prev()" type="button" class="slick-prev slick-arrow">
                            <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <Carousel v-bind="thumbnailsConfig" v-model="currentSlide" ref="carouselRef">
                            <Slide v-for="(item) in nav_avatars" :key="item.id" class="tp-testimonial-2-avatar-item"
                                @click="slideTo(item.id - 1)">
                                <img :src="item.img" alt="avatar">
                            </Slide>
                        </Carousel>
                        <button @click="carouselRef?.next()" type="button" class="slick-next slick-arrow">
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <Carousel v-bind="testimonialConfig" v-model="currentSlide" class="tp-testimonial-2-active">

                        <Slide v-for="item in testimonial_two_data" :key="item.id">
                            <div class="tp-testimonial-2-item text-center">
                                <div class="tp-testimonial-2-avatar-info">
                                    <h4 class="tp-testimonial-2-avatar-title">{{ item.name }}</h4>
                                    <span>{{ item.position }}</span>
                                    <div class="tp-testimonial-2-avatar-rating">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                </div>
                                <div class="tp-testimonial-2-content p-relative">
                                    <p>{{ item.testimonial }}</p>
                                    <div class="tp-testimonial-2-shape">
                                        <div class="shape-1">
                                            <img src="/images/testimonial/testimonial-shape-1.png" alt="">
                                        </div>
                                        <div class="shape-2">
                                            <img src="/images/testimonial/testimonial-shape-3.png" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>

                    </Carousel>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { testimonial_two_data } from '@/data/testimonial-data';

const currentSlide = ref(0);
const carouselRef = ref<InstanceType<typeof Carousel> | null>(null);

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide);

// nav avatars
const nav_avatars = [
    { id: 1, img: "/images/testimonial/test-2-avatar-3.png" },
    { id: 2, img: "/images/testimonial/test-2-avatar-1.png" },
    { id: 3, img: "/images/testimonial/test-2-avatar-2.png" },
    { id: 4, img: "/images/testimonial/test-2-avatar-3.png" },
    { id: 5, img: "/images/testimonial/test-2-avatar-5.png" },
    { id: 6, img: "/images/testimonial/test-2-avatar-4.png" }
];


const testimonialConfig = {
    itemsToShow: 1,
    wrapAround: false,
};

const thumbnailsConfig = {
    itemsToShow: 5,
    wrapAround: true,
    gap: 15,
    breakpoints: {
    // 400px and up
    400: {
      itemsToShow: 2,
    },
    // 500px and up
    500: {
      itemsToShow: 4,
    },
    // 700px and up
    700: {
      itemsToShow: 5,
    },
  },
};
</script>
