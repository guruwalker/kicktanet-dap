<script setup lang="ts">
const isSidebarOpen = ref(true); // false by default on mobile
const isSearchOpen = ref(false);
const isMobile = ref(window.innerWidth < 768);

const router = useRouter();
const auth = useSupabaseUser();
const { auth: authAction } = useSupabaseClient();

const signOut = async () => {
  await authAction.signOut();
  router.push("/");
};

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

onMounted(() => {
  const updateMobile = () => {
    isMobile.value = window.innerWidth < 768;
    // If switching to mobile, ensure sidebar is closed
    if (isMobile.value) {
      isSidebarOpen.value = false;
    }
  };
  window.addEventListener("resize", updateMobile);
});

// For desktop: compute sidebar width based on state
const sidebarWidth = computed(() => (isSidebarOpen.value ? "16rem" : "5rem"));

// For desktop: adjust main wrapper so that there is no horizontal scroll
const mainWrapperStyle = computed(() => {
  if (isMobile.value) {
    return { marginLeft: "0", width: "100%" };
  } else {
    return {
      marginLeft: sidebarWidth.value,
      width: `calc(100% - ${sidebarWidth.value})`,
    };
  }
});
</script>

<template>
  <div class="layout-wrapper">
    <!-- Desktop Sidebar -->
    <DashboardNavigationSidebar
      style="z-index: 500"
      v-if="!isMobile"
      :isOpen="isSidebarOpen"
      @toggle="toggleSidebar"
    />

    <!-- Mobile Sidebar Overlay -->
    <div v-if="isMobile && isSidebarOpen" class="mobile-sidebar-overlay">
      <DashboardNavigationSidebar
        :isOpen="true"
        @toggle="toggleSidebar"
        style="z-index: 500"
      />
    </div>

    <div class="main-wrapper" :style="mainWrapperStyle">
      <DashboardNavigationNavbar
        @toggleSidebar="toggleSidebar"
        @openSearch="isSearchOpen = true"
      />

      <!-- Page Content -->
      <main class="page-content p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout-wrapper {
  display: flex;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

/* Main wrapper for navbar and page content */
.main-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-x: hidden;
}

/* Page content styles */
.page-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
}

.mobile-sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 16rem;
  height: 100vh;
  z-index: 9999; /* Ensure it's on top */
  background-color: #fff; /* or any color to make it stand out */
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
}

/* Then style the actual sidebar inside it, so it appears on the right or left */
.mobile-sidebar-overlay > .dashboard-navigation-sidebar {
  position: absolute;
  left: 0; /* or right: 0; */
  width: 16rem;
  height: 100vh;
  background-color: #fff;
  z-index: 10000; /* just to be safe */
}
</style>
