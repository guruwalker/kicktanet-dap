<script setup lang="ts">
useSeoMeta({
  title: "Dashboard",
  ogTitle: "Dashboard",
  description: "View your dashboard overview.",
  ogDescription: "Stay updated with your dashboard insights.",
});

definePageMeta({
  layout: 'dashboard'
});

// Mocked stats (Replace with actual data from API)
const stats = [
  { label: "Users", count: 1, icon: "lucide-users", color: "bg-blue-100 text-blue-600" },
  { label: "Images", count: 0, icon: "lucide-image", color: "bg-green-100 text-green-600" },
  { label: "Documents", count: 0, icon: "lucide-file-text", color: "bg-yellow-100 text-yellow-600" },
  { label: "Videos", count: 0, icon: "lucide-video", color: "bg-red-100 text-red-600" },
];
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Dashboard</h1>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <UCard v-for="(stat, index) in stats" :key="index" class="flex flex-col items-center p-6 text-center">
        <p class="text-lg font-bold mb-2">{{ stat.label }}</p>
        <div :class="['p-3 rounded-full', stat.color]">
          <UIcon :name="stat.icon" class="text-3xl" />
        </div>
        <p class="text-2xl font-semibold mt-2">{{ stat.count }}</p>
      </UCard>
    </div>
  </div>
</template>
