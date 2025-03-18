<template>
    <section class="tp-mission-feature-area grey-bg pb-120">
        <div class="tp-mission-feature-bg" style="background-image: url('/images/campus/campus/counter-bg.jpg')">
            <div class="container">
                <div class="row">
                    <div v-for="(fact, index) in funFacts" :key="fact.id" class="col-lg-3 col-sm-6">
                        <div :class="[
                            'tp-funfact-item d-flex align-items-center',
                            index === 1 ? 'tp-funfact-item-2' : '',
                            index === 2 ? 'tp-funfact-item-3' : '',
                            index === 3 ? 'justify-content-lg-end' : '',
                        ]">
                            <div class="tp-funfact-icon">
                                <span>
                                    <img :src="fact.icon" alt="icon" />
                                </span>
                            </div>
                            <div class="tp-funfact-content">
                                <h4 class="tp-funfact-title">{{ fact.title }}</h4>
                                <span>{{ fact.description }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script setup lang="ts">

// Fun fact data array
const funFacts = [
    {
        id: 1,
        icon: '/images/icon/funfact/funfact-2-icon-1.svg',
        title: "Flexible classes",
        description: "You pick schedule.",
    },
    {
        id: 2,
        icon: '/images/icon/funfact/funfact-2-icon-2.svg',
        title: "Offline mode",
        description: "Download classes.",
    },
    {
        id: 3,
        icon: '/images/icon/funfact/funfact-2-icon-3.svg',
        title: "10k online courses",
        description: "Explore fresh topics.",
    },
    {
        id: 4,
        icon: '/images/icon/funfact/funfact-2-icon-4.svg',
        title: "Educator help",
        description: "Always get answers.",
    },
];
</script>