<script setup lang="ts">
useSeoMeta({
  title: "Dashboard",
  ogTitle: "Dashboard",
  description: "View your dashboard overview.",
  ogDescription: "Stay updated with your dashboard insights.",
});

definePageMeta({
  layout: 'dashboard'
})
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Dashboard</h1>
    </div>
  </div>
</template>
