<script setup>
import { ref } from "vue";

const isSidebarOpen = ref(false); // Default to collapsed

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <div
    id="page"
    :class="{ page: isSidebarOpen, 'collapsed-page': !isSidebarOpen }"
    class="font--jakarta"
    style="display: flex; min-height: 100vh; overflow-x: hidden"
  >
    <NavigationSidebar :isSidebarOpen="isSidebarOpen" @toggle="toggleSidebar" />
    <div class="content">
      <NavigationHeader />
      <slot />
      <NavigationFooter />
    </div>
  </div>
</template>

<style scoped>
/* Default collapsed (matches sidebar collapsed state) */
.collapsed-page {
  margin-left: 50px;
  transition: margin-left 0.3s ease-in-out;
}

/* When sidebar is open */
.page {
  margin-left: 220px !important;
  transition: margin-left 0.3s ease-in-out;
}

/* Ensure content area adjusts */
.content {
  flex-grow: 1;
  min-height: 100vh;
  overflow-y: auto;
}
</style>

<style src="~/assets/css/color-scheme/default.scss" lang="scss"></style>
