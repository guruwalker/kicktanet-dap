import { ref } from 'vue';
import { useRuntimeConfig, useToast } from '#imports';
import { S3Client, ListObjectsV2Command, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

export function useStorage() {
  const toast = useToast();
  const config = useRuntimeConfig();

  // Read the DigitalOcean Spaces config from runtime config (or your .env file)
  const spacesEndpoint = config.public.DO_SPACES_ENDPOINT; // e.g. "nyc3.digitaloceanspaces.com"
  const accessKeyId = config.public.DO_SPACES_KEY;
  const secretAccessKey = config.public.DO_SPACES_SECRET;
  const bucketName = config.public.DO_SPACES_BUCKET;
  const region = config.public.DO_SPACES_REGION || "us-east-1";

  if (!spacesEndpoint || !accessKeyId || !secretAccessKey || !bucketName) {
    throw new Error("Missing DigitalOcean Spaces configuration in runtime config");
  }

  // Create an S3 client pointing to your DigitalOcean Space
  const s3Client = new S3Client({
    endpoint: `https://${spacesEndpoint}`,
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  const storageFiles = ref([]);

  // List all files (objects) in your bucket (or within a given prefix)
  const getAllFiles = async (prefix = "") => {
    try {
      const command = new ListObjectsV2Command({
        Bucket: bucketName,
        Prefix: prefix, // e.g. "images/" or leave empty to list all
      });
      const response = await s3Client.send(command);
      storageFiles.value = (response.Contents || []).map(file => ({
        name: file.Key,
        // Construct a public URL. (Assuming your Space is public.)
        url: `https://${bucketName}.${spacesEndpoint}/${file.Key}`,
        lastModified: file.LastModified,
        size: file.Size,
      }));
      return storageFiles.value;
    } catch (error) {
      console.error("Error in getAllFiles:", error);
      toast.add({
        title: "Error",
        description: "Failed to fetch storage files.",
        color: "red",
      });
    }
  };

  // Upload a file to your Space
  const uploadFile = async (file: File) => {
    try {
      // Create a unique file name by prepending a timestamp
      const filePath = `${Date.now()}-${file.name}`;
      // Convert the File to an ArrayBuffer (or you could use a stream)
      const fileContent = await file.arrayBuffer();

      const command = new PutObjectCommand({
        Bucket: bucketName,
        Key: filePath,
        Body: fileContent,
        ACL: 'public-read', // Ensure the file is publicly readable
        ContentType: file.type,
      });
      await s3Client.send(command);

      const fileUrl = `https://${bucketName}.${spacesEndpoint}/${filePath}`;
      toast.add({
        title: "Success",
        description: "File uploaded successfully!",
        color: "green",
      });
      return { name: filePath, url: fileUrl };
    } catch (error) {
      console.error("Error in uploadFile:", error);
      toast.add({
        title: "Error",
        description: "Failed to upload file.",
        color: "red",
      });
      return null;
    }
  };

  // Delete a file from your Space
  const deleteFile = async (fileName: string) => {
    try {
      const command = new DeleteObjectCommand({
        Bucket: bucketName,
        Key: fileName,
      });
      await s3Client.send(command);
      toast.add({
        title: "Success",
        description: "File deleted successfully!",
        color: "green",
      });
      // Refresh the list after deletion
      await getAllFiles();
    } catch (error) {
      console.error("Error in deleteFile:", error);
      toast.add({
        title: "Error",
        description: "Failed to delete file.",
        color: "red",
      });
    }
  };

  return {
    storageFiles,
    getAllFiles,
    uploadFile,
    deleteFile,
  };
}
