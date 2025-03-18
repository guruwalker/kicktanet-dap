<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Financial Aid" subtitle="Financial Aid" :admission="true" />
            <!-- breadcrumb area end -->

            <!-- campus area start -->
            <campus-choose-area />
            <!-- campus area end -->

            <!-- counter area start -->
            <counter-four />
            <!-- counter area end -->

            <!-- process area start -->
            <process-three />
            <!-- process area end -->

            <!-- financial area start -->
            <section class="tp-financial-area tp-financial-bg pt-90 pb-90">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-financial-heading">
                                <h3 class="tp-financial-title">Types of Aid</h3>
                            </div>
                        </div>

                        <div v-for="item in financialAidData" :key="item.id" class="col-lg-4 col-md-6">
                            <div class="tp-financial-item mb-30">
                                <div class="tp-financial-thumb">
                                    <img :src="item.imgSrc" :alt="item.title"/>
                                </div>
                                <div class="tp-financial-content">
                                    <h4 class="tp-financial-content-title">{{ item.title }}</h4>
                                    <p>{{ item.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- financial area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Financial Aid - Acadia" });


// Financial Aid Data
const financialAidData = [
    {
        id: 1,
        imgSrc: "/images/course/details/financial-thumb-1.jpg",
        title: "Scholarships",
        description:
            "Acadia’s commitment to student success, important scholarship, and creative activity sets it apart from other colleges.",
    },
    {
        id: 2,
        imgSrc: "/images/course/details/financial-thumb-2.jpg",
        title: "Grants",
        description:
            "Your FAFSA will determine what grants you qualify for—both from The Acadia University & from federal and state government.",
    },
    {
        id: 3,
        imgSrc: "/images/course/details/financial-thumb-3.jpg",
        title: "Loans",
        description:
            "Many students have used federal and private loans to fund a quality education that would otherwise be out of reach.",
    },
];
</script>
