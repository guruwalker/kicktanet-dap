<template>
    <div :class="['cartmini__area', openSidebar ? 'cartmini-opened' : '']">
        <div class="cartmini__wrapper d-flex justify-content-between flex-column">
            <div class="cartmini__top-wrapper">
                <div class="cartmini__top p-relative">
                    <div class="cartmini__top-title">
                        <h4>Shopping cart</h4>
                    </div>
                    <!-- <div class="cartmini__shipping home-shop">
                        <p>Free Shipping for all orders over <span>$50</span></p>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div> -->
                    <div class="cartmini__close">
                        <button @click="emitShowSidebar" type="button" class="cartmini__close-btn cartmini-close-btn">
                            <i class="fal fa-times"></i>
                        </button>
                    </div>
                </div>
                <!-- Cart items -->
                <div v-if="cartState.cart_products.length > 0" class="cartmini__widget">
                    <div v-for="(item, i) in cartState.cart_products" :key="i" class="cartmini__widget-item">
                        <div class="cartmini__thumb">
                            <a href="#">
                                <img :src="item.image" width="70" height="60" alt="product img" />
                            </a>
                        </div>
                        <div class="cartmini__content">
                            <h5 class="cartmini__title home-shop">
                                <a href="#">{{ removeTagInText(item.title) }}</a>
                            </h5>
                            <div class="cartmini__price-wrapper">
                                <span class="cartmini__price home-shop">${{ item.price.toFixed(2) }}</span>
                                <span class="cartmini__quantity"> x{{ item.orderQuantity }}</span>
                            </div>
                        </div>
                        <a class="cartmini__del pointer" @click="cartState.removeCartProduct(item)">
                            <i class="fa-regular fa-xmark"></i>
                        </a>
                    </div>
                </div>
                <!-- Empty cart -->
                <div v-else class="cartmini__empty text-center">
                    <img src="/images/cartmini/empty-cart.png" alt="empty-cart-img" />
                    <p>Your Cart is empty</p>
                    <NuxtLink to="/shop-grid" @click="emitShowSidebar" class="tp-btn">Go to Shop</NuxtLink>
                </div>
            </div>

            <!-- Checkout section -->
            <div class="cartmini__checkout">
                <div class="cartmini__checkout-title mb-30">
                    <h4>Subtotal:</h4>
                    <span>{{ formatPrice(cartState.cart_products.reduce((a, b) => a + b.price, 0), true) }}</span>
                </div>
                <div class="cartmini__checkout-btn home-shop">
                    <NuxtLink to="/cart" @click="emitShowSidebar" class="tp-btn mb-10 w-100">
                        View Cart
                    </NuxtLink>
                    <NuxtLink to="/checkout" @click="emitShowSidebar" class="tp-btn tp-btn-border w-100">
                        Checkout
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>

    <!-- Overlay -->
    <div @click="emitShowSidebar" :class="['body-overlay', openSidebar ? 'opened' : '']"></div>
</template>

<script setup lang="ts">
import { formatPrice } from "@/lib/format-price";
import { removeTagInText } from "@/utils/index";
import { useCartStore } from "@/pinia/useCartStore";
// Props
defineProps<{ openSidebar?: boolean }>();

const cartState = useCartStore();

// Emit
const emit = defineEmits(['showSidebar'])

// Emit function
const emitShowSidebar = () => {
    emit('showSidebar')
}
</script>