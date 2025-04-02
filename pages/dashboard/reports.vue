<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const { listReports } = useSupabaseReports();
const reports = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12;

const paginatedReports = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return reports.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(reports.value.length / itemsPerPage)
);

const isDrawerOpen = ref(false);

const route = useRoute();
const component = ref<string>(route.query.c || null);

const fetchReports = async () => {
  if (!component.value) {
    console.error("Component is not specified in the URL.");
    return;
  }

  try {
    const response = await $fetch(`/api/media-files/reports`, {
      params: { c: component.value },
      method: "GET",
    });

    if (response.success) {
      reports.value = response.data;
    } else {
      console.error("Failed to fetch reports:", response.message);
    }
  } catch (error) {
    console.error("Error fetching reports:", error);
  }
};

onMounted(fetchReports);

const handleUploadComplete = async () => {
  await fetchReports();
  isDrawerOpen.value = false;
};

const downloadReport = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.target = "_blank";
  a.click();
  URL.revokeObjectURL(a.href);
};

const confirmDelete = async (id: string) => {
  const confirmation = confirm("Are you sure you want to delete this report?");
  if (!confirmation) return;

  try {
    const response = await $fetch(`/api/media-files/delete`, {
      method: "POST",
      body: { id },
    });

    if (response.success) {
      fetchReports();
    } else {
      console.error("Failed to delete report:", response.message);
    }
  } catch (error) {
    console.error("Error deleting report:", error);
  }
};

const hasClosedModal = async () => {
  isDrawerOpen.value = false;
  await fetchReports();
};

watch(
  () => route.query.c,
  (newComponent) => {
    component.value = newComponent;
    fetchReports();
  }
);

fetchReports();
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Reports</h1>
      <UButton color="primary" @click="isDrawerOpen = true">Upload Reports</UButton>
    </div>

    <div v-if="reports.length === 0">No Reports found!</div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"
    >
      <div
        v-for="report in paginatedReports"
        :key="report.file_name"
        class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-4 flex flex-col gap-2"
      >
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm font-medium truncate">{{ report.file_name }}</h2>
            <p class="text-xs text-gray-500">
              Uploaded By: {{ report.uploaded_by }}
            </p>
          </div>
          <div class="flex gap-2">
            <UButton
              icon="lucide-download"
              size="xs"
              @click="downloadReport(report.public_url, report.file_name)"
            />
            <UButton
              icon="lucide-trash"
              color="red"
              size="xs"
              @click="confirmDelete(report.id)"
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

  <DashboardRepoUploadForm
    :show="isDrawerOpen"
    @close="hasClosedModal"
    @onUploadComplete="handleUploadComplete"
  />
</template>
