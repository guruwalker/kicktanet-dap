<template>
    <section class="counter-area grey-bg pb-90">
        <div class="container">
            <div class="tp-counter-bg wow fadeInUp" data-wow-delay=".3s"
                style="background-image: url(/images/bg/counter-bg-2.jpg);">
                <div class="row">
                    <div v-for="(item, i) in counterData" :key="i" class="col-lg-3 col-md-6">
                        <div class="tp-counter-item text-center">
                            <h3 class="tp-counter-count mb-10">
                                <counter-item :min="0" :max="item.end" /> {{ item.suffix }}
                            </h3>
                            <p>{{ item.label }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const counterData = [
    { end: 10, label: "Students", suffix: "k" },
    { end: 300, label: "Professors" },
    { end: 48, label: "Programs" },
    { end: 2, label: "Research", suffix: "k" },
];
</script>
