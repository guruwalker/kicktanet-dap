import { createClient } from "@supabase/supabase-js";

const useSupabaseContent = () => {
  const config = useRuntimeConfig();

  // Get the Supabase URL and ANON key from the public runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseServiceRoleKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON key is missing from runtime config");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const uploadContent = async (files: File[], component: string) => {
    const uploadedContent = [];

    for (const file of files) {
      const filePath = `${component}/${Date.now()}-${file.name}`;
      const { data, error } = await supabase
        .storage
        .from('content') // Make sure you have a bucket named 'content'
        .upload(filePath, file);

      if (error) {
        console.error("Upload error:", error.message);
        continue; // Skip this file and move to the next
      }

      // Generate the URL for the uploaded file
      const { data: publicUrlData } = supabase
        .storage
        .from('content')
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        uploadedContent.push({
          name: file.name,
          url: publicUrlData.publicUrl,
        });
      } else {
        console.error("Failed to retrieve public URL for:", filePath);
      }
    }

    console.log("Uploaded Content:", uploadedContent); // Check what's being returned
    return uploadedContent;
  };

  const listContent = async () => {
    const { data, error } = await supabase.storage.from('content').list('', {
      limit: 100,
      offset: 0,
    });

    if (error) throw error;

    return data.map(file => ({
      name: file.name,
      url: supabase.storage.from('content').getPublicUrl(file.name).data.publicUrl
    }));
  };

  return { uploadContent, listContent };
};

export default useSupabaseContent;
