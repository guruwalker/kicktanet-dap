<template>
    <div class="tp-shop-grid-sidebar mr-10">
        <!-- price filter -->
        <div class="tp-shop-widget mb-35">
            <h3 class="tp-shop-widget-title no-border">Price Filter</h3>
            <shop-filter-price />
        </div>
        <!-- status -->
        <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Product Status</h3>
            <shop-filter-status />
        </div>
        <!-- categories -->
        <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Categories</h3>
            <shop-filter-category />
        </div>
        <!-- age -->
        <!-- <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Ages</h3>
            <shop-filter-ages />
        </div> -->
        <!-- author -->
        <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Featured Authors</h3>
            <shop-filter-author />
        </div>
        <!-- Language -->
        <div class="tp-shop-widget mb-50">
            <h3 class="tp-shop-widget-title">Language</h3>
            <shop-filter-language />
        </div>
        <!-- reset filter -->
        <shop-filter-reset/>
    </div>
</template>

<script setup lang="ts">

</script>