import { createClient } from "@supabase/supabase-js";

const useSupabaseImpactAssessment = () => {
  const config = useRuntimeConfig();

  // Get the Supabase URL and ANON key from the public runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseServiceRoleKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON key is missing from runtime config");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const uploadImpactAssessment = async (files: File[], component: string) => {
    const uploadedFiles = [];

    for (const file of files) {
      const filePath = `${component}/${Date.now()}-${file.name}`;
      const { data, error } = await supabase
        .storage
        .from('impact-assessment') // Make sure you have a bucket named 'impact-assessment'
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
        .from('impact-assessment')
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

    console.log("Uploaded Impact Assessment Files:", uploadedFiles); // Check what's being returned
    return uploadedFiles;
  };

  const listImpactAssessments = async () => {
    const { data, error } = await supabase.storage.from('impact-assessment').list('', {
      limit: 100,
      offset: 0,
    });

    if (error) throw error;

    return data.map(file => ({
      name: file.name,
      url: supabase.storage.from('impact-assessment').getPublicUrl(file.name).data.publicUrl
    }));
  };

  return { uploadImpactAssessment, listImpactAssessments };
};

export default useSupabaseImpactAssessment;
