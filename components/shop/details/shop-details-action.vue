<template>
    <div class="tp-product-details-action-wrapper">
        <h3 class="tp-product-details-action-title">Quantity</h3>
        <div class="tp-product-details-action-item-wrapper d-flex align-items-center">
            <div class="tp-product-details-quantity">
                <div class="tp-product-quantity mb-15 mr-15">
                    <span @click="cartStore.decrement" class="tp-cart-minus">
                        <svg-minus />
                    </span>
                    <input class="tp-cart-input" type="text" :value="cartStore.orderQuantity" disabled readonly />
                    <span @click="cartStore.increment" class="tp-cart-plus">
                        <svg-plus />
                    </span>
                </div>
            </div>
            <div class="tp-product-details-add-to-cart mb-15 w-100">
                <button @click="cartStore.addCartProduct(item)" class="tp-product-details-add-to-cart-btn w-100">
                    Add To Cart
                </button>
            </div>
        </div>
        <button class="tp-product-details-buy-now-btn w-100">Buy Now</button>
    </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
import type { IBookDT } from '@/types/book-d-t';

defineProps<{item:IBookDT}>();
const cartStore = useCartStore();
</script>