<template>
    <section class="subject-area tp-subject-bg" data-background="/images/bg/subject-bg-bg.jpg" style="background-image: url(/images/bg/subject-bg-bg.jpg);">
        <div class="container">
            <div class="row">
                <div class="col-xl-5 col-lg-8">
                    <div class="tp-subject-section mb-40 wow fadeInUp" data-wow-delay=".3s">
                        <span>Key Features</span>
                        <h2 class="tp-section-2-title">What kindergarten functionality is inside?</h2>
                    </div>
                </div>
                <div class="col-xl-7 col-lg-12">
                    <div class="tp-subject-wrap mb-30 wow fadeInUp" data-wow-delay=".5s">

                        <div v-for="(item) in subjectsData" :key="item.id" class="tp-subject-item">
                            <div class="tp-subject-icon">
                                <span :class="item.borderClass">
                                    <img :src="item.icon" :alt="item.title">
                                </span>
                            </div>
                            <div class="tp-subject-content">
                                <h5 class="tp-subject-title-sm">{{ item.title }}</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const subjectsData = [
    {
        id: 1,
        icon: '/images/icon/subject/subject-icon-1.svg',
        borderClass: "pink-border",
        title: "Sign Language",
    },
    {
        id: 2,
        icon: '/images/icon/subject/subject-icon-2.svg',
        borderClass: "gblue-border",
        title: "Everyday Math",
    },
    {
        id: 3,
        icon: '/images/icon/subject/subject-icon-3.svg',
        borderClass: "yellow-border",
        title: "Handwriting",
    },
    {
        id: 4,
        icon: '/images/icon/subject/subject-icon-4.svg',
        borderClass: "blue-border",
        title: "Movement Matters",
    },
    {
        id: 5,
        icon: '/images/icon/subject/subject-icon-5.svg',
        borderClass: "tomato-border",
        title: "Second Language",
    },
    {
        id: 6,
        icon: '/images/icon/subject/subject-icon-6.svg',
        borderClass: "dark-border",
        title: "Art Studio",
    },
];
</script>
