<template>
    <section class="program-area pb-120 grey-bg pb">
         <div class="container">
            <div class="row align-items-end">
               <div class="col-lg-8">
                  <div class="tp-program-4-section mb-60">
                     <span class="tp-section-subtitle">LEARN AT YOUR PACE</span>
                     <h3 class="tp-section-4-title">Academic <span>Programs
                        <svg xmlns="http://www.w3.org/2000/svg" width="170" height="12" viewBox="0 0 170 12" fill="none">
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M163.543 11.6881C91.7847 -3.61174 28.9468 5.36254 6.918 11.5745C5.00947 12.1127 2.30014 11.9681 0.866555 11.2516C-0.567032 10.5352 -0.182011 9.51803 1.72652 8.97984C26.0126 2.13138 92.5575 -7.17892 167.812 8.86629C169.887 9.30883 170.614 10.2993 169.435 11.0785C168.257 11.8577 165.618 12.1306 163.543 11.6881Z" fill="#161613"/>
                         </svg>
                     </span></h3>
                  </div>
               </div>
               <div class="col-lg-4">
                  <div class="tp-program-4-arrow text-start text-lg-end mb-60">
                     <div class="tp-program-4-prev pointer">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                              <path d="M6 11L1 6L6 1" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                     </div>
                     <div class="tp-program-4-next pointer">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                              <path d="M1 11L6 6L1 1" stroke="currentColor" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="swiper wow fadeInUp" data-wow-delay=".3s">

            <swiper :slides-per-view="4" :space-between="10" :loop="true" :navigation="{nextEl: '.tp-program-4-next',prevEl: '.tp-program-4-prev'}" :modules="[Navigation,Autoplay]" :breakpoints="{ 1200: { slidesPerView: 4 }, 992: { slidesPerView: 3 }, 768: { slidesPerView: 2 }, 576: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }" class="tp-program-4-active">

                  <swiper-slide v-for="(item) in high_school_program_data" :key="item.id" class="tp-program-4-item">
                     <div class="tp-program-4-thumb">
                        <img :src="item.img" alt="">
                     </div>
                     <div class="tp-program-4-content">
                        <h3 class="tp-program-4-title">
                            <nuxt-link href="/university-course-details">{{ item.title }}</nuxt-link>
                        </h3>
                        <span>{{ item.description }}</span>
                        <div class="tp-program-4-btn">
                           <nuxt-link href="/university-course-details">
                              <span>
                                 <svg-arrow-right-five/>
                              </span>
                           </nuxt-link>
                        </div>
                     </div>
                  </swiper-slide>
            </swiper>

         </div>
      </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation,Autoplay } from "swiper/modules";
import { high_school_program_data } from "@/data/program-data";

</script>