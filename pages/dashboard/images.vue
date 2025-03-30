<script setup lang="ts">
import { ref, onMounted } from "vue";

definePageMeta({
  layout: "dashboard",
});

const { listImages } = useSupabaseImages();
const images = ref([]);
const isDrawerOpen = ref(false);

const route = useRoute()

const component = route.query.c || null;

const fetchImages = async () => {
  if (!component) {
    console.error("Component is not specified in the URL.");
    return;
  }

  try {
    const response = await $fetch(`/api/media-files/images`, {
      // Replace with your API path
      params: { c: component },
      method: 'GET'
    });

    if (response.success) {
      images.value = response.data;
    } else {
      console.error("Failed to fetch images:", response.message);
    }
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

onMounted(fetchImages);

const handleUploadComplete = async () => {
  await fetchImages();
  isDrawerOpen.value = false;
};
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Images</h1>
      <UButton color="primary" @click="isDrawerOpen = true"
        >Upload Images</UButton
      >
    </div>

    <div v-if="images.length === 0">No Images found!</div>
    <div v-else class="grid grid-cols-3 gap-4">
      <div v-for="image in images" :key="image.file_name" class="p-4 border rounded">
        <img :src="image.public_url" :alt="image.file_name" class="w-full h-auto rounded" />
      </div>
    </div>

    <div
      v-if="isDrawerOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <DashboardImageUploadForm
        @onClose="() => (isDrawerOpen = false)"
        @onUploadComplete="handleUploadComplete"
      />
    </div>
  </div>
</template>
