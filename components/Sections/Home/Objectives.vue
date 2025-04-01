<script setup>
const objectives = [
  {
    title: "Enhanced Utilization of Government Digital Services",
    description:
      "Increase the adoption and efficiency of digital services provided by the government, making them more accessible and useful to the population.",
  },
  {
    title: "Improved Agricultural Practices and Productivity",
    description:
      "Boost farm productivity and farmer incomes through the dissemination of beneficial agricultural practices facilitated by digital tools and services.",
  },
  {
    title: "Food Security and Nutrition",
    description:
      "Strengthen food security and nutritional outcomes by providing access to digital skills and services that enable better agricultural management, climate adaptation, and mitigation.",
  },
  {
    title: "Digital Inclusion and Empowerment",
    description:
      "Expand digital inclusion, especially for women, girls, and Persons with Disabilities, by reducing digital exclusion and enhancing their access to digital jobs, skills, and entrepreneurship opportunities.",
  },
  {
    title: "Creation of knowledge products and publications",
    description:
      "including the production of six policy briefs, six journal articles, six webinars, three YouTube videos, and a dedicated research website.",
  },
  {
    title: "Enhanced AI and ICT sector",
    description:
      "supportive of the Bottom-up Economic agenda of the Government",
  },
];
</script>

<template>
  <section id="features-7" class="py-100 features-section division">
    <div class="container">
      <!-- SECTION TITLE -->
      <div class="row justify-content-center">
        <div class="">
          <div class="section-title mb-70">
            <!-- Title -->
            <h2 class="s-30">Our Project Objectives</h2>
            <!-- Text -->
            <p class="s-21 color--grey">
              Advancing Digital Access and economic empowerment in underserved
              communities.
            </p>
          </div>
        </div>
      </div>
      <!-- FEATURES-7 WRAPPER -->
      <div class="fbox-wrapper">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          <!-- Loop through objectives array -->
          <div
            v-for="(objective, index) in objectives"
            :key="index"
            class="col d-flex"
            style="padding-bottom: 20px;"
          >
            <div
              class=" fb-1 r-12 animate__animated animate__fadeInUp flex flex-col justify-between h-full p-4 border border-gray-200 rounded-lg shadow-sm transition-transform hover:scale-105"
            >
              <div class="fbox-txt mb-4">
                <h6 class="s-20 w-700 mb-2">{{ objective.title }}</h6>
                <p class="p-sm">{{ objective.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
