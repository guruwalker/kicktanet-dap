import { createClient } from "@supabase/supabase-js";

const useSupabaseVideos = () => {
  const config = useRuntimeConfig();

  // Get the Supabase URL and ANON key from the public runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseServiceRoleKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON key is missing from runtime config");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const uploadVideos = async (files: File[], component: string) => {
    const uploadedVideos = [];

    for (const file of files) {
      const filePath = `${component}/${Date.now()}-${file.name}`;
      const { data, error } = await supabase
        .storage
        .from('videos') // Make sure you have a bucket named 'videos'
        .upload(filePath, file);

      if (error) {
        console.error("Upload error:", error.message);
        continue; // Skip this file and move to the next
      }

      // Generate the URL for the uploaded file
      const { data: publicUrlData } = supabase
        .storage
        .from('videos')
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        uploadedVideos.push({
          name: file.name,
          url: publicUrlData.publicUrl,
        });
      } else {
        console.error("Failed to retrieve public URL for:", filePath);
      }
    }

    console.log("Uploaded Videos:", uploadedVideos); // Check what's being returned
    return uploadedVideos;
  };

  const listVideos = async () => {
    const { data, error } = await supabase.storage.from('videos').list('', {
      limit: 100,
      offset: 0,
    });

    if (error) throw error;

    return data.map(file => ({
      name: file.name,
      url: supabase.storage.from('videos').getPublicUrl(file.name).data.publicUrl
    }));
  };

  return { uploadVideos, listVideos };
};

export default useSupabaseVideos;
