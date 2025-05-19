<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});

const { listImpactAssessments } = useSupabaseImpactAssessment();
const impactAssessments = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12;

const paginatedAssessments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return impactAssessments.value.slice(start, end);
});

const totalPages = computed(() =>
  Math.ceil(impactAssessments.value.length / itemsPerPage)
);

const isDrawerOpen = ref(false);

const route = useRoute();
const component = ref<string>(route.query.c || null);

const fetchImpactAssessments = async () => {
  if (!component.value) {
    console.error("Component is not specified in the URL.");
    return;
  }

  try {
    const response = await $fetch(`/api/media-files/impact-assessment`, {
      params: { c: component.value },
      method: "GET",
    });

    if (response.success) {
      impactAssessments.value = response.data;
    } else {
      console.error("Failed to fetch impact assessments:", response.message);
    }
  } catch (error) {
    console.error("Error fetching impact assessments:", error);
  }
};

onMounted(fetchImpactAssessments);

const handleUploadComplete = async () => {
  await fetchImpactAssessments();
  isDrawerOpen.value = false;
};

const downloadAssessment = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.target = "_blank";
  a.click();
  URL.revokeObjectURL(a.href);
};

const confirmDelete = async (id: string) => {
  const confirmation = confirm("Are you sure you want to delete this impact assessment?");
  if (!confirmation) return;

  try {
    const response = await $fetch(`/api/media-files/delete`, {
      method: "POST",
      body: { id },
    });

    if (response.success) {
      fetchImpactAssessments();
    } else {
      console.error("Failed to delete impact assessment:", response.message);
    }
  } catch (error) {
    console.error("Error deleting impact assessment:", error);
  }
};

const hasClosedModal = async () => {
  isDrawerOpen.value = false;
  await fetchImpactAssessments();
};

watch(
  () => route.query.c,
  (newComponent) => {
    component.value = newComponent;
    fetchImpactAssessments();
  }
);

fetchImpactAssessments();
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Impact Assessments</h1>
      <UButton color="primary" @click="isDrawerOpen = true">Upload Impact Assessment</UButton>
    </div>

    <div v-if="impactAssessments.length === 0">No Impact Assessments found!</div>

    <div
      v-else
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-6"
    >
      <div
        v-for="assessment in paginatedAssessments"
        :key="assessment.file_name"
        class="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-4 flex flex-col gap-2"
      >
        <div class="flex justify-between items-center">
          <div>
            <h2 class="text-sm font-medium truncate">{{ assessment.file_name }}</h2>
            <p class="text-xs text-gray-500">
              Uploaded By: {{ assessment.uploaded_by }}
            </p>
          </div>
          <div class="flex gap-2">
            <UButton
              icon="lucide-download"
              size="xs"
              @click="downloadAssessment(assessment.public_url, assessment.file_name)"
            />
            <UButton
              icon="lucide-trash"
              color="red"
              size="xs"
              @click="confirmDelete(assessment.id)"
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

  <DashboardImpactAssessmentUploadForm
    :show="isDrawerOpen"
    @close="hasClosedModal"
    @onUploadComplete="handleUploadComplete"
  />
</template>
