// import { serverSupabaseClient } from "#supabase/server";
import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  // Define Supabase Client with the Service Role Key
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

  const query = getQuery(event); // Get query parameters from the URL
  const component = query.c || null; // Extract component from query

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
      .eq("bucket", "images")
      .eq("component", component); // Filter by component

    if (error) throw createError({ statusCode: 500, message: error.message });

    return { success: true, data };
  } catch (err) {
    console.error("Error fetching media_files:", err);
    return { success: false, message: "Internal Server Error" };
  }
});
