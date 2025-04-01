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
    description:
      "Number of CDCs, SMEs, Small Holder farmers, Transporters, traders etc engaged in the intervention for occupation and income improvement/empowerment.",
  },
  {
    name: "KPI 2",
    description:
      "Percentage of target groups (women, girls, PWDs, etc.) actively participating in handholding, income improvement/empowerment intervention programs(s).",
  },
  {
    name: "KPI 3",
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
    description:
      "Number of successful digital businesses started by program participants.",
  },
  {
    name: "KPI 5",
    description:
      "Percentage of participants who report improved financial literacy and management skills.",
  },
  {
    name: "KPI 6",
    description:
      "Training completion rates measured by the percentage of participants who complete digital employability courses.",
  },
  {
    name: "KPI 7",
    description:
      "Mentorship engagement measured by the number of participants actively engaged in mentorship programs.",
  },
  {
    name: "KPI 8",
    description:
      "Job placement rate measured by the percentage of participants who secure employment, internships, or entrepreneurial ventures after training.",
  },
  {
    name: "KPI 9",
    description:
      "Retention rates measured by the percentage of participants retained through the mentorship and training programs.",
  },
  {
    name: "KPI 10",
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

      <div class="overflow-x-auto mt-30">
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
