<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 7 - KPIs | KICKTANet DAP",
});

const data = ref([
  {
    name: "KPI 1",
    description:
      "Number of AI policy recommendations, standards, and guidelines developed and adopted by government agencies or industry bodies.",
  },
  {
    name: "KPI 2",
    description:
      "Number of organisations adopting ethical AI guidelines or frameworks.",
  },
  {
    name: "KPI 3",
    description:
      "Reach and influence of policy briefs and recommendations (e.g., citations, media mentions, policy changes).",
  },
  {
    name: "KPI 4",
    description:
      "Level of stakeholder engagement and participation in AI policy discussions.",
  },
  {
    name: "KPI 5",
    description:
      "Number of stakeholders trained on AI policy and security standards.",
  },
  {
    name: "KPI 6",
    description:
      "Level of compliance with AI safety, security, and ethical standards.",
  },
  {
    name: "KPI 7",
    description: "Number of public awareness campaigns conducted.",
  },
  {
    name: "KPI 8",
    description:
      "Level of stakeholder engagement in the policy development process.",
  },
  {
    name: "KPI 9",
    description:
      "Policy impact measured by evidence of project contributions to AI policy development and implementation.",
  },
  {
    name: "KPI 10",
    description:
      "Safety and security impact measured by the number of AI systems incorporating safety and security measures.",
  },
  {
    name: "KPI 11",
    description:
      "Ethical considerations measured by the extent to which ethical principles are integrated into AI development practices.",
  },
  {
    name: "KPI 12",
    description:
      "Capacity building measured by the number of individuals trained and their feedback on training effectiveness.",
  },
  {
    name: "KPI 13",
    description:
      "Public awareness measured by the level of public knowledge and understanding of AI and its societal implications.",
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #7 - AI-Enhancement of the Artificial Intelligence and
          emerging technology ecosystem in Kenya (Policy, safety and security
          Standards, guidelines and regulatory framework
        </p>
        <h4 class="s-28">KPIs</h4>
      </div>

      <!-- Narrative -->
      <div class="container overflow-x-auto mt-30">
        <table
          class="table-auto w-full border-collapse border border-gray-300 mt-4"
        >
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 p-2 text-left">Name</th>
              <th class="border border-gray-300 p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="kpi in data" :key="kpi.name">
              <td class="border border-gray-300 p-2">{{ kpi.name }}</td>
              <td class="border border-gray-300 p-2 whitespace-pre-line">
                {{ kpi.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
