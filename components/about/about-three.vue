<template>
    <section class="tp-about-year-area tp-about-year-bg p-relative pt-200 pb-95">
        <div class="tp-about-year-shape">
            <div class="shape-1">
                <img src="/images/our-mission/star.png" alt="">
            </div>
            <div class="shape-2">
                <img src="/images/our-mission/thumb-2-shape.jpg" alt="">
            </div>
        </div>
        <div class="tp-about-year-plr tp-about-year-nav">
            <Carousel v-bind="thumbnailsConfig" v-model="currentSlide" class="slider slider-nav">
                <Slide v-for="item in about_years" :key="item.id" @click="slideTo(item.id - 1)">
                    <h3 class="tp-about-year-nav-title">{{ item.year }}</h3>
                </Slide>
            </Carousel>
        </div>
        <div class="tp-about-year-box">
            <div class="container">
                <div class="row align-items-center">
                    <Carousel v-bind="testimonialConfig" v-model="currentSlide" class="slider slider-for">
                        <Slide v-for="(item) in slider_data" :key="item.id" class="tp-about-year-inner">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="tp-about-year-thumb">
                                        <img :src="item.image" alt="thumb">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="tp-about-year-content text-start">
                                        <h4 class="tp-about-year-content-title" v-html="item.title"></h4>
                                        <p>{{ item.description }}</p>
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

const currentSlide = ref(0);
const carouselRef = ref<InstanceType<typeof Carousel> | null>(null);

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide);

// years
const about_years = [{id:1, year:1996}, {id:2, year:2005}, {id:3, year:2012}, {id:4, year:2000}, {id:5, year:2023}];

// slider data 
const slider_data = [
    {
        id: 1,
        image: "/images/our-mission/thumb-2.jpg",
        title: "15 New <br/> Courses Added",
        description:
            "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
    },
    {
        id: 2,
        image: "/images/our-mission/thumb-3.jpg",
        title: "8 New <br/> Courses Added",
        description:
            "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
    },
    {
        id: 3,
        image: "/images/our-mission/thumb-4.jpg",
        title: "10 New <br/> Courses Added",
        description:
            "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
    },
    {
        id: 4,
        image: "/images/our-mission/thumb-3.jpg",
        title: "8 New <br/> Courses Added",
        description:
            "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
    },
    {
        id: 5,
        image: "/images/our-mission/thumb-2.jpg",
        title: "15 New <br/> Courses Added",
        description:
            "Etiam quis sapien in orci feugiat suscipit quis eget risus. Morbi in dapibus magna, et congue tortor. Students loved the system, but the teachers struggled to manage the paperwork and manual tracking.",
    },
];


const testimonialConfig = {
    itemsToShow: 1,
    wrapAround: false,
};

const thumbnailsConfig = {
    itemsToShow: 3,
    wrapAround: true,
    gap: 15,
    breakpoints: {
        // 400px and up
        400: {
            itemsToShow: 2,
        },
        // 500px and up
        500: {
            itemsToShow: 3,
        },
        // 700px and up
        700: {
            itemsToShow: 3,
        },
    },
};
</script>