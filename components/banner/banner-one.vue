
<template>
    <section class="banner-area pb-60">
        <div :class="`container ${custom_container}`">
            <div class="row">
                <div class="col-lg-6" v-for="banner in bannerData" :key="banner.id">
                    <div :class="['tp-banner-sm-2-wrap', banner.additionalClasses, 'mb-60', 'wow', 'fadeInUp']"
                        :data-wow-delay="banner.wowDelay">
                        <h3 class="tp-banner-sm-2-title" v-html="banner.title"></h3>
                        <div class="tp-banner-sm-2-btn">
                            <nuxt-link :href="banner.btnLink">{{ banner.btnText }}</nuxt-link>
                        </div>
                        <div class="tp-banner-sm-2-shape-1">
                            <img :src="banner.image" alt="banner">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
withDefaults(defineProps<{custom_container?: string}>(),{
    custom_container: ''
});

const bannerData = [
    {
        id: 1,
        title: `Earn a <br>
            <span>Certificate
                <img class="tp-underline-shape-11 wow bounceIn" data-wow-duration="1.5s" 
                    data-wow-delay=".4s" src="/images/unlerline/banner-2-svg-1.svg" alt="">
            </span>`,
        btnText: "View Programs",
        btnLink: "/contact",
        image: "/images/banner/banner-2-thumb-1.png",
        additionalClasses: "",
        wowDelay: ".3s",
    },
    {
        id: 2,
        title: `Best <br>Rated
            <span>Courses
                <img class="tp-underline-shape-11 wow bounceIn" data-wow-duration="1.5s" 
                    data-wow-delay=".4s" src="/images/unlerline/banner-2-svg-2.svg" alt="">
            </span>`,
        btnText: "View Programs",
        btnLink: "/course-with-filter",
        image: "/images/banner/banner-2-thumb-2.png",
        additionalClasses: "tp-banner-sm-2-bg-2",
        wowDelay: ".3s",
    },
];
</script>
