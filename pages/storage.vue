<script setup lang="ts">
useSeoMeta({
  title: "Images Storage",
  ogTitle: "Images Storage",
});

definePageMeta({
  layout: 'dashboard'
})

const toast = useToast();
const { storageFiles, getAllFiles, uploadFile, deleteFile } = useStorage();

const isDeleteModalOpen = ref(false);

const selectedImageName = ref<any>(null);

const fileList = ref<any>([]);
const loadingState = reactive({
  get: false,
  upload: false,
  remove: false,
});

const columns = ref([
  { key: "name", label: "File Name" },
  { key: "metadata.size", label: "File Size" },
  { key: "metadata.mimetype", label: "MIME Type" },
  { key: "updated_at", label: "Last Updated" },
]);

const dataDetail = reactive<{
  name: string | null;
  size: number;
  updated_at: string | null;
  image: string | null;
  mimetype: string | null;
}>({
  name: null,
  size: 0,
  updated_at: null,
  image: null,
  mimetype: null,
});

// Fetch files on mount
onMounted(async () => {
  loadingState.get = true;
  await getAllFiles();
  fileList.value = storageFiles.value;
  loadingState.get = false;
});

// Select a file for upload
const selectFile = () => {
  document.getElementById("input-file-upload")?.click();
};

// Validate file before upload
const isFileValidateError = (file: File) => {
  // if ((fileList.value?.length ?? 0) >= 5) {
  //   toast.add({
  //     color: "red",
  //     title: "For demo purposes, upload is limited to 5 files.",
  //   });
  //   return true;
  // }

  // if (!file.type.startsWith("image/")) {
  //   toast.add({ color: "red", title: "Please select an image file." });
  //   return true;
  // }

  if (file.size > 1024 * 1024) {
    toast.add({ color: "red", title: "File size must be 1MB or less." });
    return true;
  }

  return false;
};

// Upload a file
const upload = async (event: any) => {
  try {
    const file = event.target.files[0];

    if (isFileValidateError(file)) return;

    loadingState.upload = true;
    const uploadedFile = await uploadFile(file);
    if (uploadedFile) {
      await getAllFiles();
      fileList.value = storageFiles.value;
    }
  } catch (error) {
    toast.add({ color: "red", title: "Upload failed." });
  } finally {
    loadingState.upload = false;
  }
};

// View file details
const seeDetail = async (item: FileObject) => {
  dataDetail.name = item.name;
  dataDetail.size = item.metadata?.size || 0;
  dataDetail.mimetype = item.metadata?.mimetype || "Unknown";
  dataDetail.updated_at = item.updated_at;
  dataDetail.image = item.url;
};

// Open the delete confirmation modal
const confirmDelete = (id: any) => {
  selectedImageName.value = id;
  isDeleteModalOpen.value = true;
};

// Handle image deletion
const handleDelete = async () => {
  if (!selectedImageName.value) return;

  loadingState.remove = true;
  await deleteFile(selectedImageName.value);
  dataDetail.name = null;
  dataDetail.size = 0;
  dataDetail.updated_at = null;
  dataDetail.image = null;
  dataDetail.mimetype = null;

  await getAllFiles();
  fileList.value = storageFiles.value;
  loadingState.remove = false;
  isDeleteModalOpen.value = false;
};

// Convert file size for display
const convertFileSize = (fileSize: number) => {
  if (fileSize < 1024) return fileSize + " bytes";
  if (fileSize < 1024 * 1024) return (fileSize / 1024).toFixed(2) + " KB";
  return (fileSize / (1024 * 1024)).toFixed(2) + " MB";
};

const isImage = (item: { name: string; metadata: Record<string, any> }) => {
  const mimeType = item.metadata?.mime_type || item.metadata?.type;
  // if (mimeType && mimeType.startsWith("image")) {
  //   return true;
  // }
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp"];
  const fileExtension = item.name
    .slice(item.name.lastIndexOf("."))
    .toLowerCase();
  return imageExtensions.includes(fileExtension);
};
</script>

<template>
  <div class="w-full mx-auto my-16 space-y-[30px] max-w-7xl">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Storage</h1>
      <div>
        <UButton
          class="h-10"
          color="white"
          :disabled="loadingState.upload"
          :loading="loadingState.upload"
          @click="selectFile"
        >
          + Upload new file
        </UButton>
        <input
          type="file"
          accept="image/*"
          class="hidden"
          id="input-file-upload"
          @change="upload"
        />
      </div>
    </div>

    <div v-if="!loadingState.get && fileList.length > 0">
      <UCard>
        <SharedDatagrid :columns="columns" :rows="fileList">
          <template #actions="{ row }">
            <div class="flex space-x-2">
              <UButton
                icon="i-heroicons-trash"
                color="red"
                size="xs"
                @click="confirmDelete(row.name)"
              />
            </div>
          </template>
        </SharedDatagrid>
      </UCard>
    </div>

    <div
      v-if="!loadingState.get && fileList.length === 0"
      class="relative flex justify-center items-center h-[300px]"
    >
      <div class="flex flex-col justify-center items-center gap-2">
        <Icon name="mdi:view-dashboard" class="h-12 w-12"></Icon>
        <h2 class="text-2xl font-bold">
          Storage is empty,
          <span class="underline cursor-pointer" @click="selectFile">add</span>
          new file
        </h2>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <SharedModal
      :show="isDeleteModalOpen"
      message="Are you sure you want to delete this image?"
      @confirm="handleDelete"
      @close="isDeleteModalOpen = false"
    />
  </div>
</template>
