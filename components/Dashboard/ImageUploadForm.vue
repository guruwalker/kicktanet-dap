<script setup lang="ts">
import { ref } from 'vue';

const { uploadImages } = useSupabaseImages();

const { createMediaFile } = useMediaFiles()

const selectedFiles = ref<File[]>([]);
const uploadError = ref<string | null>(null);
const selectedComponent = ref<string | null>(null);
const isUploading = ref(false);

const availableComponents = [
  { label: 'Component 1', value: 'component1' },
  { label: 'Component 2', value: 'component2' },
  { label: 'Component 3', value: 'component3' },
  { label: 'Component 4', value: 'component4' },
  { label: 'Component 5', value: 'component5' },
  { label: 'Component 6', value: 'component6' },
  { label: 'Component 7', value: 'component7' },
  { label: 'Component 8', value: 'component8' },
];

const handleFileChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files;

  if (files && files.length > 0) {
    if (files.length > 10) {
      uploadError.value = 'You can only upload a maximum of 10 images at a time.';
      return;
    }

    selectedFiles.value = Array.from(files);
    uploadError.value = null;
  }
};

const handleUpload = async () => {
  if (selectedFiles.value.length === 0) {
    uploadError.value = 'No files selected for upload.';
    return;
  }

  if (!selectedComponent.value) {
    uploadError.value = 'Please select a component.';
    return;
  }

  isUploading.value = true;

  try {
    // Upload images to Supabase and get their URLs
    const uploadedImages = await uploadImages(selectedFiles.value, selectedComponent.value);

    if (!Array.isArray(uploadedImages) || uploadedImages.length === 0) {
      uploadError.value = 'No images were uploaded. Please try again.';
      return;
    }

    // Make entries in the media_files table for each uploaded image
    for (const image of uploadedImages) {
      try {
        const response = await createMediaFile({
          file_name: image.name,
          bucket: 'images',
          public_url: image.url,
          component: selectedComponent.value,
          uploaded_by: null,
        });

        if (!response?.success) {
          console.error("Failed to save image to media_files table:", response?.message);
          toast.add({
            title: "Warning",
            description: `Failed to save ${image.name} to the media_files table.`,
            color: "yellow",
          });
        }
      } catch (error) {
        console.error("Error creating media file entry:", error);
      }
    }

    selectedFiles.value = [];
    selectedComponent.value = null;

    toast.add({
      title: "Success",
      description: "Images uploaded and saved successfully!",
      color: "green",
    });
  } catch (error) {
    console.error("Error during upload process:", error);
    uploadError.value = 'Failed to upload images. Please try again.';
  } finally {
    isUploading.value = false;
  }
};


defineProps<{
  onClose: () => void;
  onUploadComplete: () => void;
}>();
</script>

<template>
  <div class="bg-white p-6 rounded shadow-lg w-96">
    <h2 class="text-lg font-semibold mb-4">Upload Images</h2>

    <label class="block mb-2">Select Component:</label>
    <select v-model="selectedComponent" class="mb-4 p-2 border rounded w-full">
      <option v-for="component in availableComponents" :key="component.value" :value="component.value">
        {{ component.label }}
      </option>
    </select>

    <input
      type="file"
      accept="image/*"
      multiple
      @change="handleFileChange"
      class="mb-4"
    />

    <p v-if="uploadError" class="text-red-500 mt-2">{{ uploadError }}</p>

    <div class="flex justify-end mt-4 gap-2">
      <UButton @click="handleUpload" color="primary" :disabled="isUploading">
        {{ isUploading ? 'Uploading...' : 'Upload' }}
      </UButton>
      <UButton @click="$props.onClose">Cancel</UButton>
    </div>
  </div>
</template>
