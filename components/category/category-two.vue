<template>
    <section class="category-area pb-60">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10">
                    <div class="tp-section text-center mb-65">
                        <h5 class="tp-section-5-subtitle mb-10">Unique Categories</h5>
                        <h3 class="tp-section-5-title">Browse by Categories</h3>
                    </div>
                </div>
            </div>
            <div class="row wow fadeInUp" data-wow-delay=".3s">
                <div v-for="(item) in category_data" :key="item.id" class="col-xl-3 col-lg-4 col-md-6">
                    <div class="tp-category-5-item mb-60">
                        <div class="tp-category-5-hover"></div>
                        <div class="tp-category-5-thumb">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="tp-category-5-content">
                            <h4 class="tp-category-5-title">
                                <NuxtLink to="/course-with-filter">{{ item.title }}
                                    <span>
                                        <svg-arrow-right-one clr="currentColor" />
                                    </span>
                                </NuxtLink>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const category_data = [
    {
        id: 1,
        image: "/images/category/category-5-thumb-1.jpg",
        title: "Strength Training",
    },
    {
        id: 2,
        image: "/images/category/category-5-thumb-2.jpg",
        title: "Functional Fitness",
    },
    {
        id: 3,
        image: "/images/category/category-5-thumb-3.jpg",
        title: "Powerful and Strong",
    },
    {
        id: 4,
        image: "/images/category/category-5-thumb-4.jpg",
        title: "Youth & Teen Fitness",
    },
    {
        id: 5,
        image: "/images/category/category-5-thumb-5.jpg",
        title: "Online Coaching",
    },
    {
        id: 6,
        image: "/images/category/category-5-thumb-6.jpg",
        title: "Core & Flexibility",
    },
    {
        id: 7,
        image: "/images/category/category-5-thumb-7.jpg",
        title: "Mind-Body Balance",
    },
    {
        id: 8,
        image: "/images/category/category-5-thumb-8.jpg",
        title: "Mind-Body Balance",
    },
];
</script>
