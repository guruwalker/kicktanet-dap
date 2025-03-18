<template>
    <section id="down" class="tp-admission-counter-area grey-bg pb-120">
        <div class="container">
            <div class="tp-admission-counter-box wow fadeInUp" data-wow-delay=".3s">
                <div class="row">
                    <div v-for="(counter, index) in counterData" :key="counter.id" :class="['col-lg-4 col-md-6',counter.id > 1 ? `pl-${counter.id === 2 ? 50 : 80}` : '']">
                        <div class="tp-admission-counter-item">
                            <h3 class="tp-admission-counter-title">
                                <counter-item :min="0" :max="counter.endValue" />
                                <span v-if="counter.isPercentage">%</span>
                            </h3>
                            <p :class="{ after: index !== counterData.length - 1 }" v-html="counter.title"></p>
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
        endValue: 126,
        title: "Degree & diploma programs <br/> offered",
    },
    {
        id: 2,
        endValue: 82,
        title: "Of undergraduate students <br/> receive financial aid",
        isPercentage: true,
    },
    {
        id: 3,
        endValue: 74,
        title: "Of graduates had two or <br/> more internships as students",
        isPercentage: true,
    },
];
</script>