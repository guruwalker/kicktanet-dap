<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Our Leadership" subtitle="Our Leadership" />
            <!-- breadcrumb area end -->

            <!-- leadership area start -->
            <section class="tp-leadership-area grey-bg pt-120 pb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <search-leadership />
                        </div>
                    </div>
                    <div class="row">
                        <div v-for="(item, i) in leadership_data" :key="item.id"
                            class="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp"
                            :data-wow-delay="i > 9 ? '0.1s' : `.${(i + 1) * 0.1}s`">
                            <team-single-item :item="item" />
                        </div>
                    </div>
                </div>
            </section>
            <!-- leadership area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
import { leadership_data } from '@/data/team-data';
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Leadership  | KICTANet" });
</script>
