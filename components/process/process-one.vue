<template>
    <section class="process-area tp-process-3-bg fix">
        <div class="container">
            <div class="row">
                <div class="col-xxl-6 col-lg-8">
                    <div class="tp-process-3-wrap">
                        <div class="tp-section-2">
                            <h2 class="tp-section-2-title">
                                Our Unique <br /> learning environment
                            </h2>
                            <p>
                                Speedily say has suitable disposal add boy. On forth doubt miles of child.
                                <br />
                                Exercise joy man children rejoiced.
                            </p>
                        </div>
                        <div class="tp-process-3-btn">
                            <NuxtLink to="/contact">
                                Contact Us
                                <span>
                                    <svg-arrow-right-four />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tp-process-3-wrapper">
                <div class="row">
                    <div v-for="(process, index) in processData" :key="index" class="col-lg-4">
                        <div :class="[
                            'tp-process-3-item',
                            `tp-process-3-item-${process.id}`,
                            'wow fadeInUp',
                        ]" :data-wow-delay="`.${process.id}s`">
                            <div class="tp-process-3-icon">
                                <span :class="process.borderCls">
                                    <img :src="process.icon" :alt="process.title" />
                                </span>
                            </div>
                            <div class="tp-process-3-content">
                                <h4 class="tp-process-3-title">{{ process.title }}</h4>
                                <p>{{ process.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tp-process-3-shape-1 wow fadeInUp" data-wow-delay=".5s">
                    <span>
                        <svg-process-line />
                    </span>
                </div>
            </div>
        </div>
        <div class="tp-process-3-shape">
            <div v-for="(shape, index) in shapeData" :key="index" :class="shape.cls">
                <img :src="shape.src" alt="shape" />
            </div>
            <div class="tp-process-3-shape-12"></div>
            <div class="tp-process-3-shape-13"></div>
            <div class="tp-process-3-shape-14"></div>
            <div class="tp-process-3-shape-15"></div>
            <div class="tp-process-3-shape-16"></div>
            <div class="tp-process-3-shape-17"></div>
        </div>
    </section>
</template>

<script setup lang="ts">

const shapeData = [
    { cls: "tp-process-3-shape-2", src: '/images/shape/process/process-3-ground.png' },
    { cls: "tp-process-3-shape-3", src: '/images/shape/process/process-3-leaf-1.svg' },
    { cls: "tp-process-3-shape-4", src: '/images/shape/process/process-3-leaf-2.png' },
    { cls: "tp-process-3-shape-5", src: '/images/shape/process/process-3-leaf-3.png' },
    { cls: "tp-process-3-shape-6", src: '/images/shape/process/process-3-leaf-4.png' },
    { cls: "tp-process-3-shape-7", src: '/images/shape/process/process-3-leaf-5.png' },
    { cls: "tp-process-3-shape-8", src: '/images/shape/process/process-3-baby-1.png' },
    { cls: "tp-process-3-shape-9", src: '/images/shape/process/process-3-baby-2.png' },
    { cls: "tp-process-3-shape-10", src: '/images/shape/process/process-3-heart-1.png' },
    { cls: "tp-process-3-shape-11", src: '/images/shape/process/process-3-football-1.png' },
];

const processData = [
    {
        id: 1,
        borderCls: "pink-border",
        icon: '/images/icon/process/process-icon-1.svg',
        title: "We care about kids",
        description: "Lorem ipsum dolor sit amet, mea ei viderer probatus.",
    },
    {
        id: 2,
        borderCls: "gblue-border",
        icon: '/images/icon/process/process-icon-2.svg',
        title: "Building life-long learners",
        description: "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur.",
    },
    {
        id: 3,
        borderCls: "lyellow-border",
        icon: '/images/icon/process/process-icon-3.svg',
        title: "Helping struggling students",
        description: "Lorem ipsum dolor sit amet, mea ei viderer probatus consequuntur.",
    }
];
</script>
