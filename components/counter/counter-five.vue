<template>
    <section class="tp-campus-counter-area grey-bg pb-120">
        <div class="tp-campus-counter-bg" style="background-image: url(/images/campus/campus/counter-bg.jpg);">
            <div class="container">
                <div class="row">
                    <div v-for="counter in counterData" :key="counter.id" class="col-lg-4 col-md-6">
                        <div class="tp-campus-counter-item counter-border text-center">
                            <h3 class="tp-counter-count mb-10">
                                <counter-item :min="0" :max="counter.count" /> {{ counter.isPercentage ? "%" : "" }}
                            </h3>
                            <p>{{ counter.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const counterData = [
    {
        id: 1,
        count: 98,
        description: "Student Nationalities",
    },
    {
        id: 2,
        count: 72,
        description: "International Students",
        isPercentage: true,
    },
    {
        id: 3,
        count: 35,
        description: "Different Majors",
    },
];
</script>