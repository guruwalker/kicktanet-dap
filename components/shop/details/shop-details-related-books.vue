<template>
    <section class="tp-product-related-area pt-80 pb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-product-related-heading text-center mb-30">
                        <h4 class="tp-product-related-title">Related Products</h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="book in bookData.slice(0, 4)" :key="book.id" class="col-lg-3 col-sm-6">
                    <shop-item :item="book" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import bookData from '@/data/book-shop-data';
</script>
