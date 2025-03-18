<template>
    <div class="tp-cart-area pt-120 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="tp-cart-list mb-45 mr-30">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th colspan="2" class="tp-cart-header-product">Product</th>
                                    <th class="tp-cart-header-price">Price</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                <WishlistItem v-for="item in cartItems" :key="item.id" :item="item" />

                            </tbody>
                        </table>
                    </div>
                    <div class="tp-cart-bottom">
                        <div class="row align-items-end">
                            <div class="col-xl-6 col-md-4">
                                <div class="tp-cart-update">
                                    <nuxt-link href="/cart" class="tp-cart-update-btn">Go To Cart</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import bookData from "@/data/book-shop-data";

const cartItems = bookData.map((item) => ({
    id: item.id,
    title: item.title,
    price: item.price,
    img: item.image,
    stock: item.stock
})).slice(0, 2)
</script>