<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
});

const { listDocuments, uploadDocuments } = useSupabaseDocuments();
const documents = ref([]);
const isDrawerOpen = ref(false);
const selectedFiles = ref<File[]>([]);
const uploadError = ref(null);

const fetchDocuments = async () => {
  try {
    documents.value = await listDocuments();
  } catch (error) {
    console.error(error);
  }
};

const handleUpload = async () => {
  if (selectedFiles.value.length === 0) {
    uploadError.value = 'No files selected for upload.';
    return;
  }

  try {
    await uploadDocuments(selectedFiles.value);
    await fetchDocuments();
    selectedFiles.value = [];
    isDrawerOpen.value = false;
  } catch (error) {
    uploadError.value = 'Failed to upload documents. Please try again.';
  }
};

onMounted(fetchDocuments);
</script>

<template>
  <div class="container">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Documents</h1>
      <UButton color="primary" @click="isDrawerOpen = true">
        Upload Documents
      </UButton>
    </div>

    <div v-if="documents.length === 0">No Documents found!</div>
    <div v-else class="grid grid-cols-3 gap-4">
      <div v-for="document in documents" :key="document.name" class="p-4 border rounded">
        <a :href="document.url" target="_blank">{{ document.name }}</a>
      </div>
    </div>
  </div>
</template>
