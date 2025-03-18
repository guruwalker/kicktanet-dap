<template>
    <div class="tp-blog-item text-center mb-40 wow fadeInLeft" data-wow-delay=".2s">
        <div class="tp-blog-thumb fix">
            <nuxt-link :href="`/blog-details/${blog.id}`">
                <img :src="blog.img" alt="blog-thumb">
            </nuxt-link>
        </div>
        <div class="tp-blog-content">
            <span class="tp-blog-tag">{{blog.tag}}</span>
            <h4 class="tp-blog-title">
                <nuxt-link :href="`/blog-details/${blog.id}`">{{blog.title}}</nuxt-link>
            </h4>
            <div class="tp-blog-meta">
                <span>
                    <span>
                        <svg-author />
                        {{blog.author}}
                    </span>
                </span>
                <span>
                    <span>
                        <svg-clock />
                        {{blog.date}}
                    </span>
                </span>
            </div>
            <div class="tp-blog-btn">
                <nuxt-link :href="`/blog-details/${blog.id}`">
                    <span class="tp-blog-btn-bg blog-btn-bg"></span>
                    <span class="tp-blog-btn-border blog-btn-border"></span>
                    <span class="icon">
                        <svg-arrow-next-one />
                    </span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from '@/types/blog-d-t';

defineProps<{blog:IBlogDT}>();
</script>