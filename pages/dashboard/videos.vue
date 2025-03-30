<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
});

const { listVideos, uploadVideos } = useSupabaseVideos();
const videos = ref([]);
const isDrawerOpen = ref(false);
const selectedFiles = ref<File[]>([]);
const uploadError = ref(null);

const fetchVideos = async () => {
  try {
    videos.value = await listVideos();
  } catch (error) {
    console.error(error);
  }
};

const handleFileChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;

  if (files && files.length > 0) {
    if (files.length > 10) {
      uploadError.value = 'You can only upload a maximum of 10 videos at a time.';
      return;
    }

    selectedFiles.value = Array.from(files);
    uploadError.value = null;
  }
};

const handleUpload = async () => {
  if (selectedFiles.value.length === 0) {
    uploadError.value = 'No files selected for upload.';
    return;
  }

  try {
    await uploadVideos(selectedFiles.value);
    await fetchVideos();
    selectedFiles.value = [];
    isDrawerOpen.value = false;
  } catch (error) {
    uploadError.value = 'Failed to upload videos. Please try again.';
  }
};

onMounted(fetchVideos);
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Videos</h1>
      <UButton color="primary" @click="isDrawerOpen = true">
        Upload Videos
      </UButton>
    </div>

    <div v-if="videos.length === 0">No Videos found!</div>
    <div v-else class="grid grid-cols-3 gap-4">
      <div v-for="video in videos" :key="video.name" class="p-4 border rounded">
        <video controls :src="video.url" class="w-full h-auto rounded"></video>
      </div>
    </div>

    <div v-if="isDrawerOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded shadow-lg w-96">
        <h2 class="text-lg font-semibold mb-4">Upload Videos</h2>
        <input type="file" accept="video/*" multiple @change="handleFileChange" />
        <p v-if="uploadError" class="text-red-500 mt-2">{{ uploadError }}</p>

        <div class="flex justify-end mt-4 gap-2">
          <UButton @click="handleUpload" color="primary">Upload</UButton>
          <UButton @click="() => isDrawerOpen = false">Cancel</UButton>
        </div>
      </div>
    </div>
  </div>
</template>
