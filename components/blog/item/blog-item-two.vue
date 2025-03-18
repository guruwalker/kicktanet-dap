<template>
    <div class="tp-blog-stories-item p-relative mb-50">
        <div class="tp-blog-stories-thumb">
            <nuxt-link :to="`/blog-details/${blog.id}`">
                <img :src="blog.img" :alt="blog.title" />
            </nuxt-link>
        </div>
        <div class="tp-blog-stories-content">
            <div class="tp-blog-stories-tag-wrap d-flex">
                <a href="#">{{ blog.tag }}</a>
                <span>{{ blog.date }}</span>
            </div>
            <h4 class="tp-blog-stories-title">
                <nuxt-link :to="`/blog-details/${blog.id}`">{{ blog.title }}</nuxt-link>
            </h4>
            <div class="tp-blog-stories-user-box d-flex align-items-center">
                <div v-if="blog.author_img" class="tp-blog-stories-user-thumb">
                    <img :src="blog.author_img" :alt="blog.author" />
                </div>
                <span>{{ blog.author }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from '@/types/blog-d-t';

defineProps<{ blog: IBlogDT }>();
</script>
