<template>
    <div>
        <template v-if="discount">
            <del>{{ formatPrice(price, true) }}</del>
            <span> {{ formatPrice(discountPrice(price, discount), true) }}</span>
        </template>
        <template v-else>
            <span>{{ formatPrice(price, true) }}</span>
        </template>
    </div>
</template>

<script setup lang="ts">
import { formatPrice } from "@/lib/format-price";
import { discountPrice } from "@/utils/index";

interface Props {
    discount: number | undefined;
    price: number;
}

defineProps<Props>();
</script>