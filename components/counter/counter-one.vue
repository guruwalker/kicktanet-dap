<template>
    <section class="counter-area tp-counter-wrap mb-90">
        <div class="container">
            <div class="tp-counter-bg wow fadeInUp" data-wow-delay=".3s" style="background-image: url(/images/bg/counter-bg.jpg);">
                <div class="row">
                    <div v-for="item in counterData" :key="item.id" class="col-lg-3 col-md-6">
                        <div class="tp-counter-item text-center">
                            <h3 class="tp-counter-count mb-10">
                                <counter-item :min="0" :max="item.count" /> {{ item.suffix }}
                            </h3>
                            <p>{{ item.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const counterData = [
    { id: 1, count: 10, suffix: "k", duration: 1, title: "Students" },
    { id: 2, count: 300, suffix: "", duration: 1, title: "Professors" },
    { id: 3, count: 48, suffix: "k", duration: 1, title: "Programs" },
    { id: 4, count: 2, suffix: "k", duration: 1, title: "Research" },
];

</script>
