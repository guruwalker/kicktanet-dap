<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const { listDocuments } = useSupabaseDocuments();
const documents = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12;

const paginatedDocuments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return documents.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(documents.value.length / itemsPerPage)
);

const isDrawerOpen = ref(false);

const route = useRoute();
const component = ref<string>(route.query.c || null);

const fetchDocuments = async () => {
  if (!component.value) {
    console.error("Component is not specified in the URL.");
    return;
  }

  try {
    const response = await $fetch(`/api/media-files/documents`, {
      params: { c: component.value },
      method: "GET",
    });

    if (response.success) {
      documents.value = response.data;
    } else {
      console.error("Failed to fetch documents:", response.message);
    }
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

onMounted(fetchDocuments);

const handleUploadComplete = async () => {
  await fetchDocuments();
  isDrawerOpen.value = false;
};

const downloadDocument = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.target = "_blank";
  a.click();
  URL.revokeObjectURL(a.href);
};

const confirmDelete = async (id: string) => {
  const confirmation = confirm("Are you sure you want to delete this document?");
  if (!confirmation) return;

  try {
    const response = await $fetch(`/api/media-files/delete`, {
      method: "POST",
      body: { id },
    });

    if (response.success) {
      fetchDocuments();
    } else {
      console.error("Failed to delete document:", response.message);
    }
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

const hasClosedModal = async () => {
  isDrawerOpen.value = false;
  await fetchDocuments();
};

watch(
  () => route.query.c,
  (newComponent) => {
    component.value = newComponent;
    fetchDocuments();
  }
);

fetchDocuments();
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Documents</h1>
      <UButton color="primary" @click="isDrawerOpen = true">Upload Documents</UButton>
    </div>

    <div v-if="documents.length === 0">No Documents found!</div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"
    >
      <div
        v-for="document in paginatedDocuments"
        :key="document.file_name"
        class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-4 flex flex-col gap-2"
      >
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm font-medium truncate">{{ document.file_name }}</h2>
            <p class="text-xs text-gray-500">
              Uploaded By: {{ document.uploaded_by }}
            </p>
          </div>
          <div class="flex gap-2">
            <UButton
              icon="lucide-download"
              size="xs"
              @click="downloadDocument(document.public_url, document.file_name)"
            />
            <UButton
              icon="lucide-trash"
              color="red"
              size="xs"
              @click="confirmDelete(document.id)"
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

  <DashboardDocumentUploadForm
    :show="isDrawerOpen"
    @close="hasClosedModal"
    @onUploadComplete="handleUploadComplete"
  />
</template>
