<template>
    <div>
        <nuxt-layout name="layout-nine">

            <!-- breadcrumb area start -->
            <blog-details-full-width-banner />
            <!-- breadcrumb area end -->

            <!-- blog full width img -->
            <div class="tp-blog-full-width-img">
                <div class="container-fluid p-0 ">
                    <div class="row g-0">
                        <div class="col-lg-12">
                            <div class="tp-blog-full-width-thumb">
                                <img src="/images/blog/deatils/blog-full-width-bg.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- blog full width img -->

            <!-- blog list area start -->
            <blog-details-area-two v-if="blog" :blog="blog" />
            <!-- blog list area end -->

            <!-- related blog area -->
            <blog-details-related-blog v-if="blog" />
            <!-- related blog area -->

            <div v-if="!blog" class="text-center mt-100 mb-80">
                No blog found with id: {{ id }}
            </div>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
import all_blogs from '@/data/blog-data';

definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Blog Details - Acadia" });

const route = useRoute();
const id = route.params.id
const blog = all_blogs.find((item) => item.id == Number(id));
</script>
