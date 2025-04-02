// import { serverSupabaseClient } from "#supabase/server";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig();

  const supabase = createClient(
    runtimeConfig.public.supabaseUrl,
    runtimeConfig.public.supabaseServiceRoleKey
  );

  if (!supabase) {
    throw createError({
      statusCode: 500,
      message: "Failed to initialize Supabase client.",
    });
  }

  const query = getQuery(event);
  const component = query.c || null;
  const limit = parseInt(query.limit) || 10;
  const offset = parseInt(query.offset) || 0;

  if (!component) {
    throw createError({
      statusCode: 400,
      message: "Component parameter is required.",
    });
  }

  try {
    const { data, error } = await supabase
      .from("media_files")
      .select("*")
      .eq("bucket", "content")
      .eq("component", component)
      .range(offset, offset + limit - 1);

    if (error) throw createError({ statusCode: 500, message: error.message });

    return { success: true, data };
  } catch (err) {
    console.error("Error fetching media_files:", err);
    return { success: false, message: "Internal Server Error" };
  }
});
