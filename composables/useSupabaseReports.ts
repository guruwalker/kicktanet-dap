import { createClient } from "@supabase/supabase-js";

const useSupabaseReports = () => {
  const config = useRuntimeConfig();

  // Get the Supabase URL and ANON key from the public runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseServiceRoleKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON key is missing from runtime config");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const uploadReports = async (files: File[], component: string) => {
    const uploadedReports = [];

    // Accepted document formats
    const acceptedFormats = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx'];

    for (const file of files) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();

      // Check if the file is of an accepted document format
      if (!fileExtension || !acceptedFormats.includes(`.${fileExtension}`)) {
        console.error(`Invalid file format: ${file.name}`);
        continue;
      }

      const filePath = `${component}/${Date.now()}-${file.name}`;
      const { data, error } = await supabase
        .storage
        .from('reports') // Make sure you have a bucket named 'reports'
        .upload(filePath, file);

      if (error) {
        console.error("Upload error:", error.message);
        continue; // Skip this file and move to the next
      }

      // Generate the URL for the uploaded file
      const { data: publicUrlData } = supabase
        .storage
        .from('reports')
        .getPublicUrl(filePath);

      if (publicUrlData?.publicUrl) {
        uploadedReports.push({
          name: file.name,
          url: publicUrlData.publicUrl,
        });
      } else {
        console.error("Failed to retrieve public URL for:", filePath);
      }
    }

    console.log("Uploaded Reports:", uploadedReports); // Check what's being returned
    return uploadedReports;
  };

  const listReports = async () => {
    const { data, error } = await supabase.storage.from('reports').list('', {
      limit: 100,
      offset: 0,
    });

    if (error) throw error;

    return data.map(file => ({
      name: file.name,
      url: supabase.storage.from('reports').getPublicUrl(file.name).data.publicUrl
    }));
  };

  return { uploadReports, listReports };
};

export default useSupabaseReports;
