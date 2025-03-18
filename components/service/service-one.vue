<template>
    <section class="service-area tp-service-bg" style="background-image: url(/images/bg/services-bg.jpg);">
        <div class="container">
            <div class="row">

                <div v-for="(item) in service_data" class="col-lg-3 col-md-6">
                    <div class="tp-service-item text-center mb-40 wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-service-wrap">
                            <div class="tp-service-icon">
                                <span>
                                    <img :src="item.icon" alt="service-icon">
                                </span>
                            </div>
                            <h4 class="tp-service-title">
                                <nuxt-link href="/university-about">
                                    <div v-html="item.title"></div>
                                </nuxt-link>
                            </h4>
                            <div class="tp-service-btn">
                                <nuxt-link href="/university-about"><span><svg-arrow-right-two /></span></nuxt-link>
                            </div>
                        </div>
                        <div class="tp-service-content">
                            <p>{{ item.text }}</p>
                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-service-all text-center">
                        <span>Trusted by the worlds 
                            <nuxt-link href="/university-about">Best University
                                <svg-arrow-right-sm-two />
                            </nuxt-link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-service-shape">
            <div class="tp-service-shape-1 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s">
                <img src="/images/shape/service/services-shape-1.png" alt="service-shape">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const service_data = [
    {
        id: 1,
        icon: '/images/icon/service/service-icon-1.svg',
        title: "Why study at <br/> Acadia?",
        text: "We have students coming from different backgrounds,cultures, & nationalities as well.",
    },
    {
        id: 2,
        icon: '/images/icon/service/service-icon-2.svg',
        title: "Certification <br/> Guarantee",
        text: "We have students coming from different backgrounds,cultures, & nationalities as well.",
    },
    {
        id: 3,
        icon: '/images/icon/service/service-icon-3.svg',
        title: "Graduate <br/> Admissions",
        text: "We have students coming from different backgrounds,cultures, & nationalities as well.",
    },
    {
        id: 4,
        icon: '/images/icon/service/service-icon-4.svg',
        title: "Scholarships <br/> & fees",
        text: "We have students coming from different backgrounds,cultures, & nationalities as well.",
    },
];
</script>
