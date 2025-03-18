<template>
    <section class="tp-our-mission-area grey-bg pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="tp-our-mission-thumb">
                        <img src="/images/our-mission/thumb-1.png" alt="mission-thumb"/>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="tp-financial-mission-wrapper">
                        <h3 class="tp-financial-mission-title">
                            The Financial Aid Process
                        </h3>
                        <div v-for="item in processData" :key="item.id" class="tp-financial-process-box">
                            <h4 class="tp-financial-process-title">
                                <span>{{ item.id }}</span>
                                {{ item.title }}
                            </h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

// Process data array
const processData = ref([
    {
        id: 1,
        title: "Complete Application Form",
        description:
            "Creativity and innovation to challenge the status quo will affect what and how we teach and the intellectual ambitions of the university itself.",
    },
    {
        id: 2,
        title: "Review",
        description:
            "Social engagement should orient students’ academic experiences to help them become critically engaged citizens, dedicated to solving problems.",
    },
    {
        id: 3,
        title: "Make Your Deposit",
        description:
            "Estudiar’s commitment to student success, important scholarship and creative activity, and public service sets it apart from other colleges.",
    },
]);
</script>