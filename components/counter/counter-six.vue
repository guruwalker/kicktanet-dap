<template>
    <section class="tp-instructor-counter-area p-relative tp-instructor-bg fix"
        style="background-image: url(/images/instructor/instructor-bg.jpg)">
        <div class="container">
            <div class="row">
                <div v-for="(item, index) in counterData" :key="index" class="col-lg-3 col-sm-6">
                    <div class="tp-instructor-counter-item text-center">
                        <h3 class="tp-counter-count mb-10">
                            <counter-item :min="0" :max="item.endValue" />
                            {{ item.suffix }}
                        </h3>
                        <p>{{ item.label }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const counterData = [
    {
        endValue: 10,
        label: "Students Enrolled",
        suffix: "k",
    },
    {
        endValue: 3,
        label: "Enrollment Forms",
        suffix: "k",
    },
    {
        endValue: 240,
        label: "Online Instructors",
        suffix: "",
    },
    {
        endValue: 110,
        label: "Countries",
        suffix: "",
    },
];
</script>