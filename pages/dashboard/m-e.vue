<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const { listMeUploads } = useSupabaseMe();
const meUploads = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12;

const paginatedMeUploads = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return meUploads.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(meUploads.value.length / itemsPerPage)
);

const isDrawerOpen = ref(false);

const route = useRoute();
const component = ref<string>(route.query.c || null);

const fetchMeUploads = async () => {
  if (!component.value) {
    console.error("Component is not specified in the URL.");
    return;
  }

  try {
    const response = await $fetch(`/api/media-files/me-uploads`, {
      params: { c: component.value },
      method: "GET",
    });

    if (response.success) {
      meUploads.value = response.data;
    } else {
      console.error("Failed to fetch 'Me' uploads:", response.message);
    }
  } catch (error) {
    console.error("Error fetching 'Me' uploads:", error);
  }
};

onMounted(fetchMeUploads);

const handleUploadComplete = async () => {
  await fetchMeUploads();
  isDrawerOpen.value = false;
};

const downloadMeUpload = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.target = "_blank";
  a.click();
  URL.revokeObjectURL(a.href);
};

const confirmDeleteMeUpload = async (id: string) => {
  const confirmation = confirm("Are you sure you want to delete this upload?");
  if (!confirmation) return;

  try {
    const response = await $fetch(`/api/media-files/delete`, {
      method: "POST",
      body: { id },
    });

    if (response.success) {
      fetchMeUploads();
    } else {
      console.error("Failed to delete 'Me' upload:", response.message);
    }
  } catch (error) {
    console.error("Error deleting 'Me' upload:", error);
  }
};

const hasClosedModal = async () => {
  isDrawerOpen.value = false;
  await fetchMeUploads();
};

watch(
  () => route.query.c,
  (newComponent) => {
    component.value = newComponent;
    fetchMeUploads();
  }
);

fetchMeUploads();
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">M&E</h1>
      <UButton color="primary" @click="isDrawerOpen = true">Upload File</UButton>
    </div>

    <div v-if="meUploads.length === 0">No uploads found!</div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"
    >
      <div
        v-for="upload in paginatedMeUploads"
        :key="upload.file_name"
        class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-4 flex flex-col gap-2"
      >
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm font-medium truncate">{{ upload.file_name }}</h2>
            <p class="text-xs text-gray-500">
              Uploaded By: {{ upload.uploaded_by }}
            </p>
          </div>
          <div class="flex gap-2">
            <UButton
              icon="lucide-download"
              size="xs"
              @click="downloadMeUpload(upload.public_url, upload.file_name)"
            />
            <UButton
              icon="lucide-trash"
              color="red"
              size="xs"
              @click="confirmDeleteMeUpload(upload.id)"
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

  <DashboardMEUploadForm
    :show="isDrawerOpen"
    @close="hasClosedModal"
    @onUploadComplete="handleUploadComplete"
  />
</template>
