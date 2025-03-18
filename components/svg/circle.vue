<template>
    <svg class="tp-circle-svg" xmlns="http://www.w3.org/2000/svg" width="152" height="152" viewBox="0 0 152 152">
        <path id="tp-cicle-path-934" :fill="clr" d="M18,76a58,58,0,1,1,58,58A58,58,0,0,1,18,76"></path>
        <text class="tp-circle-text">
            <textPath xlink:href="#tp-cicle-path-934">STOP WISHING • START DOING</textPath>
        </text>
    </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ clr?: string }>(), {
    clr: "#F0EC51",
})
</script>
