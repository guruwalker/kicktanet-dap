<template>
  <div class="tp-shop-product-item text-center mb-50">
    <div class="tp-shop-product-thumb p-relative">
      <NuxtLink :to="`/shop-details/${item.id}`">
        <img :src="item.image" :alt="item.title" />
      </NuxtLink>
      <div class="tp-shop-product-thumb-btn">
        <button @click="addToCart(item)">Download</button>
      </div>
    </div>
    <div class="tp-shop-product-content">
      <h4 class="tp-shop-product-title">
        <NuxtLink :to="`/shop-details/${item.id}`">
          {{ item.title }}
        </NuxtLink>
      </h4>
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
