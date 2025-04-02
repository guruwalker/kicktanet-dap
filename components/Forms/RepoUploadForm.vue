<script setup lang="ts">
import { ref } from "vue";

const { uploadReports } = useSupabaseReports(); // Changed to useSupabaseReports()

const toast = useToast();

const emit = defineEmits(["close"]);

const props = defineProps<{
  show: boolean;
  onClose: () => void;
  onUploadComplete: () => void;
}>();

const { createMediaFile } = useMediaFiles();

const selectedFiles = ref<File[]>([]);
const uploadError = ref<string | null>(null);
const selectedComponent = ref<string | null>(null);
const isUploading = ref(false);

const availableComponents = [
  { label: "Component 1", value: "component1" },
  { label: "Component 2", value: "component2" },
  { label: "Component 3", value: "component3" },
  { label: "Component 4", value: "component4" },
  { label: "Component 5", value: "component5" },
  { label: "Component 6", value: "component6" },
  { label: "Component 7", value: "component7" },
  { label: "Component 8", value: "component8" },
];

const handleFileChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;

  if (files && files.length > 0) {
    selectedFiles.value = Array.from(files);
    uploadError.value = null;
  }
};

const handleUpload = async () => {
  if (selectedFiles.value.length === 0) {
    uploadError.value = "No files selected for upload.";
    return;
  }

  if (!selectedComponent.value) {
    uploadError.value = "Please select a component.";
    return;
  }

  isUploading.value = true;

  try {
    const uploadedReports = await uploadReports(
      selectedFiles.value,
      selectedComponent.value
    );

    if (!Array.isArray(uploadedReports) || uploadedReports.length === 0) {
      uploadError.value = "No reports were uploaded. Please try again.";
      return;
    }

    for (const report of uploadedReports) {
      try {
        const response = await createMediaFile({
          file_name: report.name,
          bucket: "reports", // Assuming you're using a different bucket for reports
          public_url: report.url,
          component: selectedComponent.value,
          uploaded_by: null,
        });

        if (!response?.success) {
          console.error(
            "Failed to save report to media_files table:",
            response?.message
          );
          // toast.add({
          //   title: "Warning",
          //   description: `Failed to save the report to the media_files table.`,
          //   color: "yellow",
          //   id: "media-warning",
          // });
        } else {
          toast.add({
            title: "Success",
            description: "Reports uploaded and saved successfully!",
            color: "green",
            id: "media-success",
          });

          emit("close");
        }
      } catch (error) {
        console.error("Error creating media file entry:", error);
      }
    }

    selectedFiles.value = [];
    selectedComponent.value = null;

    emit("close");

    toast.add({
      title: "Success",
      description: "Reports uploaded and saved successfully!",
      color: "green",
      id: "media-success",
    });
  } catch (error) {
    console.error("Error during upload process:", error);
    uploadError.value = "Failed to upload reports. Please try again.";
  } finally {
    isUploading.value = false;
  }
};
</script>

<template>
  <UModal v-model="props.show">
    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <h2 class="text-lg font-semibold">Upload Reports</h2>
          <button
            @click="emit('close')"
            class="text-gray-500 hover:text-gray-700"
          >
            <Icon name="mdi:close" class="h-8 w-8"></Icon>
          </button>
        </div>
      </template>

      <div class="p-6 space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">Select Component:</label>
          <USelect
            v-model="selectedComponent"
            :options="availableComponents"
            placeholder="Choose a component"
            class="w-full"
          />
        </div>

        <div>
          <label class="block text-sm font-medium mb-1">Upload Files:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
            multiple
            @change="handleFileChange"
            class="w-full p-2 border rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-500 file:text-white hover:file:bg-primary-600"
          />
        </div>

        <p v-if="uploadError" class="text-red-500 text-sm">{{ uploadError }}</p>
      </div>

      <template #footer>
        <div class="flex justify-end gap-6">
          <UButton
            @click="handleUpload"
            color="primary"
            :disabled="isUploading"
          >
            {{ isUploading ? "Uploading..." : "Upload" }}
          </UButton>
          <UButton @click="emit('close')" color="gray">Cancel</UButton>
        </div>
      </template>
    </UCard>
  </UModal>
</template>
