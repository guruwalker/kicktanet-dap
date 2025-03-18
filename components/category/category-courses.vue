<template>
    <section class="tp-course-categories-area pt-100 pb-75">
        <div class="container">
            <div class="row">
                <div v-for="category in categories" :key="category.id" class="col-lg-3 col-sm-6">
                    <NuxtLink to="/course-with-filter"
                        class="tp-course-categories-item p-relative mb-25 wow fadeInUp"
                        :data-wow-delay="category.delay">
                        <div class="tp-course-categories-icon">
                            <span :class="category.colorClass">
                                <svg-category />
                            </span>
                        </div>
                        <h3 class="tp-course-categories-title">{{ category.title }}</h3>
                        <p>{{ category.courseCount }} Courses</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const categories = [
    { id: 1, title: "Development", courseCount: 15, colorClass: "", delay: ".3s" },
    { id: 2, title: "UI/UX Design", courseCount: 10, colorClass: "color-1", delay: ".5s" },
    { id: 3, title: "Business", courseCount: 9, colorClass: "color-2", delay: ".7s" },
    { id: 4, title: "Lifestyle", courseCount: 12, colorClass: "color-3", delay: ".9s" },
    { id: 5, title: "Photography", courseCount: 17, colorClass: "color-4", delay: ".3s" },
    { id: 6, title: "Music", courseCount: 20, colorClass: "color-5", delay: ".5s" },
    { id: 7, title: "Business", courseCount: 25, colorClass: "color-6", delay: ".7s" },
    { id: 8, title: "Lifestyle", courseCount: 30, colorClass: "color-7", delay: ".9s" },
    { id: 9, title: "Accounting", courseCount: 22, colorClass: "color-8", delay: ".3s" },
    { id: 10, title: "Marketing", courseCount: 18, colorClass: "color-9", delay: ".5s" },
    { id: 11, title: "Architecture", courseCount: 29, colorClass: "color-10", delay: ".7s" },
    { id: 12, title: "Art & Design", courseCount: 26, colorClass: "color-11", delay: ".9s" }
];
</script>
