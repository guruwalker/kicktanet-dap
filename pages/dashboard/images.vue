<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const { listImages } = useSupabaseImages();
const images = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12; // Number of images per page

const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return images.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(images.value.length / itemsPerPage)
);

const isDrawerOpen = ref(false);

const route = useRoute();
const component = ref<string>(route.query.c || null);

const fetchImages = async () => {
  if (!component.value) {
    console.error("Component is not specified in the URL.");
    return;
  }

  try {
    const response = await $fetch(`/api/media-files/images`, {
      params: { c: component.value },
      method: "GET",
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

// Handle Image Download
const downloadImage = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.target = "_blank"; // Opens in a new tab if needed
  a.click();
  URL.revokeObjectURL(a.href); // Clean up
};

// Handle Image Deletion
const confirmDelete = async (id: string) => {
  const confirmation = confirm("Are you sure you want to delete this image?");
  if (!confirmation) return;

  try {
    const response = await $fetch(`/api/media-files/delete`, {
      method: "POST",
      body: { id },
    });

    if (response.success) {
      fetchImages();
    } else {
      console.error("Failed to delete image:", response.message);
    }
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};

// Watch for changes in the `c` query parameter and refetch images
watch(() => route.query.c, (newComponent) => {
  component.value = newComponent;
  fetchImages();
});

// Initial fetch
fetchImages();
</script>

<template>
  <div class="container">
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Images</h1>
      <UButton color="primary" @click="isDrawerOpen = true"
        >Upload Images</UButton
      >
    </div>

    <!-- Images Display Section -->
    <div v-if="images.length === 0">No Images found!</div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"
    >
      <div
        v-for="image in paginatedImages"
        :key="image.file_name"
        class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-4 flex flex-col gap-2"
      >
        <!-- Image Thumbnail -->
        <img
          :src="image.public_url"
          :alt="image.file_name"
          class="w-full h-48 object-contain rounded-md"
        />

        <!-- Image Details -->
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm font-medium truncate">{{ image.file_name }}</h2>
            <p class="text-xs text-gray-500">
              Uploaded By: {{ image.uploaded_by }}
            </p>
          </div>
          <!-- Actions -->
          <div class="flex gap-2">
            <UButton
              icon="lucide-download"
              size="xs"
              @click="downloadImage(image.public_url)"
            />
            <UButton
              icon="lucide-trash"
              color="red"
              size="xs"
              @click="confirmDelete(image.id)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="flex justify-between items-center mt-4">
      <UButton :disabled="currentPage === 1" @click="currentPage--">
        Previous
      </UButton>
      <div>Page {{ currentPage }} of {{ totalPages }}</div>
      <UButton :disabled="currentPage === totalPages" @click="currentPage++">
        Next
      </UButton>
    </div>

    <!-- Image Upload Drawer -->
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
