<template>
    <section class="tp-shop-feature-area pt-100 pb-95">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-shop-feature-heading text-center">
                        <h3 class="tp-shop-feature-title">Featured Categories</h3>
                        <p>
                            Aliens, tech marvels, and cosmic wonders await in these
                            mind-bending sagas.
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="c in featuredCategories" :key="c.id" class="col-lg-4 col-md-6">
                    <template v-if="c.sm_categories">
                        <div v-for="sc in c.sm_categories" :key="sc.id" class="tp-shop-feature-thumb p-relative mb-25">
                            <img :src="sc.imgSrc" :alt="sc.category" style="height: auto;" />
                            <div class="tp-shop-feature-content">
                                <span>{{ sc.category }}</span>
                                <h4>{{ sc.title }}</h4>
                            </div>
                            <div class="tp-shop-feature-btn">
                                <NuxtLink to="/shop-grid">
                                    Shop Now
                                    <span>
                                        <svg-arrow-right-sm />
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </template>
                    <template v-else>
                        <div class="tp-shop-feature-thumb p-relative mb-25">
                            <img :src="c.imgSrc" :alt="c.category" style="height: auto;" />
                            <div class="tp-shop-feature-content">
                                <span>{{ c.category }}</span>
                                <h4>{{ c.title }}</h4>
                            </div>
                            <div class="tp-shop-feature-btn">
                                <NuxtLink to="/shop-grid">
                                    Shop Now
                                    <span>
                                        <svg-arrow-right-sm />
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">

const router = useRouter();

const featuredCategories = ref([
    {
        id: 1,
        imgSrc: '/images/shop/feature/shop-feature-1.jpg',
        category: "FICTION",
        title: "Huge Sale! Don't miss Out",
    },
    {
        id: 2,
        sm_categories: [
            {
                id: 2,
                imgSrc: '/images/shop/feature/shop-feature-2.jpg',
                category: "NOVEL",
                title: "Summer Sale bozana",
            },
            {
                id: 3,
                imgSrc: '/images/shop/feature/shop-feature-3.jpg',
                category: "NOVEL",
                title: "Summer Sale bozana",
            },
        ],
    },
    {
        id: 4,
        imgSrc: '/images/shop/feature/shop-feature-4.jpg',
        category: "NOVEL",
        title: "Summer Sale bozana",
    },
]);

const navigateToShop = () => {
    router.push("/shop-grid");
};
</script>
