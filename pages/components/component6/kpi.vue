<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 6 - Narrative | KICKTANet DAP",
});

const data = ref([
  {
    name: "KPI 1",
    link: "",
    description: "Stakeholder Validation workshops (virtual -1, physical).",
  },
  {
    name: "KPI 2",
    link: "/assets/documents/Component6-KPI2.pdf",
    description: "Journal article publication (1).",
  },
  {
    name: "KPI 3",
    link: "",
    description: "Position Papers (1).",
  },
  {
    name: "KPI 4",
    link: "",
    description: "White Paper (1).",
  },
  {
    name: "KPI 5",
    link: "",
    description: "Research Website (1).",
  },
  {
    name: "KPI 6",
    link: "",
    description: "Webinar (1).",
  },
  {
    name: "KPI 7",
    link: "",
    description: "Podcast (1).",
  },
  {
    name: "KPI 8",
    link: "/assets/documents/Component6-KPI8.pdf",
    description: "Policy Briefs (1).",
  },
  {
    name: "KPI 9",
    link: "",
    description: "Conference paper presentations (1).",
  },
  {
    name: "KPI 10",
    link: "",
    description: "Stakeholder dissemination forums (1 webinar, one in-person).",
  },
  {
    name: "KPI 11",
    link: "",
    description: "YouTube videos (1).",
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">COMPONENT #6- Generating knowledge products</p>
        <h4 class="s-28">Narrative</h4>
      </div>
    </div>

    <div class=" overflow-x-auto mt-30">
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
