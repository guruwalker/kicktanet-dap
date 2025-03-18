<template>
    <section class="banner-area">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div v-for="banner in banners" :key="banner.id" class="col-lg-6">
                    <div class="tp-banner-5-item" :style="{ backgroundImage: `url(${banner.background})` }">
                        <div class="tp-banner-5-content text-center">
                            <span>{{ banner.spanText }}</span>
                            <h2 class="tp-banner-5-title">
                                <template v-if="isPhoneNumber(banner.title)">
                                    <a :href="`tel:${extractPhoneNumber(banner.title)}`">
                                        {{ banner.title }}
                                    </a>
                                </template>
                                <template v-else>
                                    {{ banner.title }}
                                </template>
                            </h2>
                            <p>{{ banner.description }}</p>
                            <div class="tp-banner-5-btn">
                                <nuxt-link :class="banner.buttonClass" to="/contact">
                                    {{ banner.buttonText }}
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const banners = ref([
    {
        id: 1,
        background: "/images/banner/banner-5-bg-1.jpg",
        spanText: "Claim your",
        title: "Free 7 days Pass",
        description: "Enjoy a workout on us! You will be happy for sure.",
        buttonText: "Get started",
        buttonClass: "tp-btn-5",
    },
    {
        id: 2,
        background: "/images/banner/banner-5-bg-2.jpg",
        spanText: "Call Us",
        title: "402 911 2804",
        description: "If we can help you on your journey! Or check out our FAQ’s",
        buttonText: "CONTACT US",
        buttonClass: "tp-btn-4",
    },
]);

const isPhoneNumber = (text: string): boolean => /^\d{3} \d{3} \d{4}$/.test(text);
const extractPhoneNumber = (text: string): string =>
    text.replace(/\D/g, "");
</script>