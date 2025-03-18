<template>
    <section class="tp-shop-author-area pb-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-shop-author-wrap d-flex flex-wrap justify-content-between align-items-center mb-50">
                        <div class="tp-shop-author-heading">
                            <h4 class="tp-shop-author-title">Top Author</h4>
                            <p>Unravel secrets with author’s brilliant plot twists.</p>
                        </div>
                        <div class="tp-shop-author-btn">
                            <NuxtLink to="/instructor">All Authors <span><svg-arrow-right-sm /></span></NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(item) in authors" class="col-lg-3 col-sm-6">
                    <div class="tp-shop-author-item text-center mb-30">
                        <div class="tp-shop-author-thumb">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="tp-shop-author-content">
                            <span>{{ item.booksCount }} Books</span>
                            <h4 class="tp-shop-author-item-title"><NuxtLink to="/my-account">{{ item.name }}</NuxtLink></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const authors = [
    {
        id: 1,
        name: "Leslie Alexander",
        image: "/images/shop/author/shop-author-1.png",
        booksCount: "1,65",
    },
    {
        id: 2,
        name: "Robert Fox",
        image: "/images/shop/author/shop-author-2.png",
        booksCount: "1,78",
    },
    {
        id: 3,
        name: "Darrell Steward",
        image: "/images/shop/author/shop-author-3.png",
        booksCount: "1,98",
    },
    {
        id: 4,
        name: "Dianne Russell",
        image: "/images/shop/author/shop-author-4.png",
        booksCount: "2,50",
    },
];
</script>
