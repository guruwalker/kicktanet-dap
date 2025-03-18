<template>
  <section id="about-page" class="pb-80 inner-page-hero division">
    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-10">
          <!-- PAGE TITLE -->
          <div class="home-title text-center">
            <h1 class="s-60 w-700">Bridging the Digital Divide</h1>
            <p class="p-lg">
              Empowering communities through digital literacy and inclusion.
            </p>
          </div>

          <!-- INTRODUCTION -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Understanding the Digital Divide</h5>
            <p>{{ homeDetails.introduction }}</p>
            <hr />
          </div>

          <!-- PROJECT OBJECTIVES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Our Objectives</h5>
            <ul class="simple-list">
              <li v-for="objective in homeDetails.objectives" :key="objective">
                {{ objective }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- SUMMARY DASHBOARD -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Project Impact</h5>
            <div class="dashboard-grid">
              <div
                class="dashboard-item"
                v-for="kpi in homeDetails.kpis"
                :key="kpi.label"
              >
                <h3 class="s-32 w-700">{{ kpi.value }}</h3>
                <p>{{ kpi.label }}</p>
              </div>
            </div>
            <hr />
          </div>

          <!-- CALL TO ACTION -->
          <div class="txt-block text-center">
            <h5 class="s-24 w-700">Join Us in Creating Change</h5>
            <p>{{ homeDetails.callToAction }}</p>
            <a href="/contact" class="btn btn-theme">Get Involved</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const homeDetails = {
  introduction:
    "The digital divide represents the gap between individuals who have access to modern information and communication technology and those who do not. This project aims to bridge that gap by fostering digital skills, infrastructure, and inclusion.",
  objectives: [
    "Increase access to digital tools and connectivity in marginalized areas.",
    "Enhance digital literacy among communities through training and workshops.",
    "Support local businesses and entrepreneurs in leveraging digital solutions.",
    "Strengthen partnerships to create sustainable digital ecosystems.",
  ],
  kpis: [
    { label: "Citizens Reached", value: "500,000+" },
    { label: "Youth Trained", value: "10,000+" },
    { label: "Digital Hubs Established", value: "15" },
    { label: "Stakeholder Partnerships", value: "20+" },
  ],
  callToAction:
    "Be a part of the movement towards a digitally inclusive future. Get involved today!",
};
</script>

<style scoped>
.home-hero {
  background: #f8f9fa;
  padding-top: 60px;
}
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  text-align: center;
  margin-top: 20px;
}
.dashboard-item {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.btn-theme {
  display: inline-block;
  background: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.3s ease;
}
.btn-theme:hover {
  background: #0056b3;
}
</style>
