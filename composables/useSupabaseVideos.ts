import { createClient } from "@supabase/supabase-js";

export default function useSupabaseVideos() {
  const config = useRuntimeConfig();

  // Get the Supabase URL and ANON key from the public runtime config
  const supabaseUrl = config.public.supabaseUrl;
  const supabaseAnonKey = config.public.supabaseServiceRoleKey;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or ANON key is missing from runtime config");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

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

  const uploadVideos = async (files: File[]) => {
    const uploadPromises = files.map(async (file) => {
      const { data, error } = await supabase.storage
        .from('videos')
        .upload(file.name, file, { cacheControl: '3600', upsert: false });

      if (error) throw error;
      return data;
    });

    await Promise.all(uploadPromises);
  };

  return { listVideos, uploadVideos };
}
