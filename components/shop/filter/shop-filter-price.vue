<template>
    <div class="tp-shop-widget-content">
        <div class="tp-shop-widget-filter price__slider">
            <div id="slider-range" class="mb-10">
                <Slider :value="productState.priceValues" :tooltips="false" @change="productState.handlePriceChange" :max="productState.maxProductPrice" />
            </div>
            <div class="tp-shop-widget-filter-info d-flex align-items-center justify-content-between">
                <span class="input-range">
                    ${{ productState.priceValues[0] ? productState.priceValues[0] : 0 }} - ${{ productState.priceValues[1] ? productState.priceValues[1] : productState.maxProductPrice }}
                </span>
                <button @click="handlePriceFilter" class="tp-shop-widget-filter-btn" type="button">
                    Filter
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useProductFilterStore } from "@/pinia/useProductFilterStore";
import Slider from "@vueform/slider";
import "@vueform/slider/themes/default.css";


const productState = useProductFilterStore();
const router = useRouter();

const handlePriceFilter = () => {
  const price_query = `minPrice=${productState.priceValues[0]}&maxPrice=${productState.priceValues[1]}`
  router.push(`/shop-grid?${price_query}`);
};

</script>