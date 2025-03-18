<template>
    <section class="tp-postbox-details-bottom p-relative pt-90 pb-60">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3 class="tp-postbox-details-bottom-title">
                        You may also like
                    </h3>
                </div>
                <div v-for="blog in related_blogs" :key="blog.id" class="col-lg-4 col-md-6">
                    <blog-item-two :blog="blog" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { blog_stories_data } from '@/data/blog-data';
const related_blogs = [...blog_stories_data].slice(0, 3);
</script>
