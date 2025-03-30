import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';

export default defineEventHandler(async (event) => {
  const spacesEndpoint = process.env.DO_SPACES_ENDPOINT;
  const accessKeyId = process.env.DO_SPACES_KEY;
  const secretAccessKey = process.env.DO_SPACES_SECRET;
  const bucketName = process.env.DO_SPACES_BUCKET;
  const region = process.env.DO_SPACES_REGION || "us-east-1";

  if (!spacesEndpoint || !accessKeyId || !secretAccessKey || !bucketName) {
    throw createError({
      statusCode: 500,
      message: "Missing DigitalOcean Spaces configuration.",
    });
  }

  const s3Client = new S3Client({
    endpoint: `https://${spacesEndpoint}`,
    region,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });

  try {
    const command = new ListObjectsV2Command({
      Bucket: bucketName,
      Prefix: "", // Adjust if you want to list only a folder
    });
    const response = await s3Client.send(command);
    const files = (response.Contents || []).map(file => ({
      name: file.Key,
      url: `https://${bucketName}.${spacesEndpoint}/${file.Key}`,
    }));

    return { success: true, files };
  } catch (err: any) {
    console.error("Error fetching storage files:", err);
    return { success: false, message: "Internal Server Error" };
  }
});
