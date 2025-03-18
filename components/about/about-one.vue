<template>
    <section class="about-area tp-about-bg grey-bg pt-105">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tp-about-wrap mb-60 wow fadeInLeft" data-wow-delay=".3s">
                        <div class="tp-about-thumb-wrapper">
                            <div class="tp-about-thumb-1">
                                <img src="/images/about/about-thumb-1.jpg" alt="">
                            </div>
                            <div class="tp-about-thumb-2">
                                <img src="/images/about/about-thumb-2.jpg" alt="">
                            </div>
                        </div>
                        <div class="tp-about-shape">
                            <div class="tp-about-shape-1">
                                <img src="/images/about/about-shape-1.jpg" alt="">
                            </div>
                            <div class="tp-about-shape-2">
                                <img src="/images/about/about-shape-2.jpg" alt="">
                            </div>
                        </div>
                        <div class="tp-about-exprience">
                            <div class="tp-about-exprience-text d-flex">
                                <h3 class="tp-about-exprience-count">
                                    <span data-purecounter-duration="1" data-purecounter-end="27" class="purecounter">27</span>
                                </h3>
                                <p>Years of <br> Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-about-wrapper mb-60 wow fadeInRight" data-wow-delay=".3s">
                        <div class="tp-section mb-40">
                            <h5 class="tp-section-subtitle">About Our University</h5>
                            <h3 class="tp-section-title mb-30">A few words <br> about the
                                <span> University <svg-shape-line/> </span>
                            </h3>
                            <p>Our community is being called to reimagine the future. As the <br> only university where
                                a renowned design school comes together <br> with premier colleges, we are making
                                learning more relevant <br> and transformational.</p>
                        </div>
                        <div class="tp-about-list">

                            <div v-for="(l) in about_lists" :key="l.id" class="tp-about-list-item d-flex align-items-center mb-35">
                                <div class="tp-about-list-icon">
                                    <span><img :src="l.icon" alt="about-icon"></span>
                                </div>
                                <div class="tp-about-list-content">
                                    <h5 class="tp-about-list-title">{{ l.title }}</h5>
                                    <p v-html="l.subtitle"></p>
                                </div>
                            </div>

                            <div class="tp-about-btn pt-10">
                                <NuxtLink class="tp-btn tp-btn-sm" href="/university-apply">Book an Appointment
                                    <span>
                                        <svg-arrow-right-one/>
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const about_lists = [
    {
        id: 1,
        icon: '/images/icon/about/about-icon-1.svg',
        title: 'Building Trust',
        subtitle: 'We are committed to <br/> building trust'
    },
    {
        id: 2,
        icon: '/images/icon/about/about-icon-2.svg',
        title: 'Trusted by Students',
        subtitle: 'Most trusted & recommended <br/> by students'
    }
];
</script>
