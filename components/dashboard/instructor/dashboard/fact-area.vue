<script setup lang="ts">
const factData = [
  {
    count: 20,
    label: "All Uploads",
    icon: "/images/dashboard/icon/fact/teacher.svg",
    className: "",
  },
  {
    count: 84,
    label: "Images",
    icon: "/images/dashboard/icon/fact/enroll-icon.svg",
    className: "common-pale-yellow",
  },
  {
    count: 42,
    label: "Videos",
    icon: "/images/dashboard/icon/fact/cup.svg",
    className: "common-pale-pacific",
  },
  {
    count: 145,
    label: "Documents",
    icon: "/images/dashboard/icon/fact/students.svg",
    className: "common-pale-green",
  },
];
</script>

<template>
  <section class="tp-fact-wrapper">
    <div class="row">
      <div class="col-lg-6">
        <div class="tp-dashboard-section">
          <h2 class="tp-dashboard-title">Dashboard</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div v-for="(fact, i) in factData" :key="i" class="col-lg-4">
        <div
          class="tp-fact-item d-flex align-items-center justify-content-between"
        >
          <div class="tp-fact-content">
            <h4 class="tp-fact-count">{{ fact.count }}</h4>
            <span>{{ fact.label }}</span>
          </div>
          <div class="tp-fact-icon">
            <span :class="`${fact.className || ''}`">
              <img :src="fact.icon" alt="fact-icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
