<template>
    <div class="tp-shop-widget mb-50">
        <h3 class="tp-shop-widget-title">Reset Filter</h3>
        <button @click="handleReset" class="tp-btn-inner">
            Reset Filter
        </button>
    </div>
</template>

<script setup lang="ts">

const router = useRouter();
function handleReset() {
    // Clear all filters
    router.push('/shop-grid');
}
</script>
