<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 4 - KPIs | KICKTANet DAP",
});

const data = ref([
  {
    name: "KPI 1",
link: "",
    description:
      "Percentage increase in households with reliable internet by leveraging local digital hubs, community networks, and ICTA government free Wi-Fi hotspots.",
  },
  {
    name: "KPI 2",
link: "",
    description:
      "Reduction in the average cost of internet access in target areas.",
  },
  {
    name: "KPI 3",
link: "",
    description:
      "Improvement in internet speed and reliability (measured through network assessments).",
  },
  {
    name: "KPI 4",
link: "",
    description:
      "Number of community members accessing and utilizing online services.",
  },
  {
    name: "KPI 5",
link: "",
    description:
      "Network coverage - Increased geographical reach of broadband and mobile networks.",
  },
  {
    name: "KPI 6",
link: "",
    description:
      "Internet usage measured by the increased frequency and types of online activities among community members.",
  },
  {
    name: "KPI 7",
link: "",
    description:
      "Digital inclusion measured by increased access to and usage of technology and the internet by marginalized groups.",
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #4- Ensure access to digital technology and platforms,
          including accessible devices and affordable internet
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
  </section>
</template>
