<template>
    <div>
        <nuxt-layout name="layout-eleven">

            <!-- breadcrumb area start -->
            <breadcrumb-two title="Instructor" subtitle="Instructor" color="color" :pages="true" />
            <!-- breadcrumb area end -->

            <!-- instructor area start -->
            <section class="tp-event-inner-area tp-event-inner-p pt-100 pb-50">
                <div class="container">
                    <div class="row">
                        <div v-for="(item, index) in leadership_data" :key="item.id"
                            class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" :data-wow-delay="getAnimationDelay(index)">
                            <team-single-item :item="item" :instructor="true" />
                        </div>
                    </div>
                </div>
            </section>
            <!-- instructor area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
import { leadership_data } from '@/data/team-data';
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor  | KICTANet" });

const getAnimationDelay = (index: number) => {
    return index > 9 ? '0.1s' : `.${(index + 1) * 0.1}s`;
};
</script>
