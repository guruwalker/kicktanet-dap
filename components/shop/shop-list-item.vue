<template>
  <div class="tp-shop-list-product-item d-flex mb-10">
    <!-- Product Thumbnail -->
    <div class="tp-shop-list-product-thumb p-relative">
      <NuxtLink :to="`/shop-details/${item.id}`">
        <img
          :src="item.image"
          :alt="item.title"
        />
      </NuxtLink>
    </div>

    <!-- Product Content -->
    <div class="tp-shop-list-product-content p-relative">
      <!-- Tag -->
      <div class="tp-shop-product-thumb-tag">
        <span :class="getTagClass(item.tag)">{{ item.tag }}</span>
      </div>

      <!-- Category -->
      <div class="tp-shop-product-tag">
        <span>{{ item.category }}</span>
      </div>

      <!-- Title -->
      <h4 class="tp-shop-product-title">
        <NuxtLink :to="`/shop-details/${item.id}`">
          {{ item.title }}
        </NuxtLink>
      </h4>

      <!-- Short Description -->
      <p>{{ item.short_desc }}</p>

      <!-- Price -->
      <div class="tp-shop-product-price">
        <span>{{ formatPrice(item.price, true) }}</span>
      </div>

      <!-- Add to Cart Button -->
      <div class="tp-shop-list-product-btn">
        <button v-if="!isAlreadyInCart(item.id)" @click="addToCart(item)">Add to cart</button>
        <button disabled v-else>Already in cart</button>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { type IBookDT } from '@/types/book-d-t';
import { getTagClass } from "@/utils/index";
import { formatPrice } from '@/lib/format-price';
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

