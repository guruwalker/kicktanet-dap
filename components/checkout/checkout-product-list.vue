<template>
    <li class="tp-order-info-list-header">
        <h4>Product</h4>
        <h4>Total</h4>
    </li>
    <li v-for="(product, index) in products" :key="index" class="tp-order-info-list-desc">
        <p>{{ product.title }} <span> x {{ product.orderQuantity }}</span></p>
        <span>${{ (product.price * product.orderQuantity!).toFixed(2) }}</span>
    </li>
</template>

<script setup lang="ts">
import type { IBookDT } from '@/types/book-d-t';

type Props = {
    products: IBookDT[]
};
defineProps<Props>();
</script>