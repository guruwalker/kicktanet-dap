<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const aboutDetails = {
  title: "Strengthening Digital Communities: Narrowing the Digital Divide in Kenya",
  date: "March 2025",
  project:
    "Strengthening Digital Communities Project in Mandera and Busia Counties, Kenya",
  background: `The Strengthening Digital Communities Project is a collaboration between the British High Commission and key implementing partners under the UK Digital Access Programme (DAP).
               This initiative focuses on enhancing digital literacy and technology access in underserved communities, particularly in Mandera and Busia counties.`,
  purpose: `To empower individuals, businesses, and institutions by addressing digital access challenges and ensuring that all members of society, including marginalized groups, can participate in the digital economy.`,
  objectives: [
    "Enhance digital literacy across Mandera and Busia counties.",
    "Increase access to digital tools and internet connectivity.",
    "Empower digital entrepreneurs and gig workers.",
    "Support Kenya’s goal of 20 million digitally literate citizens by 2027.",
  ],
  keyActivities: [
    "Training Community Digital Champions to reach underserved groups.",
    "Setting up digital hubs for training and innovation.",
    "Providing structured digital literacy programs.",
    "Advocating for inclusive digital policies.",
  ],
  outcomes: [
    "A more digitally literate population in Kenya.",
    "Stronger partnerships between stakeholders in digital inclusion.",
    "Increased employment and business opportunities through digital skills.",
  ],
  participants: [
    "British High Commission representatives",
    "Mandera and Busia County Government officials",
    "National Government representatives",
    "Community Digital Champions",
    "Tech industry stakeholders",
    "Local community leaders",
  ],
};
</script>

<template>
  <section id="about-page" class="pb-80 inner-page-hero division">
    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-10">
          <!-- PAGE TITLE -->
          <div class="inner-page-title text-center">
            <h2 class="s-52 w-700">{{ aboutDetails.title }}</h2>
            <p class="p-lg">
              <strong>Date:</strong> {{ aboutDetails.date }} &nbsp; | &nbsp;
              <strong>Project:</strong> {{ aboutDetails.project }}
            </p>
          </div>

          <!-- BACKGROUND -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Background</h5>
            <p>{{ aboutDetails.background }}</p>
            <hr />
          </div>

          <!-- PURPOSE -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Purpose of the Project</h5>
            <p>{{ aboutDetails.purpose }}</p>
            <hr />
          </div>

          <!-- OBJECTIVES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Objectives</h5>
            <ul class="simple-list">
              <li v-for="objective in aboutDetails.objectives" :key="objective">
                {{ objective }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- KEY ACTIVITIES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Key Activities</h5>
            <ul class="simple-list">
              <li v-for="activity in aboutDetails.keyActivities" :key="activity">
                {{ activity }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- OUTCOMES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Expected Outcomes</h5>
            <ul class="simple-list">
              <li v-for="outcome in aboutDetails.outcomes" :key="outcome">
                {{ outcome }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- PARTICIPANTS -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Participants</h5>
            <ul class="simple-list">
              <li v-for="participant in aboutDetails.participants" :key="participant">
                {{ participant }}
              </li>
            </ul>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
