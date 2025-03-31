<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const { listVideos } = useSupabaseVideos(); // Adjusted to videos handler
const videos = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12; // Number of videos per page

const paginatedVideos = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return videos.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(videos.value.length / itemsPerPage)
);

const isDrawerOpen = ref(false);

const route = useRoute();
const component = ref<string>(route.query.c || null);

const fetchVideos = async () => {
  if (!component.value) {
    console.error("Component is not specified in the URL.");
    return;
  }

  try {
    const response = await $fetch(`/api/media-files/videos`, {
      params: { c: component.value },
      method: "GET",
    });

    if (response.success) {
      videos.value = response.data;
    } else {
      console.error("Failed to fetch videos:", response.message);
    }
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};

onMounted(fetchVideos);

const handleUploadComplete = async () => {
  await fetchVideos();
  isDrawerOpen.value = false;
};

// Handle Video Download
const downloadVideo = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.target = "_blank"; // Opens in a new tab if needed
  a.click();
  URL.revokeObjectURL(a.href); // Clean up
};

// Handle Video Deletion
const confirmDelete = async (id: string) => {
  const confirmation = confirm("Are you sure you want to delete this video?");
  if (!confirmation) return;

  try {
    const response = await $fetch(`/api/media-files/delete`, {
      method: "POST",
      body: { id },
    });

    if (response.success) {
      fetchVideos();
    } else {
      console.error("Failed to delete video:", response.message);
    }
  } catch (error) {
    console.error("Error deleting video:", error);
  }
};

const hasClosedModal = async () => {
  isDrawerOpen.value = false;

  await fetchVideos();
};

// Watch for changes in the `c` query parameter and refetch videos
watch(
  () => route.query.c,
  (newComponent) => {
    component.value = newComponent;
    fetchVideos();
  }
);

// Initial fetch
fetchVideos();
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Videos</h1>
      <UButton color="primary" @click="isDrawerOpen = true"
        >Upload Videos</UButton
      >
    </div>

    <div v-if="videos.length === 0">No Videos found!</div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"
    >
      <div
        v-for="video in paginatedVideos"
        :key="video.file_name"
        class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-4 flex flex-col gap-2"
      >
        <video
          :src="video.public_url"
          class="w-full h-48 object-contain rounded-md"
          controls
        ></video>

        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm font-medium truncate">{{ video.file_name }}</h2>
            <p class="text-xs text-gray-500">
              Uploaded By: {{ video.uploaded_by }}
            </p>
          </div>
          <div class="flex gap-2">
            <UButton
              icon="lucide-download"
              size="xs"
              @click="downloadVideo(video.public_url, video.file_name)"
            />
            <UButton
              icon="lucide-trash"
              color="red"
              size="xs"
              @click="confirmDelete(video.id)"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center mt-4">
      <UButton :disabled="currentPage === 1" @click="currentPage--">
        Previous
      </UButton>
      <div>Page {{ currentPage }} of {{ totalPages }}</div>
      <UButton :disabled="currentPage === totalPages" @click="currentPage++">
        Next
      </UButton>
    </div>
  </div>

  <DashboardVideoUploadForm
    :show="isDrawerOpen"
    @close="hasClosedModal"
    @onUploadComplete="handleUploadComplete"
  />
</template>
