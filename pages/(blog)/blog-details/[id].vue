<template>
    <div>
        <nuxt-layout name="layout-nine">

            <!-- breadcrumb area start -->
            <breadcrumb-three title="Our Blog" subtitle="Blog Details" />
            <!-- breadcrumb area end -->

            <!-- blog list area start -->
            <blog-details-area v-if="blog" :blog="blog" />
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
