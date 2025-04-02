import { createClient } from "@supabase/supabase-js";

const useSupabaseMe = () => {
  const config = useRuntimeConfig();

  // Get the Supabase URL and ANON key from the public runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseServiceRoleKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON key is missing from runtime config");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const uploadMe = async (files: File[], component: string) => {
    const uploadedFiles = [];

    for (const file of files) {
      const filePath = `${component}/${Date.now()}-${file.name}`;
      const { data, error } = await supabase
        .storage
        .from('me') // Make sure you have a bucket named 'me'
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error("Upload error:", error.message);
        continue; // Skip this file and move to the next
      }

      // Generate the URL for the uploaded file
      const { data: publicUrlData } = supabase
        .storage
        .from('me')
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        uploadedFiles.push({
          name: file.name,
          url: publicUrlData.publicUrl,
        });
      } else {
        console.error("Failed to retrieve public URL for:", filePath);
      }
    }

    console.log("Uploaded Me Files:", uploadedFiles); // Check what's being returned
    return uploadedFiles;
  };

  const listMeFiles = async () => {
    const { data, error } = await supabase.storage.from('me').list('', {
      limit: 100,
      offset: 0,
    });

    if (error) throw error;

    return data.map(file => ({
      name: file.name,
      url: supabase.storage.from('me').getPublicUrl(file.name).data.publicUrl
    }));
  };

  return { uploadMe, listMeFiles };
};

export default useSupabaseMe;
