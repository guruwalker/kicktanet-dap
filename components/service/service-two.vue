<template>
    <section class="service-area tp-service-3-bg" style="background-image: url(/images/bg/services-3-bg.jpg);">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10">
                    <div class="tp-section p-relative mb-45 text-center">
                        <h3 class="tp-section-title-white">We are kindergarten <br> & childhood is our passion.</h3>
                        <div class="tp-service-3-heading">
                            <img src="/images/shape/service/services-shape-2.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(item,i) in servicesData" :key="item.id" class="col-lg-3 col-sm-6">
                    <div class="tp-service-3-item mb-30 wow fadeInUp" :data-wow-delay="`.${i+1}s`">
                        <div class="tp-service-3-icon">
                            <span class="tp-service-3-icon-active">
                                <img :src="item.iconActive" alt="icon">
                            </span>
                            <span class="tp-service-3-icon-hover">
                                <img :src="item.iconHover" alt="icon">
                            </span>
                        </div>
                        <div class="tp-service-3-content">
                            <h4 class="tp-service-3-title">
                                <a href="#"><div v-html="item.title"></div></a>
                            </h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-service-3-shape">
            <div class="tp-service-3-shape-1">
                <img src="/images/shape/service/services-3-shape-1.png" alt="">
            </div>
            <div class="tp-service-3-shape-2">
                <img src="/images/shape/service/services-3-shape-2.png" alt="">
            </div>
            <div class="tp-service-3-shape-3">
                <img src="/images/shape/service/services-3-shape-3.png" alt="">
            </div>
            <div class="tp-service-3-shape-4">
                <img src="/images/shape/service/services-3-shape-4.png" alt="">
            </div>
            <div class="tp-service-3-shape-5">
                <img src="/images/shape/service/services-3-shape-5.png" alt="">
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const servicesData = [
    {
        id: 1,
        title: "Home-like Environment",
        description: "We create for children an home-like place.",
        iconActive: "/images/icon/service/services-3-icon-1.svg",
        iconHover: "/images/icon/service/services-3-hover-1.svg",
    },
    {
        id: 2,
        title: "Safety and <br> Security",
        description: "We create for children an home-like place.",
        iconActive: "/images/icon/service/services-3-icon-2.svg",
        iconHover: "/images/icon/service/services-3-hover-2.svg",
    },
    {
        id: 3,
        title: "Quality <br> Educators",
        description: "We create for children an home-like place.",
        iconActive: "/images/icon/service/services-3-icon-3.svg",
        iconHover: "/images/icon/service/services-3-hover-3.svg",
    },
    {
        id: 4,
        title: "Play <br> to Learn",
        description: "We create for children an home-like place.",
        iconActive: "/images/icon/service/services-3-icon-4.svg",
        iconHover: "/images/icon/service/services-3-hover-4.svg",
    },
];
</script>
