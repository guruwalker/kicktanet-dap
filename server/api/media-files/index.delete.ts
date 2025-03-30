import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const supabase = createClient(
    runtimeConfig.public.supabaseUrl,
    runtimeConfig.public.supabaseServiceRoleKey
  );


  const { id } = getQuery(event);
  if (!id) {
    throw createError({ statusCode: 400, message: "Missing media_files ID" });
  }

  try {
    const { data, error } = await supabase
      .from("media_files")
      .delete()
      .eq("id", id);

    if (error) {
      throw createError({ statusCode: 500, message: error.message });
    }
    return { success: true, data };
  } catch (err) {
    console.error(`Error deleting media_files with id ${id}:`, err);
    return { success: false, message: "Internal Server Error" };
  }
});
