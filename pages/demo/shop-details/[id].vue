<template>
    <div>
        <nuxt-layout name="layout-ten">

            <!-- shop details area start -->
            <shop-details-area v-if="bookItem" :product="bookItem" />
            <!-- shop details area end -->

            <!-- related books area start -->
            <shop-details-related-books v-if="bookItem" />
            <!-- related books area end -->

            <div v-if="!bookItem" class="text-center mt-100 mb-80">
                No book found with id: {{ id }}
            </div>

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
import bookData from '@/data/book-shop-data';


definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Shop Details - Acadia" });

const route = useRoute();
const id = route.params.id
const bookItem = bookData.find((bookItem) => bookItem.id.toString() === id);
</script>
