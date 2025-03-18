<template>
    <svg width="14" height="14" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 7.11108H1" :stroke="clr" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        </path>
        <path d="M15 1H1" :stroke="clr" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M15 13.2222H1" :stroke="clr" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        </path>
    </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ clr?: string }>(), {
    clr: "currentColor",
})
</script>