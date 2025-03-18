<template>
    <div class="tp-product-details-review-rating-item d-flex align-items-center">
        <span>{{ stars }} Stars</span>
        <div class="tp-product-details-review-rating-bar">
            <span class="tp-product-details-review-rating-bar-inner" :style="{ width: `${percentage}%` }"></span>
        </div>
        <div class="tp-product-details-review-rating-percent">
            <span>{{ percentage }}%</span>
        </div>
    </div>
</template>

<script setup lang="ts">
interface RatingBarProps {
    stars: number;
    percentage: number;
}

defineProps<RatingBarProps>();
</script>