<template>
    <section class="tp-product-details-area pt-100">
        <div class="tp-product-details-top pb-115">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="tp-product-details-thumb" :style="{ backgroundColor: '#F8F8F8' }">
                            <img :src="product.image" :alt="product.title" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="tp-product-details-wrapper">
                            <div class="tp-product-details-category">
                                <span>{{ product.category }}</span>
                            </div>
                            <h3 class="tp-product-details-title">{{ product.title }}</h3>

                            <div class="tp-product-details-inventory d-flex align-items-center mb-10">
                                <div class="tp-product-details-stock mb-10">
                                    <span>{{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}</span>
                                </div>
                                <div class="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
                                    <div class="tp-product-details-rating">
                                        <span v-for="i in 5" :key="i">
                                            <i class="fa-solid fa-star"></i>
                                        </span>
                                    </div>
                                    <div class="tp-product-details-reviews">
                                        <span>(36 Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <p>{{ product.short_desc }}</p>

                            <!-- price -->
                            <div class="tp-product-details-price-wrapper mb-20">
                                <span class="tp-product-details-price new-price">
                                    {{ formatPrice(product.price, true) }}
                                </span>
                            </div>

                            <!-- actions -->
                            <shop-details-action :item="product" />
                            <!-- actions -->

                            <div class="tp-product-details-query">
                                <div class="tp-product-details-query-item d-flex align-items-center">
                                    <span>Book Type: </span>
                                    <p>{{ product.category }}</p>
                                </div>
                                <div class="tp-product-details-query-item d-flex align-items-center">
                                    <span>Published: </span>
                                    <p>Luminous Publishing</p>
                                </div>
                                <div class="tp-product-details-query-item d-flex align-items-center">
                                    <span>Language:</span>
                                    <p>English</p>
                                </div>
                            </div>
                            <div class="tp-product-details-social">
                                <span>Share: </span>
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i class="fa-brands fa-vimeo-v"></i></a>
                            </div>
                            <div class="tp-product-details-msg mb-15">
                                <ul>
                                    <li>30 days easy returns</li>
                                    <li>Order yours before 2.30pm for same day dispatch</li>
                                </ul>
                            </div>
                            <div
                                class="tp-product-details-payment d-flex align-items-center flex-wrap justify-content-between">
                                <p>Guaranteed safe <br /> & secure checkout</p>
                                <img src="/images/shop/product/payment.png" alt="payment-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- shop details bottom area start -->
        <shop-details-bottom :product="product" />
        <!-- shop details bottom area end -->
    </section>
</template>

<script setup lang="ts">
import { formatPrice } from "@/lib/format-price";
import type { IBookDT } from "@/types/book-d-t";


defineProps < { product: IBookDT } > ();
</script>
