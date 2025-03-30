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

  const updateData = await readBody(event);
  if (!updateData) {
    throw createError({ statusCode: 400, message: "Missing media_files data" });
  }

  try {
    const { data, error } = await supabase
      .from("media_files")
      .update(updateData)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error(`Error updating media_files with id ${id}:`, error.message);
      return { success: false, data: error.message };
    }
    return { success: true, data };
  } catch (err) {
    console.error(`Error updating media_files with id ${id}:`, err);
    return { success: false, data: "Internal Server Error" };
  }
});
