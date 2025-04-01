<script setup lang="ts">
const items = ref([
  {
    title: "Unlocking Digital Potential",
    description: "",
    image: "/assets/images/carousel/hero1.jpeg",
  },
  {
    title: "Education for Inclusion",
    description: "Teaching Digital Literacy in Underserved Communities.",
    image: "/assets/images/carousel/hero2.jpeg",
  },
  {
    title: "From Learners to Innovators",
    description: "Hands-on Training in Digital Tools & Coding.",
    image: "/assets/images/carousel/hero3.jpeg",
  },
  {
    title: "Creating Opportunities",
    description: "Digital Access for Work, Learning, and Growth.",
    image: "/assets/images/carousel/hero4.jpeg",
  },
  {
    title: "Collaboration for Change",
    description: "Stakeholders Uniting for Digital Access.",
    image: "/assets/images/carousel/hero5.jpeg",
  },
  {
    description: "Bridging the Digital Gender Divide.",
    title: "Empowering Women in Tech",
    image: "/assets/images/carousel/hero6.jpeg",
  },
]);
</script>

<template>
  <section
    id="features-12"
    class="shape--bg shape--white-400 pt-100 features-section division"
  >
    <div class="container">
      <UCarousel
        v-slot="{ item }"
        fade
        dots
        loop
        wheel-gestures
        arrows
        :items="items"
        class="w-full mx-auto relative"
      >
        <div class="relative w-full h-[50vh] md:h-[60vh] px-6">
          <!-- Image -->
          <img
            :src="item.image"
            class="w-full h-full object-cover rounded-lg"
          />

          <!-- Overlay Text -->
          <div
            class="absolute inset-0 flex flex-col justify-end p-6 text-white rounded-lg"
          >
            <h2 class="text-xl md:text-2xl font-bold text-white">
              {{ item.title }}
            </h2>
            <p class="text-sm md:text-base">{{ item.description }}</p>
          </div>
        </div>
      </UCarousel>
    </div>
  </section>
</template>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255); /* Dark overlay */
}
.text-content {
  position: absolute;
  z-index: 2;
}
</style>
