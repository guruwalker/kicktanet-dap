<template>
    <div class="gallary-area tp-gallary-3-wrap">
        <div class="container">
            <div class="row">
                <div v-for="(item, index) in galleryData" :key="index"
                    :class="`col-lg-${item.colLg} col-md-4 col-sm-6`">
                    <div :class="`tp-gallary-3-item-${index + 1}`">
                        <img :src="item.imageSrc" :alt="`Gallery Image ${index + 1}`" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const galleryData = [
    { colLg: 2, imageSrc: '/images/gallary/gallary-thumb-1.jpg' },
    { colLg: 4, imageSrc: '/images/gallary/gallary-thumb-2.jpg' },
    { colLg: 4, imageSrc: '/images/gallary/gallary-thumb-3.jpg' },
    { colLg: 2, imageSrc: '/images/gallary/gallary-thumb-4.jpg' },
];
</script>