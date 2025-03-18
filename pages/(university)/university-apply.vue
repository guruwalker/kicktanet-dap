<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="How to Apply" subtitle="How to Apply" :admission="true" />
            <!-- breadcrumb area end -->

            <!-- campus area start -->
            <campus-choose-area />
            <!-- campus area end -->

            <!-- apply area start -->
            <div class="tp-apply-thumb-area grey-bg pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-apply-thumb wow fadeInUp" data-wow-delay=".5s">
                                <img src="/images/course/details/apply-thumb.jpg" alt="apply-thumb">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- apply area end -->

            <!-- process area start -->
            <process-two />
            <!-- process area end -->

            <!-- requirement area start -->
             <requirement-apply-area />
            <!-- requirement area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Apply - Acadia" });
</script>
