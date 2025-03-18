<template>
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 11L6 6L1 1" :stroke="clr" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ clr?: string }>(), {
    clr: "currentColor",
})
</script>