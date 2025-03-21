<script setup>
useSeoMeta({
  title: "Documents",
  ogTitle: "Documents",
});

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Documents</h1>
      <UButton color="primary" @click="isDrawerOpen = true">
        Upload Documents
      </UButton>
    </div>

    <div class="d-flex align-center">No Documents found!</div>
  </div>
</template>
