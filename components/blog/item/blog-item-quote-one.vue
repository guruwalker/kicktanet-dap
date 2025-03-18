<template>
    <div class="tp-postbox-quote mb-40">
        <div class="tp-postbox-quote-box p-relative d-flex">
            <div class="tp-postbox-quote-icon">
                <span>
                    <svg-quote />
                </span>
            </div>
            <div class="tp-postbox-quote-content">
                <h3 class="tp-postbox-quote-title">{{ blog.desc }}</h3>
                <div class="tp-postbox-quote-sub">
                    <span>{{ blog.author }}</span>
                    <span v-if="blog.author_location" class="p">{{ blog.author_location }}</span>
                </div>
            </div>
            <div class="tp-postbox-quote-shape">
                <img src="/images/blog/blog-standard/blog-standard-shape.png" alt="blog-shape" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from '@/types/blog-d-t';


defineProps<{ blog: IBlogDT }>();
</script>