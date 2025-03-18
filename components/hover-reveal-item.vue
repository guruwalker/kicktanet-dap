<template>
    <nuxt-link class="tp-img-reveal tp-img-reveal-item" to="/event" :data-img="img" data-fx="1"
        @mousemove="handleMouseMove">
        {{ title }}
        <div class="tp-hover-reveal-bg" :style="{ backgroundImage: `url(${img})` }"></div>
    </nuxt-link>
</template>

<script setup lang="ts">
defineProps<{title: string;img: string;}>();
const { handleMouseMove } = useHoverReveal();
</script>