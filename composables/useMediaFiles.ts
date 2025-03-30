import { useToast } from "#imports";

export function useMediaFiles() {
  const toast = useToast();

  const mediaFiles = ref([]);

  const fetchMediaFiles = async () => {
    try {
      const response = await $fetch<IApiResponse>("/api/media-files");
      mediaFiles.value = response.data;

      if (!response.success) {
        toast.add({
          title: "Error",
          description: response.message || "Failed to fetch media files.",
          color: "red",
        });
        return null;
      }

      return response.data;
    } catch (error) {
      console.error("Error in fetchMediaFiles:", error);
      toast.add({
        title: "Error",
        description: "Failed to fetch media files.",
        color: "red",
      });
      throw error;
    }
  };

  const createMediaFile = async (fileData: any) => {
    try {
      const response = await $fetch<IApiResponse>("/api/media-files", {
        method: "POST",
        body: fileData,
      });

      if (!response.success) {
        toast.add({
          title: "Error",
          description: response.message || "Failed to create media file.",
          color: "red",
        });
        return null;
      }

      toast.add({
        title: "Success",
        description: "Media file created successfully!",
        color: "green",
      });
      return response.data;
    } catch (error) {
      console.error("Error in createMediaFile:", error);
      toast.add({
        title: "Error",
        description: "Failed to create media file.",
        color: "red",
      });
      throw error;
    }
  };

  return {
    mediaFiles,
    fetchMediaFiles,
    createMediaFile,
  };
}
