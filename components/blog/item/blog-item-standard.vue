<template>
    <div class="tp-postbox-item p-relative mb-40">
        <div class="tp-postbox-thumb">
            <NuxtLink :to="`/blog-details/${blog.id}`">
                <img :src="blog.img" :alt="blog.title" />
            </NuxtLink>
        </div>
        <div class="tp-postbox-content">
            <div class="tp-blog-stories-tag-wrap d-flex">
                <a href="#">Education</a>
                <span>{{ blog.date }}</span>
            </div>
            <h3 class="tp-postbox-title">
                <NuxtLink :to="`/blog-details/${blog.id}`">{{ blog.title }}</NuxtLink>
            </h3>
            <p>{{ blog.desc }} […]</p>
            <div class="tp-postbox-btn-box d-flex align-items-center justify-content-between">
                <div class="tp-postbox-btn">
                    <NuxtLink :to="`/blog-details/${blog.id}`">
                        Read More
                        <span>
                            <svg-arrow-next-two />
                        </span>
                    </NuxtLink>
                </div>
                <div class="tp-postbox-share">
                    <button class="p-relative">
                        Share this post
                        <span>
                            <svg-share />
                        </span>
                    </button>

                    <ul class="tp-postbox-share-hover">
                        <li><a href="#"><i class="fab fa-facebook-f"></i> <b>Facebook</b></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> <b>Twitter</b></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i> <b>Youtube</b></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i> <b>Linkedin</b></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from '@/types/blog-d-t';
defineProps<{ blog: IBlogDT; }>();
</script>