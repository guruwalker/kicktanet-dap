import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const supabase = createClient(
    runtimeConfig.public.supabaseUrl,
    runtimeConfig.public.supabaseServiceRoleKey
  );


  const usersData = await readBody(event);
  if (!usersData) {
    throw createError({ statusCode: 400, message: "Missing users data" });
  }

  try {
    const { data, error } = await supabase
      .from("users")
      .insert(usersData)
      .select()
      .single();

    if (error) {
      throw createError({ statusCode: 500, message: error.message });
    }

    return { success: true, data };
  } catch (err) {
    console.error("Error creating users:", err);
    return { success: false, message: "Internal Server Error" };
  }
});
