<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="History" subtitle="History" />
            <!-- breadcrumb area end -->

            <!-- campus choose area start -->
            <section class="tp-campus-choose-area pt-120 pb-90 grey-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-campus-choose-wrapper text-center">
                                <div class="tp-campus-choose-btn">
                                    <p>History KICTANet</p>
                                    <a href="#down">
                                        <span><svg-arrow-down-five /></span>
                                    </a>
                                </div>
                                <div class="tp-campus-choose-content mb-10">
                                    <h2 class="tp-campus-choose-title">Opened in 1896 to meet the growing educational
                                        needs of Melbourne’s west, the University early decades were quite challenging.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- campus choose area end -->

            <!-- history area start -->
            <section class="tp-history-area grey-bg pb-120">
                <div class="container">
                    <div id="down" class="tp-history-box-wrapper p-relative">
                        <div v-for="(item, index) in historyData" :key="item.id" :class="['tp-history-box p-relative',item.overlayClass,index !== historyData.length - 1 ? 'mb-180' : '']">
                            <div class="row align-items-center">
                                <div class="col-lg-2">
                                    <div class="tp-history-year">
                                        <h5 class="tp-history-year-title">{{ item.year }}</h5>
                                    </div>
                                </div>
                                <template v-if="item.thumbPosition === 'left'">
                                    <div class="col-lg-5">
                                        <div class="tp-history-item-thumb-left">
                                            <img :src="item.imgSrc" alt="history-thumbnail"/>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="tp-history-item-content">
                                            <h2 class="tp-history-title">{{ item.title }}</h2>
                                            <p v-html="item.description"></p>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <div class="col-lg-5">
                                        <div class="tp-history-item-content-left">
                                            <h2 class="tp-history-title">{{ item.title }}</h2>
                                            <p v-html="item.description"></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-5">
                                        <div class="tp-history-item-thumb-right">
                                            <img :src="item.imgSrc" alt="history-thumbnail"/>
                                        </div>
                                    </div>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- history area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University History  | KICTANet" });


// history data
const historyData = [
    {
        id: 1,
        year: "1889",
        imgSrc: "/images/history/history-thumb-1.jpg",
        title: "1889",
        description:
            "Dr. Wright opens a new campus on thirty-two <br/> acres on University Boulevard donated by Cabell <br/> Outlaw, Jr. (Class of 1937).",
        thumbPosition: "left",
        overlayClass: "overlay-1",
    },
    {
        id: 2,
        year: "1938",
        imgSrc: "/images/history/history-thumb-2.jpg",
        title: "1938",
        description:
            "Dr. Wright opens a new campus on thirty-two <br/> acres on University Boulevard donated by Cabell <br/> Outlaw, Jr. (Class of 1937).",
        thumbPosition: "right",
        overlayClass: "",
    },
    {
        id: 3,
        year: "2012",
        imgSrc: "/images/history/history-thumb-3.jpg",
        title: "2012",
        description:
            "Dr. Wright opens a new campus on thirty-two <br/> acres on University Boulevard donated by Cabell <br/> Outlaw, Jr. (Class of 1937).",
        thumbPosition: "left",
        overlayClass: "",
    },
    {
        id: 4,
        year: "2023",
        imgSrc: "/images/history/history-thumb-4.jpg",
        title: "2023",
        description:
            "Dr. Wright opens a new campus on thirty-two <br/> acres on University Boulevard donated by Cabell <br/> Outlaw, Jr. (Class of 1937).",
        thumbPosition: "right",
        overlayClass: "overlay-2",
    },
];
</script>
