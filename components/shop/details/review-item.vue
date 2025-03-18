<template>
    <div class="tp-product-details-review-avater d-flex align-items-start">
        <div class="tp-product-details-review-avater-thumb">
            <a href="#">
                <img :src="review.avatar" :alt="review.name"/>
            </a>
        </div>
        <div class="tp-product-details-review-avater-content">
            <div class="tp-product-details-review-avater-rating d-flex align-items-center">
                <span v-for="i in review.rating" :key="i">
                    <i class="fa-solid fa-star"></i>
                </span>
            </div>
            <h3 class="tp-product-details-review-avater-title">{{ review.name }}</h3>
            <span class="tp-product-details-review-avater-meta">{{ review.date }}</span>
            <div class="tp-product-details-review-avater-comment">
                <p>{{ review.comment }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Review {
    id: number;
    name: string;
    date: string;
    comment: string;
    rating: number;
    avatar: string;
}

const props = defineProps<{
    review: Review;
}>();
</script>