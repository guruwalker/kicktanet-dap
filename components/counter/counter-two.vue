<template>
        <section class="counter-area pb-120 grey-bg">
            <div class="container">
                <div class="tp-counter-4-bg wow fadeInUp" data-wow-delay=".3s">
                    <div class="row">
                        <div v-for="counter in counterData" :key="counter.id" class="col-lg-3 col-sm-6">
                            <div class="tp-counter-4-item text-center">
                                <div class="tp-counter-4-icon">
                                    <span>
                                        <img :src="counter.icon" alt="icon" />
                                    </span>
                                </div>
                                <div class="tp-counter-4-content">
                                    <h3 class="tp-counter-4-count mb-10">
                                        <counter-item :min="0" :max="counter.countEnd" />
                                        {{ counter.suffix }}
                                    </h3>
                                    <div class="tp-counter-4-border"></div>
                                    <p>{{ counter.title }}</p>
                                </div>
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
        icon: '/images/icon/counter/counter-4-icon-1.svg',
        countEnd: 10,
        suffix: "k",
        title: "Students enrolled",
    },
    {
        id: 2,
        icon: '/images/icon/counter/counter-4-icon-2.svg',
        countEnd: 7,
        suffix: ":2",
        title: "Student to faculty ratio",
    },
    {
        id: 3,
        icon: '/images/icon/counter/counter-4-icon-3.svg',
        countEnd: 34,
        suffix: "",
        title: "Athletic teams",
    },
    {
        id: 4,
        icon: '/images/icon/counter/counter-4-icon-4.svg',
        countEnd: 41,
        suffix: "%",
        title: "Rate of growth since 2020",
    },
];
</script>