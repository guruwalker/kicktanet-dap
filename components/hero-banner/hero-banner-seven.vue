<template>
    <div class="tp-hero-6-area lightblue-bg tp-hero-2-bg fix">
        <div class="container custom-container-1300">
            <div class="tp-hero-6-wrap">
                <div class="row align-items-end">
                    <div class="col-xxl-7 col-xl-6 col-lg-7 col-md-12">
                        <div class="tp-hero-6-content">
                            <span class="tp-hero-6-subtitle wow fadeInUp" data-wow-delay=".3s"><svg-pen-one />
                                World Class Education
                            </span>
                            <h2 class="tp-hero-6-title wow fadeInUp" data-wow-delay=".5s">Get <span>2500+
                                <img class="wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="/images/hero/home-6/title-vector.png" alt=""></span>
                                <br>Best Online Courses <br> From Acadia
                            </h2>
                            <p class="wow fadeInUp" data-wow-delay=".7s">
                                Acquire global knowledge and build your professional skills
                            </p>
                            <div class="tp-hero-6-btn-box d-flex align-items-center wow fadeInUp" data-wow-delay=".9s">
                                <div class="tp-hero-6-btn">
                                    <NuxtLink class="tp-btn-inner" href="/course-with-filter">Find Courses
                                        <span>
                                            <svg-arrow-right-four />
                                        </span>
                                    </NuxtLink>
                                </div>
                                <div class="tp-hero-6-video">
                                    <a @click.prevent="playVideo('_RpLvsA1SNM')" class="video-border-animation popup-video" href="#">
                                        <span>
                                            <svg-video-play-three />
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5 col-xl-4 col-lg-5 col-md-6">
                        <div class="tp-hero-6-wrap p-relative wow fadeInUp" data-wow-delay=".5s">
                            <div class="tp-hero-6-bg"></div>
                            <div class="tp-hero-6-shape">
                                <div class="shape-1"><img src="/images/hero/home-6/hero-6-thumb-shape-1.png" alt="shape">
                                </div>
                                <div class="shape-2"><img src="/images/hero/home-6/hero-6-thumb-shape-2.png" alt="shape">
                                </div>
                                <div class="shape-3"><img src="/images/hero/home-6/hero-6-thumb-shape-3.png" alt="shape">
                                </div>
                            </div>
                            <div class="tp-hero-6-user">
                                <span>Instructor</span>
                                <div class="tp-hero-6-user-content d-flex align-items-center">
                                    <div class="tp-hero-6-user-thumb">
                                        <img src="/images/hero/home-6/hero-6-user-1.jpg" alt="">
                                        <img src="/images/hero/home-6/hero-6-user-2.jpg" alt="">
                                        <img src="/images/hero/home-6/hero-6-user-3.jpg" alt="">
                                        <img src="/images/hero/home-6/hero-6-user-4.jpg" alt="">
                                    </div>
                                    <div class="tp-hero-6-user-text">
                                        <p><i>200+</i> <br> Instructors</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tp-hero-6-thumb">
                    <img src="/images/hero/home-6/hero-6-thumb.png" alt="">
                </div>
            </div>
        </div>
        <div class="tp-hero-2-shape">
            <div class="tp-hero-2-shape-2">
                <img src="/images/hero/hero-6-shape-2.png" alt="">
            </div>
            <div class="tp-hero-2-shape-3">
                <img src="/images/hero/hero-2-shape-3.png" alt="">
            </div>
        </div>
    </div>

    <!-- video popup start -->
    <modal-video />
    <!-- video popup end -->
</template>

<script setup lang="ts">
const {playVideo} = useVideoPopup();
</script>
