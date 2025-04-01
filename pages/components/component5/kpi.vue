<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 5 - KPIs | KICKTANet DAP",
});

const data = ref([
  {
    name: "KPI 1",
    description:
      "Percentage increase in community members accessing and utilizing digital government services.",
  },
  {
    name: "KPI 2",
    description:
      "Satisfaction with the relevance and quality of digital content and services (measured through surveys or feedback mechanisms).",
  },
  {
    name: "KPI 3",
    description:
      "Number of active partnerships with digital service providers and government agencies.",
  },
  {
    name: "KPI 4",
    description:
      "Increase in online engagement with locally relevant digital content (e.g., website traffic, social media interactions).",
  },
  {
    name: "KPI 5",
    description:
      "Content accessibility measured by percentage of digital content available in local languages and accessible formats.",
  },
  {
    name: "KPI 6",
    description:
      "Service utilization measured by the number of individuals accessing and utilizing digital government services and other online resources.",
  },
  {
    name: "KPI 7",
    description:
      "Community engagement measured by level of community participation in content development and feedback mechanisms.",
  },
  {
    name: "KPI 8",
    description:
      "Partner collaboration measured by the effectiveness of partnerships in delivering digital content and services.",
  },
]);

</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #5- Facilitate access to locally relevant digital content
          and services, including digital government services
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
