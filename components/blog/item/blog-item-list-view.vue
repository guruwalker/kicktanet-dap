<template>
    <div class="tp-postbox-item p-relative mb-40">
        <div class="tp-postbox-item-list-box d-flex align-items-center">
            <div class="tp-postbox-item-list-thumb">
                <NuxtLink :to="`/blog-details/${blog.id}`">
                    <img :src="blog.img" :alt="blog.title" />
                </NuxtLink>
            </div>

            <div class="tp-postbox-content">
                <div class="tp-blog-stories-tag-wrap d-flex">
                    <a href="#">{{ blog.tag }}</a>
                    <span>{{ blog.date }}</span>
                </div>
                <h3 class="tp-postbox-item-list-title">
                    <NuxtLink :to="`/blog-details/${blog.id}`">{{ blog.title }}</NuxtLink>
                </h3>
                <p>{{ blog.desc }} […]</p>
                <div class="tp-postbox-btn">
                    <NuxtLink :to="`/blog-details/${blog.id}`">
                        Read More
                        <span>
                            <svg-arrow-next-four />
                        </span>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from '@/types/blog-d-t';

defineProps<{ blog: IBlogDT }>();
</script>