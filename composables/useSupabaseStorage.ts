import { createClient } from "@supabase/supabase-js";

const useSupabaseStorage = () => {
  const config = useRuntimeConfig();

  // Get the Supabase URL and ANON key from the public runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseServiceRoleKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON key is missing from runtime config");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const uploadFile = async (bucketName: string, file: File) => {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(file.name, file, {
        cacheControl: '3600',
        upsert: true
      });

    if (error) throw error;
    return data?.path;
  };

  const listFiles = async (bucketName: string) => {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .list('', { limit: 100 });

    if (error) throw error;
    return data;
  };

  const getFileUrl = (bucketName: string, filePath: string) => {
    return supabase.storage.from(bucketName).getPublicUrl(filePath).data?.publicUrl;
  };

  return { uploadFile, listFiles, getFileUrl };
};

export default useSupabaseStorage;
