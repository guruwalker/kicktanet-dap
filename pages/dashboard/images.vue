<script setup>
useSeoMeta({
  title: "Images",
  ogTitle: "Images",
});

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Images</h1>
      <UButton color="primary" @click="isDrawerOpen = true">
        Upload Images
      </UButton>
    </div>

    <div class="d-flex align-center">No Images found!</div>
  </div>
</template>
