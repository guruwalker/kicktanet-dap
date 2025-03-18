<template>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.66667 1H1V5.66667H5.66667V1Z" :stroke="clr" stroke-linecap="round" stroke-linejoin="round">
        </path>
        <path d="M12.9997 1H8.33301V5.66667H12.9997V1Z" :stroke="clr" stroke-linecap="round"
            stroke-linejoin="round"></path>
        <path d="M12.9997 8.33337H8.33301V13H12.9997V8.33337Z" :stroke="clr" stroke-linecap="round"
            stroke-linejoin="round"></path>
        <path d="M5.66667 8.33337H1V13H5.66667V8.33337Z" :stroke="clr" stroke-linecap="round"
            stroke-linejoin="round"></path>
    </svg>
</template>


<script setup lang="ts">
withDefaults(defineProps<{ clr?: string }>(), {
    clr: "currentColor",
})
</script>