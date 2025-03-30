import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const supabase = createClient(
    runtimeConfig.public.supabaseUrl,
    runtimeConfig.public.supabaseServiceRoleKey
  );


  const mediaFilesData = await readBody(event);
  if (!mediaFilesData) {
    throw createError({ statusCode: 400, message: "Missing media_files data" });
  }

  try {
    const { data, error } = await supabase
      .from("media_files")
      .insert(mediaFilesData)
      .select()
      .single();

    if (error) {
      throw createError({ statusCode: 500, message: error.message });
    }

    return { success: true, data };
  } catch (err) {
    console.error("Error creating media_files:", err);
    return { success: false, message: "Internal Server Error" };
  }
});
