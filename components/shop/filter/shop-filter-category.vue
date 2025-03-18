<template>
    <div class="tp-shop-widget-content">
        <div class="tp-shop-widget-categories">
            <ul>
                <li v-for="(cate, i) in shopCategories" :key="i">
                    <a href="#" @click.prevent="handleCategory(cate.category)">
                        {{ cate.category }}<span>{{ cate.bookCount }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {shopCategories} from "@/lib/get-shop-fields";

const router = useRouter();
function handleCategory(category: string) {
    router.push(`/shop-grid?category=${category.toLowerCase().split(' ').join('-')}`);
}
</script>