<script setup>
const goals = [
  "Improved usage of Government digital services.",
  "Increased application of good agricultural practices and productivity at the farm level, leading to increased earnings and better livelihoods for farmers participating in the project.",
  "Improved food security and nutrition through access to digital skills and digital services, including agricultural extension services in Agriculture, climate adaptations and mitigation among farmers participating in the project.",
  "Increased number of women and girls from disadvantaged and excluded communities accessing digital jobs.",
  "Increased number of women and girls from disadvantaged and excluded communities demonstrating digital employability skills, placed and earning from digital jobs or digitally enabled jobs with financial literacy and entrepreneurship skills.",
  "Increased awareness of digital developmental benefits among Kenyan citizens.",
  "Increased number of Kenyans with at least foundational digital skills and leveraging digital developmental benefits.",
  "Reduced usage gap on internet, digital content, and platforms access and use.",
  "Digital inclusion of women, girls and PWDs and reduced digital exclusion and marginalisation.",
  "Increased insights from knowledge products to inform practice and policy, leading to broader digital inclusion initiatives at the county and national level and fostering lasting systemic change in relevant institutions.",
  "Digitally empowered women and girls, senior citizens/older adults, youths, small-scale traders, drivers & transporters, farmers, and Persons with Disabilities.",
  "International ethical, safety, security, and inclusivity standards guide the robust AI ecosystem in Kenya.",
  "Enhanced ICT sector supporting economic and social development goals.",
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
            <h2 class="s-22">
              Key Immediate/Intermediate Outcomes Expected from the project
              include
            </h2>
          </div>
        </div>
      </div>
      <!-- FEATURES-7 WRAPPER -->
      <div class="fbox-wrapper">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
          <!-- Loop through objectives array -->
          <div
            v-for="(objective, index) in goals"
            :key="index"
            class="col d-flex"
            style="padding-bottom: 20px"
          >
            <div
              class="fb-1 r-12 animate__animated animate__fadeInUp flex flex-col justify-between h-full p-4 border border-gray-200 rounded-lg shadow-sm transition-transform hover:scale-105"
            >
              <div class="fbox-txt mb-4">
                <p class="p-sm">{{ objective }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
