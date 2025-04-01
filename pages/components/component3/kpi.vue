<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 3 - KPIs | KICKTANet DAP",
});

const data = ref([
  {
    name: "KPI 1",
    description:
      "Reach and Impact of awareness campaigns (number of people exposed to campaign messages) evidence of action and impact activity.",
  },
  {
    name: "KPI 2",
    description:
      "Increase in use of digital devices, platforms, and government services, including number of visits, registrations, or service requests.",
  },
  {
    name: "KPI 3",
    description:
      "Satisfaction with digital services, digital content, platforms, and government services (measured through surveys or feedback mechanisms).",
  },
  {
    name: "KPI 4",
    description:
      "Number of active partnerships with DAP partners and organizations of PWDs, content and service providers.",
  },
  {
    name: "KPI 5",
    description:
      "Increase of awareness levels from baseline to endline: Percentage of target communities aware of digital services and opportunities.",
  },
  {
    name: "KPI 6",
    description:
      "Digital services, digital content, platforms, and government services usage: Number of individuals utilizing digital services and the frequency of use.",
  },
  {
    name: "KPI 7",
    description:
      "Content accessibility measured by the percentage of digital content meeting accessibility standards.",
  },
  {
    name: "KPI 8",
    description:
      "Partner engagement measured by level of participation and collaboration among DAP partners.",
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #3- Develop awareness campaigns and content using various
          communication channels.
        </p>
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
  </section>
</template>
