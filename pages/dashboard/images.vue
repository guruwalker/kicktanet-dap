<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
});


const { listImages, uploadImages } = useSupabaseImages();
const images = ref([]);
const isDrawerOpen = ref(false);
const selectedFiles = ref<File[]>([]);
const uploadError = ref(null);

const fetchImages = async () => {
  try {
    images.value = await listImages();
  } catch (error) {
    console.error(error);
  }
};

const handleFileChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;

  if (files && files.length > 0) {
    if (files.length > 10) {
      uploadError.value = 'You can only upload a maximum of 10 images at a time.';
      return;
    }

    selectedFiles.value = Array.from(files);
    uploadError.value = null; // Reset error if successful selection
  }
};

const handleUpload = async () => {
  if (selectedFiles.value.length === 0) {
    uploadError.value = 'No files selected for upload.';
    return;
  }

  try {
    await uploadImages(selectedFiles.value);
    await fetchImages(); // Refresh the list after upload
    selectedFiles.value = []; // Reset selected files
    isDrawerOpen.value = false;
  } catch (error) {
    uploadError.value = 'Failed to upload images. Please try again.';
  }
};

onMounted(fetchImages);
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Images</h1>
      <UButton color="primary" @click="isDrawerOpen = true">
        Upload Images
      </UButton>
    </div>

    <div v-if="images.length === 0">No Images found!</div>
    <div v-else class="grid grid-cols-3 gap-4">
      <div v-for="image in images" :key="image.name" class="p-4 border rounded">
        <img :src="image.url" :alt="image.name" class="w-full h-auto rounded" />
      </div>
    </div>

    <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h2 class="text-lg font-semibold mb-4">Upload Images</h2>

        <input
          type="file"
          accept="image/*"
          multiple
          @change="handleFileChange"
        />

        <p v-if="uploadError" class="text-red-500 mt-2">{{ uploadError }}</p>

        <div class="flex justify-end mt-4 gap-2">
          <UButton @click="handleUpload" color="primary">Upload</UButton>
          <UButton @click="() => isDrawerOpen = false">Cancel</UButton>
        </div>
      </div>
    </div>
  </div>
</template>
