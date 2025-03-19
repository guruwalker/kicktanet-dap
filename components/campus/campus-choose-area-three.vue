<template>
    <section class="tp-campus-choose-area pt-120 pb-80 grey-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-campus-choose-wrapper text-center">
                        <div class="tp-campus-choose-btn">
                            <p>Mission and values</p>
                            <div class="tp-campus-choose-content mb-10">
                                <h2 class="tp-campus-choose-title">
                                    The Ecadia University prepare you to <br />
                                    launch your career by providing a supportive, <br />
                                    creative, and professional.
                                </h2>
                            </div>
                            <a href="#">
                                <span><svg-arrow-down-three /></span>
                            </a>
                        </div>
                    </div>
                </div>

                <div v-for="(item, index) in chooseData" :key="item.id" class="col-lg-3 col-md-6"
                    :class="{ 'col-lg-6': index === 1 }">
                    <div :class="['tp-mission-valus-thumb mb-30', item.class]">
                        <img :src="item.imgSrc" alt="" />
                        <div class="tp-mission-valus-content">
                            <h4 class="tp-mission-valus-title">{{ item.title }}</h4>
                            <p v-html="item.description"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
interface ChooseData {
    id: number;
    title: string;
    description: string;
    imgSrc: string;
    class?: string;
}

const chooseData: ChooseData[] = [
    {
        id: 1,
        title: "Vision",
        description:
            "Inspiring and transforming lives in <br> a spiritually vital, caring school <br> community to serve God for <br> His glory.",
        imgSrc: "/images/our-mission/mission/mission-thumb-1.jpg",
    },
    {
        id: 2,
        title: "Mission",
        description:
            "KICTANet University transforms lives through <br> accessible, student-centered, quality <br> higher education.",
        imgSrc: "/images/our-mission/mission/mission-thumb-2.jpg",
        class: "main pt-100 mb-30 pl-125",
    },
    {
        id: 3,
        title: "Values",
        description:
            "Our goal is to develop and meet the <br> needs of each child so that he & she <br> becomes a well-rounded tomorrow <br> individual.",
        imgSrc: "/images/our-mission/mission/mission-thumb-3.jpg",
    },
];
</script>
