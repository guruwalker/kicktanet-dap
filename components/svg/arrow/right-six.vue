
<template>
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0034 1L15.0034 6L10.0034 11" :stroke="clr" stroke-width="1.5" stroke-miterlimit="10"
            stroke-linecap="round" stroke-linejoin="round" />
        <path d="M1 6H14.8633" :stroke="clr" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ clr?: string }>(), {
    clr: "#AB0C2F",
})
</script>