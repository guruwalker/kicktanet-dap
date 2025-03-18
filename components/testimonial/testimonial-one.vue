<template>
    <section class="testimonial-area tp-testimonial-bg fix p-relative" 
        style="background-image: url(/images/bg/testimonial-bg-2.jpg);">
        <div class="tp-testimonial-themebg">
            <span></span>
            <div class="tp-testimonial-themebg-shape">
                <svg-shape/>
            </div>
        </div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="tp-video-wrap d-flex">
                        <div class="tp-video-icon text-center">
                            <a @click.prevent="playVideo('LlCwHnp3kL4')" class="video-border-animation popup-video" href="#">
                                <span>
                                    <svg-video-play/>
                                </span>
                            </a>
                            <p>Video Tour in logo</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-testimonial-wrapper wow fadeInRight" data-wow-delay=".3s">
                        <div class="tp-section mb-40">
                            <h5 class="tp-section-subtitle">Testimonial</h5>
                            <h3 class="tp-section-title">What Students Says</h3>
                        </div>
                        <div class="tp-testimonial-shape">
                            <div class="tp-testimonial-shape-1">
                                <img src="/images/testimonial/testimonial-shape-1.png" alt="testimonial-shape">
                            </div>
                            <div class="tp-testimonial-shape-2">
                                <img src="/images/testimonial/testimonial-shape-2.png" alt="testimonial-shape">
                            </div>
                            <div class="tp-testimonial-shape-3 wow bounceIn" data-wow-duration="1.5s"
                                data-wow-delay=".4s">
                                <img src="/images/testimonial/testimonial-shape-3.svg" alt="testimonial-shape">
                            </div>
                        </div>

                        <swiper :slides-per-view="1" :space-between="10" :navigation="{nextEl: '.tp-testimonial-next',prevEl: '.tp-testimonial-prev'}" :loop="true" :modules="[Navigation]" class="swiper tp-testimonial-active">
                            <swiper-slide v-for="(item) in testimonial_one_data" :key="item.id" class="tp-testimonial-item">
                                <div class="tp-testimonial-avatar">
                                    <img :src="item.img" alt="testimonial-avatar">
                                </div>
                                <div class="tp-testimonial-content">
                                    <p>{{item.content}}</p>
                                </div>
                                <div class="tp-testimonial-avatar-info">
                                    <h4 class="tp-testimonial-avatar-title">{{item.name}}</h4>
                                    <span>{{item.position}}</span>
                                </div>
                            </swiper-slide>
                        </swiper>

                        <div class="tp-testimonial-arrow text-md-end">
                            <div class="tp-testimonial-prev pointer">
                                <span>
                                    <svg-arrow-prev-one/>
                                </span>
                            </div>
                            <div class="tp-testimonial-next pointer">
                                <span>
                                    <svg-arrow-next-one />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- video popup start -->
     <modal-video />
    <!-- video popup end -->
</template>

<script setup lang="ts">
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import {testimonial_one_data} from '@/data/testimonial-data';
const {playVideo} = useVideoPopup();
</script>