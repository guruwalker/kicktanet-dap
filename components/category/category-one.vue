<template>
     <section class="category-area mb-80 mt-95">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10">
                    <div class="tp-section mb-40 text-center wow fadeInUp" data-wow-delay=".4s">
                    <h5 class="tp-section-3-subtitle">Top Categories</h5>
                    <h3 class="tp-section-3-title">Most demanding 
                        <span>Categories 
                            <img class="tp-underline-shape-5 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="/images/shape/bottom-line/line-2-category.svg" alt="line">
                        </span>.
                    </h3>
                    </div>
                </div>
            </div>
            <div class="row">

                <div v-for="c in category_data" :key="c.id" class="col-lg-3 col-md-4 col-sm-6">
                    <nuxt-link href="/course-categories" class="tp-category-item mb-25 wow fadeInUp" :data-wow-delay="`.${c.id}s`">
                    <div class="tp-category-icon">
                        <span :class="c.color"><img :src="c.icon" alt="icon"></span>
                    </div>
                    <div class="tp-category-content">
                        <h4 class="tp-category-title">{{ c.title }}</h4>
                        <span>{{c.description}}</span>
                    </div>
                    </nuxt-link>
                </div>

            </div>
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-8">
                    <div class="tp-category-banner d-flex align-items-center justify-content-between tp-category-banner-bg mt-35" style="background-image: url(/images/bg/category-bg.jpg);">
                    <div class="tp-category-banner-content d-flex align-items-center">
                        <div class="tp-category-banner-shape">
                            <img src="/images/shape/category-2-shape-1.png" alt="">
                        </div>
                        <div class="tp-category-banner-text">
                            <span>Let Us Help</span>
                            <h4 class="tp-category-banner-title">Finding Your Right Courses</h4>
                        </div>
                    </div>
                        <div class="tp-category-banner-btn">
                            <nuxt-link class="tp-btn-2" href="/contact">Get Started</nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import category_data from '@/data/category-data';
</script>
