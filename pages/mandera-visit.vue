<script setup>
useHead({
  title: "Monitoring & Evaluation Visit – Mandera County",
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const visitDetails = {
  title: "Monitoring & Evaluation Visit to Mandera County",
  date: "TBC",
  project: "Strengthening Digital Communities Project in Mandera and Busia Counties",
  background:
    "The British High Commission, in collaboration with key stakeholders, is leading the 'Strengthening Digital Communities' project under the UK Digital Access Programme (DAP). This initiative aims to enhance digital literacy among marginalized groups in Mandera County, including women, youth, senior citizens, and persons with disabilities.",
  purpose:
    "To assess the progress and impact of the Community Digital Champions program in training community members across Mandera County’s sub-counties.",
  objectives: [
    "Interact with project beneficiaries to gather feedback on the project’s impact.",
    "Engage with County and National Government officials for their insights.",
    "Visit the eight sub-counties to reach project beneficiaries.",
    "Engage with implementing and grassroots partners, including KICTANET.",
    "Evaluate key successes, areas of improvement, and opportunities for change.",
    "Collect additional insights to inform future projects.",
  ],
  keyActivities: [
    "Courtesy call to H.E. Mr Mohamed Adan Khalif, Governor of Mandera County.",
    "Courtesy call to Mr Onesmus Kyatha, County Commissioner of Mandera County.",
    "Site visits to selected sub-counties.",
    "Meetings with Community Digital Champions, trainees, and local leaders.",
    "Stakeholder engagement sessions.",
    "Observation of ongoing digital skills training sessions.",
    "Inspection of digital hubs and innovation centers.",
  ],
  outcomes: [
    "Reinforce visibility of the project.",
    "Identify potential success stories for future follow-ups and documentation.",
    "Strengthened partnerships between stakeholders.",
    "Identify opportunities for future interventions.",
  ],
  participants: [
    "British High Commission delegation",
    "Mandera County Government officials",
    "National Government Officials (County Commissioners)",
    "Representatives from implementing partners (KICTANet, Gencad, Plusfarm, Sotehub, Eldohub)",
    "Community Digital Champions and project beneficiaries (Agripreneurs, Entrepreneurs, Digital Innovators, Content Creators, Gig Workers)",
    "Local community leaders and stakeholders",
  ],
  agenda: [
    { time: "09:00 AM", activity: "Courtesy Call to the Governor", coordination: "Mandera County Government", location: "Governor's Office" },
    { time: "10:30 AM", activity: "Courtesy Call to the County Commissioner", coordination: "National Government", location: "County Commissioner's Office" },
    { time: "12:00 PM", activity: "Site Visit to Digital Hubs", coordination: "KICTANET, Local Government", location: "Various Sub-counties" },
    { time: "02:00 PM", activity: "Meetings with Community Digital Champions", coordination: "British High Commission, KICTANET", location: "Local Centers" },
    { time: "03:30 PM", activity: "Stakeholder Engagement Session", coordination: "Mandera County & Project Partners", location: "Conference Hall" },
    { time: "04:30 PM", activity: "Wrap-up & Closing", coordination: "British High Commission", location: "Mandera County HQ" },
  ],
};
</script>

<template>
  <section id="mandera-visit" class="pb-80 inner-page-hero division">
    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-10">
          <!-- PAGE TITLE -->
          <div class="inner-page-title text-center">
            <span>Mandera County</span>
            <h2 class="s-52 w-700">{{ visitDetails.title }}</h2>
            <p class="p-lg">
              <strong>Date:</strong> {{ visitDetails.date }} &nbsp; | &nbsp;
              <strong>Project:</strong> {{ visitDetails.project }}
            </p>
          </div>

          <!-- BACKGROUND -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Background</h5>
            <p>{{ visitDetails.background }}</p>
            <hr />
          </div>

          <!-- PURPOSE -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Purpose of the Visit</h5>
            <p>{{ visitDetails.purpose }}</p>
            <hr />
          </div>

          <!-- OBJECTIVES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Objectives</h5>
            <ul class="simple-list">
              <li v-for="objective in visitDetails.objectives" :key="objective">
                {{ objective }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- KEY ACTIVITIES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Key Activities</h5>
            <ul class="simple-list">
              <li v-for="activity in visitDetails.keyActivities" :key="activity">
                {{ activity }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- OUTCOMES -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Expected Outcomes</h5>
            <ul class="simple-list">
              <li v-for="outcome in visitDetails.outcomes" :key="outcome">
                {{ outcome }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- PARTICIPANTS -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Participants</h5>
            <ul class="simple-list">
              <li v-for="participant in visitDetails.participants" :key="participant">
                {{ participant }}
              </li>
            </ul>
            <hr />
          </div>

          <!-- AGENDA TABLE -->
          <div class="txt-block">
            <h5 class="s-24 w-700">Agenda</h5>
            <table class="table-auto w-full border-collapse border border-gray-200">
              <thead>
                <tr class="bg-gray-100">
                  <th class="border border-gray-300 p-2">Date & Time</th>
                  <th class="border border-gray-300 p-2">Activity</th>
                  <th class="border border-gray-300 p-2">Coordination</th>
                  <th class="border border-gray-300 p-2">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in visitDetails.agenda" :key="row.time">
                  <td class="border border-gray-300 p-2">{{ row.time }}</td>
                  <td class="border border-gray-300 p-2">{{ row.activity }}</td>
                  <td class="border border-gray-300 p-2">{{ row.coordination }}</td>
                  <td class="border border-gray-300 p-2">{{ row.location }}</td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
