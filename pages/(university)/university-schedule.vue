<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Schedule a Tour" subtitle="Schedule a Tour" :admission="true" />
            <!-- breadcrumb area end -->

            <!-- schedule area start -->
            <div class="tp-schedule-area grey-bg pt-120 pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-schedule-wrapper">
                                <div class="tp-schedule-from-box">
                                    <!-- form start -->
                                     <form-schedule/>
                                    <!-- form end -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- schedule area end -->

            <!-- plan area start -->
            <plan-area />
            <!-- plan area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Schedule - Acadia" });
</script>
