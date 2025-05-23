<script setup lang="ts">
import SidebarItems from './SidebarItems'
const props = defineProps<{ isOpen: boolean }>();

const emit = defineEmits(["toggle"]);

function closeSidebar() {
  emit("toggle");
}

const router = useRouter();
const { auth: authAction } = useSupabaseClient();

const userRole = useHashedCookie<string | null | undefined>("aa05f44d53a34");

// Component names for generating items
const componentNames = [
  "Component1",
  "Component2",
  "Component3",
  "Component4",
  "Component5",
  "Component6",
  "Component7",
  "Component8",
];

// Dynamic collapsible state for each component
const componentState = ref(
  Object.fromEntries(componentNames.map((c) => [c, false]))
);

function toggleComponent(component: string) {
  componentState.value[component] = !componentState.value[component];
}

const sidebarItems = ref(SidebarItems)
</script>

<template>
  <aside
    v-if="isOpen"
    class="fixed inset-y-0 left-0 h-screen border-r p-4 transition-all duration-300 ease-in-out overflow-y-auto"
    :class="[
      isOpen ? 'w-64' : 'w-0',
      'bg-background dark:bg-stone-800', // Background color for both modes
      'border-r dark:border-stone-700', // Border color for dark mode
    ]"
    style="z-index: 200"
  >
    <!-- Logo & Title -->
    <!-- <NuxtLink to="/dashboard" class="flex items-center gap-2 mb-6">
      <img src="/assets/images/kicktanet-logo.png" class="h-12" />
    </NuxtLink> -->
    <NuxtLink to="/dashboard" class="flex items-center gap-2 mb-6">
      <img src="/assets/images/kicktanet-logo.png" class="h-12" />
    </NuxtLink>

    <div style="margin-top: 20px; text-align: center">
      <button @click="emit('toggle')" class="toggle-btn">
        <span v-if="props.isOpen" class="flaticon-left-arrow"></span>
        <span v-else class="flaticon-right-arrow"></span>
      </button>
    </div>

    <!-- Navigation Items -->
    <div class="flex-1 overflow-y-auto mb-6">
      <div v-for="section in sidebarItems" :key="section.section" class="mb-6">
        <p v-if="isOpen" class="text-xs font-bold mb-2 text-gray-500 uppercase">
          {{ section.section }}
        </p>

        <!-- General & Profile Sections -->
        <div v-if="section.section !== 'Components'" class="space-y-1">
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
            @click="closeSidebar"
          >
            <UIcon :name="link.icon" class="w-5 h-5 flex-shrink-0" />
            <span v-if="isOpen">{{ link.label }}</span>
          </NuxtLink>
        </div>

        <!-- Components Section -->
        <div v-if="section.section === 'Components'" class="space-y-1">
          <div
            v-for="component in section.items"
            :key="component.name"
            class="space-y-1"
          >
            <!-- Component Header -->
            <div
              class="flex items-center justify-between cursor-pointer px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-stone-700"
              @click="toggleComponent(component.name)"
            >
              <div
                class="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
              >
                <UIcon :name="component.icon" class="w-5 h-5" />
                <span>{{ component.name }}</span>
              </div>

              <UIcon
                :name="
                  componentState[component.name]
                    ? 'i-lucide-chevron-down'
                    : 'i-lucide-chevron-right'
                "
                class="w-5 h-5"
              />
            </div>

            <!-- Component Sub-items -->
            <div v-if="componentState[component.name]" class="ml-6 space-y-1">
              <NuxtLink
                v-for="item in component.items"
                :key="item.to"
                :to="item.to"
                class="flex items-center space-x-2 px-4 py-1 rounded-lg hover:bg-primary/10 dark:hover:bg-stone-700"
                @click="closeSidebar"
              >
                <UIcon :name="item.icon" class="w-5 h-5" />
                <span>{{ item.label }}</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
