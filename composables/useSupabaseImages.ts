import { createClient } from "@supabase/supabase-js";

const useSupabaseImages = () => {
  const config = useRuntimeConfig();

  // Get the Supabase URL and ANON key from the public runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseServiceRoleKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON key is missing from runtime config");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  const uploadImages = async (files: File[]) => {
    const uploadPromises = files.map(async (file) => {
      const { data, error } = await supabase.storage
        .from('images')
        .upload(file.name, file, { // No "images/" prefix here
          cacheControl: '3600',
          upsert: false,
        });

      if (error) throw error;
      return data;
    });

    await Promise.all(uploadPromises);
  };


  const listImages = async () => {
    const { data, error } = await supabase.storage.from('images').list('', {
      limit: 100,
      offset: 0,
    });

    if (error) throw error;

    return data.map(file => ({
      name: file.name,
      url: supabase.storage.from('images').getPublicUrl(file.name).data.publicUrl
    }));
  };


  return { uploadImages, listImages };
};

export default useSupabaseImages;
