<template>
    <section class="tp-shop-product-area pb-50">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-shop-product-tab mb-60">
                        <ul class="nav nav-pills mb-3 justify-content-center">
                            <li v-for="(nav, i) in nav_tabs" :key="i" class="nav-item">
                                <button @click="setActiveTab(nav)" :class="['nav-link', { active: activeTab === nav }]">
                                    {{ nav }}
                                    <span>
                                        <img src="/images/shop/shop-shape.svg" alt="shape-svg" />
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="tab-content">
                <div class="row">
                    <div v-for="book in filterBooks" :key="book.id" class="col-lg-3 col-sm-6">
                        <shop-item :item="book" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import bookData from "@/data/book-shop-data";
import type { IBookDT } from "@/types/book-d-t";


const nav_tabs = ['New Arrival', 'Featured Products', 'Best Seller']
const activeTab = ref(nav_tabs[1]);
const filterBooks = ref<IBookDT[]>([...bookData.slice(0, 8)]);

watch(activeTab, (newTab) => {
    if (newTab === "Featured Products") {
        filterBooks.value = [...bookData.slice(0, 8)];
    } else if (newTab === "New Arrival") {
        filterBooks.value = bookData.slice(0, 4);
    } else if (newTab === "Best Seller") {
        filterBooks.value = bookData.slice(4, 8);
    }
});


function setActiveTab(tab: string) {
    activeTab.value = tab;
}

</script>