<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 2 - KPIs | KICKTANet DAP",
});

const data = ref([
  {
    name: "KPI 1",
link: "",
    description:
      "Number of CDCs, SMEs, Small Holder farmers, Transporters, traders etc engaged in the intervention for occupation and income improvement/empowerment.",
  },
  {
    name: "KPI 2",
link: "",
    description:
      "Percentage of target groups (women, girls, PWDs, etc.) actively participating in handholding, income improvement/empowerment intervention programs(s).",
  },
  {
    name: "KPI 3",
link: "",
    description: `Percentage of program participants who are impacted within a specific timeframe by the income handholding improvement/empowerment programme by either:
  - Securing employment or internships in the digital sector
  - Starting a business /Occupation
  - Improving their monthly income by more than 50% on average after completion of the program.
  - Accessing business support and network
  - Access to market and aggregation services etc
  - Increased use and leveraging digital platforms and skills for digital jobs and opportunities`,
  },
  {
    name: "KPI 4",
link: "",
    description:
      "Number of successful digital businesses started by program participants.",
  },
  {
    name: "KPI 5",
link: "",
    description:
      "Percentage of participants who report improved financial literacy and management skills.",
  },
  {
    name: "KPI 6",
link: "",
    description:
      "Training completion rates measured by the percentage of participants who complete digital employability courses.",
  },
  {
    name: "KPI 7",
link: "",
    description:
      "Mentorship engagement measured by the number of participants actively engaged in mentorship programs.",
  },
  {
    name: "KPI 8",
link: "",
    description:
      "Job placement rate measured by the percentage of participants who secure employment, internships, or entrepreneurial ventures after training.",
  },
  {
    name: "KPI 9",
link: "",
    description:
      "Retention rates measured by the percentage of participants retained through the mentorship and training programs.",
  },
  {
    name: "KPI 10",
link: "",
    description:
      "Impact in quantitative and qualitative evidence such as videos, cases, audio, narration etc.",
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #2- Identifying and equipping high-potential young women and
          youthful participants, including CDCs KPIs
        </p>
        <h4 class="s-28">KPI Metrics</h4>
      </div>

      <div class="container overflow-x-auto mt-30">
        <table
          class="table-auto w-full border-collapse border border-gray-300 mt-4"
        >
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 p-2 text-left">Name</th>
              <th class="border border-gray-300 p-2 text-left">Description</th>
              <th class="border border-gray-300 p-2 text-left">Content</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="kpi in data" :key="kpi.name">
              <td class="border border-gray-300 p-2">{{ kpi.name }}</td>
              <td class="border border-gray-300 p-2 whitespace-pre-line">
                {{ kpi.description }}
              </td>
              <td class="border border-gray-300 p-2 whitespace-pre-line">
                             <button v-if="kpi.link !== ''">
                <NuxtLink
                  class="btn btn--theme hover--tra-dark"
                  target="_blank"
                  :to="kpi.link"
                  >Open Content
                </NuxtLink>
              </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
