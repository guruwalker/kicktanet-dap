<template>
    <div class="tp-shop-product-item text-center mb-50">
        <div class="tp-shop-product-thumb p-relative">
            <nuxt-link :href="`/shop-details/${item.id}`">
                <img :src="item.image" :alt="item.title"/>
            </nuxt-link>
            <div class="tp-shop-product-thumb-tag">
                <span :class="getTagClass(item.tag)">{{ item.tag }}</span>
            </div>
            <div class="tp-shop-product-thumb-btn">
                <button v-if="!isAlreadyInCart(item.id)" @click="addToCart(item)">Add to cart</button>
                <button disabled v-else>Already in cart</button>
            </div>
        </div>
        <div class="tp-shop-product-content">
            <div class="tp-shop-product-tag">
                <span>{{ item.category }}</span>
            </div>
            <h4 class="tp-shop-product-title">
                <nuxt-link :href="`/shop-details/${item.id}`">
                    {{ item.title }}
                </nuxt-link>
            </h4>
            <div class="tp-shop-product-price">
                <span>{{ formatPrice(item.price, true) }}</span>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { formatPrice } from "@/lib/format-price";
import { getTagClass } from "@/utils/index";
import type { IBookDT } from "@/types/book-d-t";
import { useCartStore } from "@/pinia/useCartStore";

defineProps<{
    item: IBookDT;
}>();

const cartStore = useCartStore();

function addToCart(item: IBookDT) {
    cartStore.addCartProduct(item);
}

function isAlreadyInCart(id: number): boolean {                                     
    return cartStore.cart_products.some((cartItem) => cartItem.id === id);
}
</script>