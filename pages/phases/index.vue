<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});
const phases = [
  {
    id: 1,
    title: "Component 1",
    description:
      "Identification of digital inclusion gaps in Mandera and Busia counties.",
    link: "/phases/component-1",
    status: "Completed",
  },
  {
    id: 2,
    title: "Component 2",
    description:
      "Capacity building of Community Digital Champions (CDCs) for digital literacy training.",
    link: "/phases/component-2",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Component 3",
    description:
      "Deployment of digital infrastructure and setup of community hubs.",
    link: "/phases/component-3",
    status: "Not Started",
  },
  {
    id: 4,
    title: "Component 4",
    description:
      "Implementation of digital literacy training programs across targeted groups.",
    link: "/phases/component-4",
    status: "Not Started",
  },
  {
    id: 5,
    title: "Component 5",
    description:
      "Engagement with local government and policymakers for support.",
    link: "/phases/component-5",
    status: "Not Started",
  },
  {
    id: 6,
    title: "Component 6",
    description:
      "Monitoring, evaluation, and tracking of digital literacy progress.",
    link: "/phases/component-6",
    status: "Not Started",
  },
  {
    id: 7,
    title: "Component 7",
    description:
      "Showcasing success stories and digital transformation impact.",
    link: "/phases/component-7",
    status: "Not Started",
  },
  {
    id: 8,
    title: "Component 8",
    description:
      "Sustainability planning and long-term strategy for digital inclusion.",
    link: "/phases/component-7",
    status: "Not Started",
  },
];

const getStatusClass = (status) => {
  return {
    completed: status === "Completed",
    "in-progress": status === "In Progress",
    "not-started": status === "Not Started",
  };
};
</script>
<template>
  <section id="phases-page" class="pb-80 inner-page-hero division">
    <div class="container">
      <div class="row justify-center">
        <div class="col-xl-10">
          <!-- PAGE TITLE -->
          <div class="inner-page-title text-center">
            <h2 class="s-52 w-700">Project Phases</h2>
            <p class="p-lg">
              The project is structured in multiple phases. Some phases are
              already completed, while others are ongoing or planned for future
              execution.
            </p>
          </div>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            <div v-for="phase in phases" :key="phase.id" class="col">
              <NuxtLink :to="`${phase.link}`" class="phase-card-link">
                <div class="phase-card mb-60">
                  <!-- Card Content -->
                  <div class="phase-card-body text-center p-4 r-14 border">
                    <h6 class="s-20 color--black w-700">{{ phase.title }}</h6>
                    <p class="color--grey">{{ phase.description }}</p>
                    <span
                      class="status-label"
                      :class="{
                        'status-completed': phase.status === 'Completed',
                        'status-in-progress': phase.status === 'In Progress',
                        'status-not-started': phase.status === 'Not Started',
                      }"
                    >
                      {{ phase.status }}
                    </span>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.phase-card {
  background: white;
  border-radius: 14px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.12);
  }

  .phase-card-body {
    border-radius: 14px;
    padding: 20px;
    text-align: center;
  }

  .status-label {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 14px;
    font-weight: bold;

    &.status-completed {
      background: #34d399;
      color: white;
    }
    &.status-in-progress {
      background: #facc15;
      color: black;
    }
    &.status-not-started {
      background: #e5e7eb;
      color: black;
    }
  }
}
</style>
