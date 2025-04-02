import { S3Client, ListObjectsV2Command, PutObjectCommand } from "@aws-sdk/client-s3";

const runtimeConfig = useRuntimeConfig()

const REGION = runtimeConfig.public.DO_SPACES_REGION
const SPACE_NAME = runtimeConfig.public.DO_SPACES_BUCKET
const ACCESS_KEY = runtimeConfig.public.DO_SPACES_KEY
const SECRET_KEY = runtimeConfig.public.DO_SPACES_SECRET
const ENDPOINT = `https://${REGION}.digitaloceanspaces.com`;

const s3 = new S3Client({
  region: REGION,
  endpoint: ENDPOINT,
  credentials: {
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY,
  },
});

export const useImagesStorage = () => {

  const listImages = async () => {
    const params = { Bucket: SPACE_NAME, Prefix: "images/" };
    const command = new ListObjectsV2Command(params);

    try {
      const response = await s3.send(command);
      return response.Contents?.map(file => file.Key) || [];
    } catch (error) {
      console.error("Error listing images:", error);
      return [];
    }
  };

  const uploadImage = async (file: File) => {
    const params = {
      Bucket: SPACE_NAME,
      Key: `images/${file.name}`,
      Body: file,
      ACL: "public-read",
      ContentType: file.type,
    };

    try {
      const command = new PutObjectCommand(params);
      await s3.send(command);
      console.log("Image uploaded successfully.");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return { listImages, uploadImage };
};
