<script setup lang="ts">
import { ref } from "vue";

const isSidebarOpen = ref(true); // true: expanded; false: collapsed
const openSection = ref(null);

const menuItems = [
  {
    id: 1,
    label: "Component 1",
    icon: "flaticon-folder", // same icon for all components
    subcomponents: [
      {
        label: "Narrative",
        link: "/component1/narrative",
        icon: "flaticon-document",
      },
      { label: "Outcome", link: "/component1/outcome", icon: "flaticon-chart" },
      { label: "KPI", link: "/component1/kpi", icon: "flaticon-stats" },
      { label: "Impact", link: "/component1/impact" },
      {
        label: "Implementing Partners",
        link: "/component1/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
  {
    id: 2,
    label: "Component 2",
    icon: "flaticon-folder",
    subcomponents: [
      {
        label: "Narrative",
        link: "/component2/narrative",
        icon: "flaticon-document",
      },
      { label: "Outcome", link: "/component2/outcome", icon: "flaticon-chart" },
      { label: "KPI", link: "/component2/kpi", icon: "flaticon-stats" },
      { label: "Impact", link: "/component2/impact" },
      {
        label: "Implementing Partners",
        link: "/component2/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
  {
    id: 3,
    label: "Component 3",
    icon: "flaticon-folder",
    subcomponents: [
      {
        label: "Narrative",
        link: "/component3/narrative",
        icon: "flaticon-document",
      },
      { label: "Outcome", link: "/component3/outcome", icon: "flaticon-chart" },
      { label: "KPI", link: "/component3/kpi", icon: "flaticon-stats" },
      { label: "Impact", link: "/component3/impact" },
      {
        label: "Implementing Partners",
        link: "/component3/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
  {
    id: 4,
    label: "Component 4",
    icon: "flaticon-folder",
    subcomponents: [
      {
        label: "Narrative",
        link: "/component4/narrative",
        icon: "flaticon-document",
      },
      { label: "Outcome", link: "/component4/outcome", icon: "flaticon-chart" },
      { label: "KPI", link: "/component4/kpi", icon: "flaticon-stats" },
      { label: "Impact", link: "/component4/impact" },
      {
        label: "Implementing Partners",
        link: "/component4/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
  {
    id: 5,
    label: "Component 5",
    icon: "flaticon-folder",
    subcomponents: [
      {
        label: "Narrative",
        link: "/component5/narrative",
        icon: "flaticon-document",
      },
      { label: "Outcome", link: "/component5/outcome", icon: "flaticon-chart" },
      { label: "KPI", link: "/component5/kpi", icon: "flaticon-stats" },
      { label: "Impact", link: "/component5/impact" },
      {
        label: "Implementing Partners",
        link: "/component5/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
  {
    id: 6,
    label: "Component 6",
    icon: "flaticon-folder",
    subcomponents: [
      {
        label: "Narrative",
        link: "/component6/narrative",
        icon: "flaticon-document",
      },
      { label: "Outcome", link: "/component6/outcome", icon: "flaticon-chart" },
      { label: "KPI", link: "/component6/kpi", icon: "flaticon-stats" },
      { label: "Impact", link: "/component6/impact" },
      {
        label: "Implementing Partners",
        link: "/component6/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
  {
    id: 7,
    label: "Component 7",
    icon: "flaticon-folder",
    subcomponents: [
      {
        label: "Narrative",
        link: "/component7/narrative",
        icon: "flaticon-document",
      },
      { label: "Outcome", link: "/component7/outcome", icon: "flaticon-chart" },
      { label: "KPI", link: "/component7/kpi", icon: "flaticon-stats" },
      { label: "Impact", link: "/component7/impact" },
      {
        label: "Implementing Partners",
        link: "/component7/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
  {
    id: 8,
    label: "Component 8",
    icon: "flaticon-folder",
    subcomponents: [
      {
        label: "Narrative",
        link: "/component8/narrative",
        icon: "flaticon-document",
      },
      { label: "Outcome", link: "/component8/outcome", icon: "flaticon-chart" },
      { label: "KPI", link: "/component8/kpi", icon: "flaticon-stats" },
      { label: "Impact", link: "/component8/impact" },
      {
        label: "Implementing Partners",
        link: "/component8/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
];

const toggleSection = (id: number) => {
  openSection.value = openSection.value === id ? null : id;
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <!-- Sidebar always present but collapsible -->
  <div
    class="sidebar"
    :class="{ collapsed: !isSidebarOpen }"
    :style="{ width: isSidebarOpen ? '220px' : '50px' }"
  >
    <ul style="list-style: none; padding: 0">
      <li v-for="item in menuItems" :key="item.id" style="margin-bottom: 10px">
        <div
          @click="toggleSection(item.id)"
          style="
            cursor: pointer;
            font-weight: 600;
            padding: 8px;
            background: #f8f8f8;
            border-radius: 5px;
            transition: background 0.3s;
            display: flex;
            align-items: center;
            gap: 10px;
          "
        >
          <span :class="item.icon" style="font-size: 16px"></span>
          <span v-if="isSidebarOpen">{{ item.label }}</span>
        </div>
        <ul
          v-if="openSection === item.id && isSidebarOpen"
          style="list-style: none; padding-left: 15px; margin-top: 5px"
        >
          <li
            v-for="sub in item.subcomponents"
            :key="sub.label"
            style="margin-bottom: 5px"
          >
            <NuxtLink
              :to="sub.link"
              style="
                text-decoration: none;
                color: #007bff;
                font-size: 14px;
                display: flex;
                align-items: center;
                gap: 10px;
              "
            >
              <span style="font-size: 14px"></span>
              {{ sub.label }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
    <!-- Toggle button for mobile view as an icon -->
    <div style="margin-top: 20px; text-align: center">
      <button
        @click="toggleSidebar"
        style="
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 20px;
          color: #007bff;
        "
      >
        <span v-if="isSidebarOpen" class="flaticon-left-arrow"></span>
        <span v-else class="flaticon-right-arrow"></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Center content vertically */

  width: 200px; /* Default expanded width */
}

.sidebar.collapsed {
  width: 50px; /* Collapsed width */
}

.toggle-btn {
  margin: 10px;
  background: none;
  border: none;
  cursor: pointer;
}
</style>
