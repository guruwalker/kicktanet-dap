<script setup>
import TestimonialsData from "~~/components/Data/Testimonials";

useSeoMeta({
  title: "KICKTANET / UK - Foreign, Commonwealth Development Office (FCDO)",
  ogTitle: "KICKTANET / UK - Foreign, Commonwealth Development Office (FCDO)",
});

useHead({
  bodyAttrs: {
    class: "navbar-light",
  },
});

const testimonials = ref(TestimonialsData);
</script>

<template>
  <div class="container">
    <!-- Carousel -->
    <SectionsHomeCarousel />

    <!-- Project Description -->


    <!-- Stats -->
    <SectionsHomeSection13 />

    <!-- Project Objectives -->
    <SectionsHomeSection5 />

    <!-- Random Photos -->
    <SectionsHomePress />

    <!-- Benefits for people -->
    <SectionsHomeSection10 />

    <!-- How trainings are done -->
    <!-- <SectionsHomeSection15 /> -->

    <!-- FAQs -->
    <SectionsHomeSection18 />

    <!-- Testimonials -->
    <!-- TODO: Remember to add testimonials -->
  </div>
</template>
