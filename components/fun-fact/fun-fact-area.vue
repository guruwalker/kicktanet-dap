<template>
    <section :class="`${top_cls}`" :style="`background-image: ${bg?`url(/images/bg/funfact-2-bg-1.jpg)`:`none`}`">
        <div :class="`container ${custom_container}`">
            <div class="row">
                <div v-for="item in funFacts" class="col-lg-3 col-sm-6">
                    <div class="tp-funfact-item d-flex align-items-center">
                        <div class="tp-funfact-icon">
                            <span><img :src="item.icon" alt="icon"></span>
                        </div>
                        <div class="tp-funfact-content">
                            <h4 class="tp-funfact-title">{{ item.title }}</h4>
                            <span>{{ item.description }}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

withDefaults(defineProps<{bg?: boolean; top_cls?: string; custom_container?: string}>(),{
    bg:true,
    top_cls: "funfact-area tp-funfact-bg",
    custom_container: ''
});

const funFacts = [
    {
        id: 1,
        title: "Flexible classes",
        description: "You pick schedule.",
        icon: '/images/icon/funfact/funfact-2-icon-1.svg',
    },
    {
        id: 2,
        title: "Offline mode",
        description: "Download classes.",
        icon: '/images/icon/funfact/funfact-2-icon-2.svg',
        cls: "tp-funfact-item-2",
    },
    {
        id: 3,
        title: "10k online courses",
        description: "Explore fresh topics.",
        icon: '/images/icon/funfact/funfact-2-icon-3.svg',
        cls: "tp-funfact-item-3",
    },
    {
        id: 4,
        title: "Educator help",
        description: "Always get answers.",
        icon: '/images/icon/funfact/funfact-2-icon-4.svg',
    },
];
</script>
