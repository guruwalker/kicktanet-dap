<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useImagesStorage } from "~/composables/useStorage/useImagesStorage";

useSeoMeta({
  title: "Images",
  ogTitle: "Images",
});

definePageMeta({
  layout: "dashboard",
});

const { listImages } = useImagesStorage();
const images = ref<string[]>([]);
const isDrawerOpen = ref(false);

const fetchImages = async () => {
  const result = await listImages();

  // Filter out "images/" from the response and only keep valid files
  images.value = (result || []).filter(file => file !== "images/");
};

onMounted(() => {
  fetchImages();
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

    <div v-if="images.length === 0" class="d-flex align-center">
      No Images found!
    </div>

    <div v-else class="grid grid-cols-3 gap-4">
      <div v-for="image in images" :key="image" class="p-4 border rounded">
        <img
          :src="`https://rickandmorty.fra1.cdn.digitaloceanspaces.com/${image}`"
          alt="Image"
          class="w-full h-auto rounded"
        />
      </div>
    </div>
  </div>
</template>
