<template>
    <div class="tp-postbox-quote-2 mb-40">
        <div class="tp-postbox-quote-2-box p-relative d-flex align-items-center">
            <div class="tp-postbox-quote-2-icon">
                <span>
                    <svg-link />
                </span>
            </div>
            <h3 class="tp-postbox-quote-2-title">{{ blog.desc }}</h3>
            <div class="tp-postbox-quote-2-shape">
                <img src="/images/blog/blog-standard/blog-standard-shape-2.png" alt="blog-shape" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IBlogDT } from '@/types/blog-d-t';


defineProps<{ blog: IBlogDT }>();
</script>