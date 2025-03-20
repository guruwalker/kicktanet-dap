<script setup lang="ts">
const emit = defineEmits(["toggleSidebar", "openSearch"]);
const { auth: authAction } = useSupabaseClient();

const signOut = async () => {
  await logout();
};

// Theme options
const themes = [
  { value: "light", label: "Light", icon: "i-lucide-sun" },
  { value: "dark", label: "Dark", icon: "i-lucide-moon" },
];

const colorMode = useColorMode();

// Find current theme
const currentTheme = computed(() =>
  themes.find((theme) => theme.value === colorMode.preference)
);

// Toggle theme when button clicked
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === "light" ? "dark" : "light";
};
</script>

<template>
  <nav
    class="bg-background border-b dark:border-stone-800 px-6 py-4 flex flex-nowrap items-center justify-between w-full box-border overflow-x-hidden relative"
  >
    <!-- Toggle button always visible -->
    <UButton
      class="z-50"
      variant="ghost"
      icon="i-lucide-menu"
      @click="emit('toggleSidebar')"
    />

    <!-- Filler element if needed -->
    <div class="flex-1"></div>

    <!-- Action Buttons -->
    <div class="actions flex items-center gap-4 flex-shrink-0">
      <UButton
        variant="ghost"
        icon="i-lucide-log-out"
        color="red"
        @click="signOut"
      />
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  overflow-x: hidden;
  box-sizing: border-box;
}
</style>

<style scoped>
.navbar {
  background-color: var(--background);
  border-bottom: 1px solid var(--border-color);
  padding: 1rem 1.5rem;
  display: flex;
  flex-wrap: nowrap; /* Keep items on one line */
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
}
.actions {
  flex-shrink: 0;
}
</style>
