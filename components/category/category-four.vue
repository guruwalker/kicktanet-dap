<template>
    <section class="tp-category-6-ptb pb-120 pt-120">
        <div class="container custom-container-1300">
            <div class="row justify-content-center">
                <div class="col-xl-8 col-lg-10">
                    <div class="tp-category-6-heading mb-50 text-center wow fadeInUp" data-wow-delay=".4s">
                        <h5 class="tp-section-3-subtitle color-9">Top Categories</h5>
                        <h3 class="tp-section-3-title color-9">Most demanding
                            <span>Categories
                                <img class="tp-underline-shape-5 wow bounceIn" data-wow-duration="1.5s"
                                    data-wow-delay=".4s" src="/images/shape/bottom-line/line-2-category-2.svg" alt="underline">
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row tp-gx-20">
                <div
                    v-for="(category) in categoryData"
                    :key="category.id"
                    class="col-xl-3 col-lg-6 col-md-6"
                >
                    <div class="tp-category-6-item mb-30 wow fadeInUp" :data-wow-delay="category.delay">
                        <div class="tp-category-6-item-thumb">
                            <nuxt-link href="/course-categories">
                                <img :src="category.image" :alt="category.title">
                            </nuxt-link>
                        </div>
                        <div class="tp-category-6-item-content text-center">
                            <h4 class="tp-category-6-item-title">
                                <nuxt-link href="/course-categories">{{ category.title }}</nuxt-link>
                            </h4>
                            <span>{{ category.courses }} Courses</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-category-6-btn text-center pt-40">
                        <div class="tp-hero-6-btn">
                            <nuxt-link class="tp-btn-inner" href="/course-with-filter">View all Categories
                                <span>
                                    <svg-arrow-right-four/>
                                </span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const categoryData = [
    {
        id: 1,
        title: "Mobile Application",
        courses: 20,
        image: "/images/category/home-6/category-6-1.jpg",
        delay: ".3s"
    },
    {
        id: 2,
        title: "Photography",
        courses: 10,
        image: "/images/category/home-6/category-6-2.jpg",
        delay: ".5s"
    },
    {
        id: 3,
        title: "UI/UX Design",
        courses: 8,
        image: "/images/category/home-6/category-6-3.jpg",
        delay: ".7s"
    },
    {
        id: 4,
        title: "Development",
        courses: 12,
        image: "/images/category/home-6/category-6-4.jpg",
        delay: ".9s"
    }
];
</script>
