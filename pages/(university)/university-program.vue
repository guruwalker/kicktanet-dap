<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Academic Programs" subtitle="Academic Programs" />
            <!-- breadcrumb area end -->

            <!-- about area start -->
            <about-two spacing="pt-90 pb-90" />
            <!-- about area end -->

            <!-- undergraduate area start -->
            <section class="tp-undergraduate-area grey-bg pb-85">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-undergraduate-program-box pb-85">
                                <div class="tp-undergraduate-program-heading"
                                    :style="{ backgroundImage: 'url(/images/history/undergraduate/heading-bg.png)' }">
                                    <h4 class="tp-undergraduate-program-title">
                                        <span>
                                            <svg-major-programs />
                                        </span>
                                        Major Programs
                                    </h4>
                                </div>
                                <div class="tp-undergraduate-program-content">
                                    <div class="row">
                                        <div v-for="programGroup in undergraduatePrograms" :key="programGroup.id"
                                            class="col-lg-4 col-md-6">
                                            <div class="tp-undergraduate-program-list">
                                                <ul>
                                                    <li v-for="program in programGroup.programs" :key="program">
                                                        <NuxtLink to="/university-about">
                                                            {{ program }}
                                                            <span>
                                                                <svg-arrow-next-two />
                                                            </span>
                                                        </NuxtLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-undergraduate-program-box">
                                <div class="tp-undergraduate-program-heading"
                                    :style="{ backgroundImage: 'url(/images/history/undergraduate/heading-bg.png)' }">
                                    <h4 class="tp-undergraduate-program-title">
                                        <span>
                                            <svg-minors-programs />
                                        </span>
                                        Minors Programs
                                    </h4>
                                </div>
                                <div class="tp-undergraduate-program-content">
                                    <div class="row">
                                        <div v-for="programGroup in undergraduatePrograms" :key="programGroup.id"
                                            class="col-lg-4 col-md-6">
                                            <div class="tp-undergraduate-program-list">
                                                <ul>
                                                    <li v-for="program in programGroup.programs" :key="program">
                                                        <NuxtLink to="/university-about">
                                                            {{ program }}
                                                            <span>
                                                                <svg-arrow-next-two />
                                                            </span>
                                                        </NuxtLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- undergraduate area end -->

            <!-- plan area start -->
            <plan-area />
            <!-- plan area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Program  | KICTANet" });

const undergraduatePrograms = [
    {
        id: 1,
        programs: [
            "Accounting",
            "Advertising",
            "Environmental Studies",
            "Art History",
            "Design",
            "Chemistry",
            "International Business",
            "Economics",
        ],
    },
    {
        id: 2,
        programs: [
            "Engineering",
            "English",
            "Computer Science",
            "Finance",
            "Architecture",
            "Fine Arts",
            "Biology",
            "Management",
        ],
    },
    {
        id: 3,
        programs: [
            "Marketing",
            "Environmental Science",
            "Politics",
            "Psychology",
            "Minors",
            "Comparative Literature",
            "Philosophy",
        ],
    },
];
</script>
