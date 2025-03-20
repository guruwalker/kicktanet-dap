<script setup lang="ts">
defineProps<{ isOpen: boolean }>();

const emit = defineEmits(["toggle"]);

const router = useRouter();

const { auth: authAction } = useSupabaseClient();

const userRole = useHashedCookie<string | null | undefined>("aa05f44d53a34");

const sidebarItems = [
  {
    section: "General",
    items: [
      { label: "Dashboard", icon: "i-lucide-home", to: "/dashboard" },
      { label: "Users", icon: "i-lucide-users", to: "/dashboard/users" },
      { label: "Images", icon: "i-lucide-image", to: "/dashboard/images" },
      { label: "Videos", icon: "i-lucide-video", to: "/dashboard/videos" },
      { label: "Documents", icon: "i-lucide-file", to: "/dashboard/documents" },
    ],
  },
  // {
  //   section: "You",
  //   items: [
  //     { label: "Your Profile", icon: "i-lucide-user-circle", to: "/dashboard/profile" },
  //   ],
  // },
];
</script>

<template>
  <aside
    class="fixed inset-y-0 left-0 h-screen border-r p-4 transition-all duration-300 ease-in-out overflow-y-auto"
    :class="[
      isOpen ? 'w-64' : 'w-20',
      'bg-background dark:bg-stone-800', // Background color for both modes
      'border-r dark:border-stone-700', // Border color for dark mode
    ]"
    style="z-index: 200"
  >
    <!-- Logo & Title -->
    <NuxtLink to="/dashboard" class="flex items-center gap-2 mb-6">
      <img src="/assets/images/kicktanet-logo.png" class="h-12" />
    </NuxtLink>

    <!-- Navigation Items -->
    <div class="flex-1 overflow-y-auto mb-6">
      <div v-for="section in sidebarItems" :key="section.section" class="mb-6">
        <!-- Hide section titles if sidebar is collapsed -->
        <p v-if="isOpen" class="text-xs font-bold mb-2 text-gray-500 uppercase">
          {{ section.section }}
        </p>
        <div class="space-y-1">
          <NuxtLink
            v-for="link in section.items"
            :key="link.to"
            :to="link.to"
            class="flex items-center gap-3 px-4 py-2 rounded-lg transition duration-200"
            :class="[
              $route.path === link.to
                ? 'bg-primary text-white'
                : 'hover:bg-primary/10 dark:hover:bg-stone-700 dark:hover:text-white hover:text-primary',
              'text-gray-700 dark:text-gray-300',
            ]"
          >
            <UIcon :name="link.icon" class="w-5 h-5 flex-shrink-0" />
            <!-- Only show label if sidebar is expanded -->
            <span
              v-if="isOpen"
              class="transition-opacity duration-200 opacity-100"
            >
              {{ link.label }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </aside>
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

/* Mobile Sidebar Overlay styles */
.mobile-sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 16rem;
  height: 100vh;
  z-index: 300;
  /* background-color: rgba(31, 41, 55, 0.9); */
  overflow-y: auto;
  transition: transform 0.3s ease-in-out;
}
</style>
