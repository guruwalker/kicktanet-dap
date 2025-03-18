<script setup>
useHead({
  title: "Component 1 - Identification of Digital Inclusion Gaps",
  bodyAttrs: { class: "navbar-dark navbar-dark-2" },
});

const component1 = {
  title: "Component 1: Identification of Digital Inclusion Gaps",
  description:
    "This phase focused on identifying barriers to digital access in Mandera and Busia counties.",
  objectives: [
    "Assess the state of digital access and inclusion in Mandera & Busia.",
    "Identify key challenges such as connectivity, affordability, and literacy.",
    "Engage stakeholders (local government, organizations, and communities).",
    "Collect baseline data to inform the next phases of the project.",
  ],
  keyFindings: [
    "Limited internet access, especially in rural Mandera.",
    "High cost of mobile data and lack of affordable devices.",
    "Low levels of digital literacy, particularly among women and elderly.",
    "Need for localized training and community-driven digital solutions.",
  ],
  methodology: [
    "Conducted surveys and interviews with community members.",
    "Engaged local stakeholders, including KICTANet and Eldohub.",
    "Analyzed existing research on digital inclusion in Kenya.",
  ],
  challenges: [
    "Limited electricity and digital infrastructure in remote areas.",
    "Language barriers preventing access to digital content.",
    "Financial constraints limiting device ownership.",
  ],
  outcomes: [
    "Baseline report on digital inclusion gaps completed.",
    "Recommendations shared with partners and stakeholders.",
    "Insights used to design targeted digital literacy programs.",
  ],
};
</script>

<template>
  <section id="component-1" class="pb-80 inner-page-hero division">
    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-10">
          <!-- PAGE TITLE -->
          <div class="inner-page-title text-center">
            <h2 class="s-52 w-700">{{ component1.title }}</h2>
            <p class="p-lg">{{ component1.description }}</p>
          </div>

          <!-- OBJECTIVES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Objectives</h5>
            <ul class="simple-list">
              <li v-for="objective in component1.objectives" :key="objective">
                {{ objective }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- KEY FINDINGS -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Key Findings</h5>
            <ul class="simple-list">
              <li v-for="finding in component1.keyFindings" :key="finding">
                {{ finding }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- METHODOLOGY -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Methodology</h5>
            <ul class="simple-list">
              <li v-for="method in component1.methodology" :key="method">
                {{ method }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- CHALLENGES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Challenges Identified</h5>
            <ul class="simple-list">
              <li v-for="challenge in component1.challenges" :key="challenge">
                {{ challenge }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- OUTCOMES & NEXT STEPS -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Outcomes & Next Steps</h5>
            <ul class="simple-list">
              <li v-for="outcome in component1.outcomes" :key="outcome">
                {{ outcome }}
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
