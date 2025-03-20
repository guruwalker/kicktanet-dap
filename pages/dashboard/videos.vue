<script setup>
useSeoMeta({
  title: "Videos",
  ogTitle: "Videos",
});

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Videos</h1>
      <UButton color="primary" @click="isDrawerOpen = true">
        Upload Videos
      </UButton>
    </div>

    <div class="d-flex align-center">No Videos found!</div>
  </div>
</template>
