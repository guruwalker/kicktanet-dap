<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 1 - KPIs | KICKTANet DAP",
});

const data = ref([
  {
    name: "KPI 1",
    description: "Train Twelve Basic Digital Literacy Modules to 10,000 CDCs",
  },
  {
    name: "KPI 2",
    description:
      "Train 500,000 Citizens (400,000 in Busia and 100,000 in Mandera County) ICTA Foundational Digital Literacy Six Modules",
  },
  {
    name: "KPI 3",
    description:
      "Baseline & endline tools completed accurately and matched by citizens supported by CDCs devoid of duplicates",
  },
  {
    name: "KPI 4",
    description:
      "Citizens completed training, ICTA DL Skills min 2 days for each citizen",
  },
  {
    name: "KPI 5",
    description:
      "Percentage of target groups (women, girls, PWDs, etc.) actively participating in digital literacy initiatives.",
  },
  {
    name: "KPI 6",
    description:
      "Number of partnerships established and sustained with local players",
  },
  {
    name: "KPI 7",
    description:
      "Skill gain by Citizen on the Foundational Digital Literacy Skills Training ICTA six modules evidence",
  },
  {
    name: "KPI 8",
    description:
      "KPI Monthly Income increases by more than 50% through use of the trained skills",
  },
  {
    name: "KPI 9",
    description:
      "Qualitative and quantitative Evidence of empowerment-stories, videos, audios etc",
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #1- Providing foundational digital skills
        </p>
        <h4 class="s-28">KPIs</h4>
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
    </div>
  </section>
</template>
