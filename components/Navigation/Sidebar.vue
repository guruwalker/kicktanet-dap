<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  isSidebarOpen: Boolean,
});

const emit = defineEmits(["toggle"]);

// Track which menu section is open
const openSection = ref(null);

// Function to toggle submenus
const toggleSection = (sectionId: any) => {
  openSection.value = openSection.value === sectionId ? null : sectionId;
};

// Function to toggle sidebar
const toggleSidebar = () => {
  emit("toggle");
};
const menuItems = [
  {
    id: 1,
    label: "Component 1",
    icon: "flaticon-folder", // same icon for all components
    subcomponents: [
      {
        label: "Narrative",
        link: "/components/component1/narrative",
        icon: "flaticon-document",
      },
      {
        label: "Outcome",
        link: "/components/component1/outcome",
        icon: "flaticon-chart",
      },
      {
        label: "KPI",
        link: "/components/component1/kpi",
        icon: "flaticon-stats",
      },
      { label: "Impact", link: "/components/component1/impact" },
      {
        label: "Implementing Partners",
        link: "/components/component1/partners",
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
        link: "/components/component2/narrative",
        icon: "flaticon-document",
      },
      {
        label: "Outcome",
        link: "/components/component2/outcome",
        icon: "flaticon-chart",
      },
      {
        label: "KPI",
        link: "/components/component2/kpi",
        icon: "flaticon-stats",
      },
      { label: "Impact", link: "/components/component2/impact" },
      {
        label: "Implementing Partners",
        link: "/components/component2/partners",
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
        link: "/components/component3/narrative",
        icon: "flaticon-document",
      },
      {
        label: "Outcome",
        link: "/components/component3/outcome",
        icon: "flaticon-chart",
      },
      {
        label: "KPI",
        link: "/components/component3/kpi",
        icon: "flaticon-stats",
      },
      { label: "Impact", link: "/components/component3/impact" },
      {
        label: "Implementing Partners",
        link: "/components/component3/partners",
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
        link: "/components/component4/narrative",
        icon: "flaticon-document",
      },
      {
        label: "Outcome",
        link: "/components/component4/outcome",
        icon: "flaticon-chart",
      },
      {
        label: "KPI",
        link: "/components/component4/kpi",
        icon: "flaticon-stats",
      },
      { label: "Impact", link: "/components/component4/impact" },
      {
        label: "Implementing Partners",
        link: "/components/component4/partners",
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
        link: "/components/component5/narrative",
        icon: "flaticon-document",
      },
      {
        label: "Outcome",
        link: "/components/component5/outcome",
        icon: "flaticon-chart",
      },
      {
        label: "KPI",
        link: "/components/component5/kpi",
        icon: "flaticon-stats",
      },
      { label: "Impact", link: "/components/component5/impact" },
      {
        label: "Implementing Partners",
        link: "/components/component5/partners",
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
        link: "/components/component6/narrative",
        icon: "flaticon-document",
      },
      {
        label: "Outcome",
        link: "/components/component6/outcome",
        icon: "flaticon-chart",
      },
      {
        label: "KPI",
        link: "/components/component6/kpi",
        icon: "flaticon-stats",
      },
      { label: "Impact", link: "/components/component6/impact" },
      {
        label: "Implementing Partners",
        link: "/components/component6/partners",
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
        link: "/components/component7/narrative",
        icon: "flaticon-document",
      },
      {
        label: "Outcome",
        link: "/components/component7/outcome",
        icon: "flaticon-chart",
      },
      {
        label: "KPI",
        link: "/components/component7/kpi",
        icon: "flaticon-stats",
      },
      { label: "Impact", link: "/components/component7/impact" },
      {
        label: "Implementing Partners",
        link: "/components/component7/partners",
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
        link: "/components/component8/narrative",
        icon: "flaticon-document",
      },
      {
        label: "Outcome",
        link: "/components/component8/outcome",
        icon: "flaticon-chart",
      },
      {
        label: "KPI",
        link: "/components/component8/kpi",
        icon: "flaticon-stats",
      },
      { label: "Impact", link: "/components/component8/impact" },
      {
        label: "Implementing Partners",
        link: "/components/component8/partners",
        icon: "flaticon-teamwork",
      },
    ],
  },
];

// const toggleSection = (id: number) => {
//   openSection.value = openSection.value === id ? null : id;
// };

// const toggleSidebar = () => {
//   isSidebarOpen.value = !isSidebarOpen.value;
// };
</script>

<template>
  <div
    class="fixed top-0 left-0 h-screen bg-white shadow-lg transition-all duration-300 overflow-y-auto"
    :class="{
      'w-[220px]': isSidebarOpen,
      'w-[50px]': !isSidebarOpen,
      collapsed: !isSidebarOpen,
    }"
  >

    <ul style="padding: 0; margin-top: 150px;">
      <li v-for="item in menuItems" :key="item.id" class="px-2">
        <div @click="toggleSection(item.id)" class="menu-item">
          <span :class="item.icon"></span>
          <span v-if="isSidebarOpen">{{ item.label }}</span>
        </div>
        <ul v-if="openSection === item.id && isSidebarOpen" class="submenu">
          <li v-for="sub in item.subcomponents" :key="sub.label" class="px-3">
            <NuxtLink :to="sub.link" class="submenu-link">
              {{ sub.label }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>

    <div style="margin-top: 20px; text-align: center">
      <button @click="toggleSidebar" class="toggle-btn">
        <span v-if="isSidebarOpen" class="flaticon-left-arrow"></span>
        <span v-else class="flaticon-right-arrow"></span>
      </button>
    </div>

  </div>
</template>

<style scoped>
/* Sidebar default styles */
.sidebar {
  height: 100vh;
  width: 220px;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
  overflow-x: hidden;
}

/* Collapsed sidebar */
.sidebar.collapsed {
  width: 50px;
}

/* Button styling */
.toggle-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: #007bff;
}

/* Sidebar menu items */
.menu-item {
  cursor: pointer;
  font-weight: 600;
  padding: 8px;
  background: #f8f8f8;
  border-radius: 5px;
  transition: background 0.3s;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Submenu styling */


/* Submenu styling */
.submenu {
  list-style: none;
  padding-left: 0;
  margin-top: 5px;
}

.submenu-link {
  padding: 6px 8px;
  border-radius: 6px;
  display: block;
  transition: background 0.2s;
}

.submenu-link:hover {
  background: #f0f4ff;
}

</style>
