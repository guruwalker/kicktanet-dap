<template>
    <tr>
        <!-- Product Image -->
        <td class="tp-cart-img">
            <nuxt-link :href="`/shop-details/${item.id}`">
                <img :src="item.image" :alt="item.title" />
            </nuxt-link>
        </td>

        <!-- Product Title -->
        <td class="tp-cart-title">
            <nuxt-link :href="`/shop-details/${item.id}`">
                {{ item.title }}
            </nuxt-link>
        </td>

        <!-- Product Price -->
        <td class="tp-cart-price">
            <span>{{ formatPrice(item.price, true) }}</span>
        </td>

        <!-- Product Quantity -->
        <td class="tp-cart-quantity">
            <div class="tp-product-quantity cart mt-10 mb-10">
                <span @click="cartState.quantityDecrement(item)" class="tp-cart-minus">
                    <svg-minus />
                </span>
                <input class="tp-cart-input" type="text" :value="item.orderQuantity" :v-model="item.orderQuantity" />
                <span @click="cartState.addCartProduct(item)" class="tp-cart-plus">
                    <svg-plus />
                </span>
            </div>
        </td>

        <!-- Remove Action -->
        <td class="tp-cart-action">
            <button @click="cartState.removeCartProduct(item)" class="tp-cart-action-btn">
                <svg-close clr="currentColor" />
                <span> Remove</span>
            </button>
        </td>
    </tr>
</template>



<script setup lang="ts">
import { formatPrice } from "@/lib/format-price";
import { useCartStore } from "@/pinia/useCartStore";
import type { IBookDT } from "@/types/book-d-t";

// Props
defineProps<{ item: IBookDT; }>();

const cartState = useCartStore();

</script>
