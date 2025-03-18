<template>
    <section class="tp-marquee-area tp-marquee-scroll fix">
            <Vue3Marquee :duration="80" :pause-on-hover="true" class="tp-marquee-item fix">
                <h2 v-for="(item, i) in marquee_text" :key="i" class="tp-marquee-title me-2">
                    {{ item.text }} <span>{{ item.percent }} <svg-shape-line-three /></span>
                </h2>
            </Vue3Marquee>
    </section>
</template>

<script setup lang="ts">

const marquee_text = [
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
    { text: "Fitness voucher - Get more than", percent: "50%" },
];
</script>
