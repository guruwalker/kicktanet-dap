<template>
    <section class="service-area tp-service-5-wrap mb-105">
        <div class="container-fluid">
            <div class="row">
                <div v-for="(item) in service_data" :key="item.id" class="col-lg-4 col-md-6">
                    <div class="tp-service-5-item text-center">
                        <div class="tp-service-5-icon">
                            <span><img :src="item.icon" :alt="item.title"></span>
                        </div>
                        <div class="tp-service-5-content">
                            <h4 class="tp-service-5-title"><a href="#">{{ item.title }}</a></h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const service_data = [
    {
        id: 1,
        icon: '/images/icon/service/service-5-icon-1.svg',
        title: "Build Confidence",
        description:
            "Here are some tips and activities that can help boost your mood and promote a positive mindset.",
    },
    {
        id: 2,
        icon: '/images/icon/service/service-5-icon-2.svg',
        title: "Boost Your Mood",
        description:
            "Here are some tips and activities that can help boost your mood and promote a positive mindset.",
    },
    {
        id: 3,
        icon: '/images/icon/service/service-5-icon-3.svg',
        title: "Increase Energy Levels",
        description:
            "Here are some tips and activities that can help boost your mood and promote a positive mindset.",
    },
];
</script>
