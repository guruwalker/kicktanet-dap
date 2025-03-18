<template>
    <section class="tp-testimonial-6-ptb pt-120 pb-120" data-bg-color="#F8F8FA" style="background-color: #F8F8FA;">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-testimonial-6-heading text-center mb-45">
                        <div class="tp-team-6-heading">
                            <h5 class="tp-section-3-subtitle color-9">Testimonials</h5>
                            <h3 class="tp-section-3-title color-9">People Say About
                                <span>Acadia
                                    <svg-shape-line-four/>
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-testimonial-6-wrapper p-relative">
            <div class="container-fluid">
                <div class="row">
                    <div class="tp-testimonial-6-slider">

                            <swiper :slides-per-view="5" :space-between="15" :loop="true" :modules="[Autoplay]" :autoplay="{ delay: 0 ,disableOnInteraction: true}" :speed="6000" :breakpoints="{ 1400: { slidesPerView: 5 }, 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 576: { slidesPerView: 2 }, 0: { slidesPerView: 1 }}" class="tp-testimonial-6-active swiper pb-10">
                                <swiper-slide v-for="(testimonial, index) in testimonial_three_data" :key="index">
                                    <div class="tp-testimonial-6-item p-relative">
                                        <div class="tp-testimonial-6-item-shape">
                                            <img :src="testimonial.shape" :alt="'Quote from ' + testimonial.name" />
                                        </div>
                                        <div class="tp-testimonial-6-item-content">
                                            <h4 class="tp-testimonial-6-item-title">{{ testimonial.title }}</h4>
                                            <p>{{ testimonial.text }}</p>
                                        </div>
                                        <div class="tp-testimonial-6-item-user d-flex align-items-center">
                                            <div class="tp-testimonial-6-item-user-thumb">
                                                <img :src="testimonial.userImage" :alt="testimonial.name" />
                                            </div>
                                            <div class="tp-testimonial-6-item-user-content">
                                                <p>{{ testimonial.name }}</p>
                                                <span>{{ testimonial.designation }}</span>
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
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { testimonial_three_data } from '@/data/testimonial-data';

onMounted(() => {
    const activeTestimonial = document.querySelector('.tp-testimonial-6-active .swiper-wrapper');
    if(activeTestimonial) {
        activeTestimonial.classList.add('slide-transtion');
    }
});
onUnmounted(() => {
    const activeTestimonial = document.querySelector('.tp-testimonial-6-active .swiper-wrapper');
    if(activeTestimonial) {
        activeTestimonial.classList.remove('slide-transtion');
    }
});
</script>