<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 8 - KPIs | KICKTANet DAP",
});

const data = ref([
  {
    name: "KPI 1",
link: "",
    description:
      "Technology-facilitated gender-based violence (TFGBV); online safety",
  },
  {
    name: "KPI 2",
link: "",
    description:
      "Capacity Building (technical and behavioral) in Mental Health",
  },
  {
    name: "KPI 3",
link: "",
    description: "Literacy skills to engage in the digital world",
  },
  {
    name: "KPI 4",
link: "",
    description:
      "Gender norms affect the perception of who should engage online",
  },
  {
    name: "KPI 5",
link: "",
    description:
      "Report on the study of the introduction of TFGBV into Lay and Journalism curricula",
  },
  {
    name: "KPI 6",
link: "",
    description:
      "Report on the degree of legal frameworks in Kenya in addressing TFGBV curricula",
  },
  {
    name: "KPI 7",
link: "",
    description: "Other Knowledge Products",
  },
  {
    name: "KPI 8",
link: "",
    description:
      "Policy brief on the impact of Technology Facilitated Gender Violence (TFGBV) on mental health",
  },
  {
    name: "KPI 9",
link: "",
    description: "Policy and regulatory improvements",
  },
  {
    name: "KPI 10",
link: "",
    description:
      "Awareness and enhancement the capacity of women, girls, and persons with disabilities on measures to prevent, mitigate, and address TFGBV in Kenya",
  },
  {
    name: "KPI 11",
link: "",
    description:
      "Strengthening accountability mechanisms for TFGBV in the country",
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">COMPONENT #8 - OGBV Partner</p>
        <h4 class="s-28">KPIs</h4>
      </div>
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
              {{ kpi.link }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
