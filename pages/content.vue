<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const { listContent } = useSupabaseContent();
const contentItems = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12;

const paginatedContent = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return contentItems.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(contentItems.value.length / itemsPerPage)
);

const isDrawerOpen = ref(false);

const route = useRoute();
const component = ref<string>(route.query.c || null);

const fetchContent = async () => {
  if (!component.value) {
    console.error("Component is not specified in the URL.");
    return;
  }

  try {
    const response = await $fetch(`/api/media-files/content`, {
      params: { c: component.value },
      method: "GET",
    });

    if (response.success) {
      contentItems.value = response.data;
    } else {
      console.error("Failed to fetch content:", response.message);
    }
  } catch (error) {
    console.error("Error fetching content:", error);
  }
};

onMounted(fetchContent);

const handleUploadComplete = async () => {
  await fetchContent();
  isDrawerOpen.value = false;
};

const downloadContent = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.target = "_blank";
  a.click();
  URL.revokeObjectURL(a.href);
};

const confirmDelete = async (id: string) => {
  const confirmation = confirm("Are you sure you want to delete this content?");
  if (!confirmation) return;

  try {
    const response = await $fetch(`/api/media-files/delete`, {
      method: "POST",
      body: { id },
    });

    if (response.success) {
      fetchContent();
    } else {
      console.error("Failed to delete content:", response.message);
    }
  } catch (error) {
    console.error("Error deleting content:", error);
  }
};

const hasClosedModal = async () => {
  isDrawerOpen.value = false;
  await fetchContent();
};

watch(
  () => route.query.c,
  (newComponent) => {
    component.value = newComponent;
    fetchContent();
  }
);

fetchContent();
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Content</h1>
      <UButton color="primary" @click="isDrawerOpen = true">Upload Content</UButton>
    </div>

    <div v-if="contentItems.length === 0">No Content found!</div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"
    >
      <div
        v-for="content in paginatedContent"
        :key="content.file_name"
        class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-4 flex flex-col gap-2"
      >
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm font-medium truncate">{{ content.file_name }}</h2>
            <p class="text-xs text-gray-500">
              Uploaded By: {{ content.uploaded_by }}
            </p>
          </div>
          <div class="flex gap-2">
            <UButton
              icon="lucide-download"
              size="xs"
              @click="downloadContent(content.public_url, content.file_name)"
            />
            <UButton
              icon="lucide-trash"
              color="red"
              size="xs"
              @click="confirmDelete(content.id)"
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

  <DashboardContentUploadForm
    :show="isDrawerOpen"
    @close="hasClosedModal"
    @onUploadComplete="handleUploadComplete"
  />
</template>
