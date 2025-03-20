import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    process.env.NUXT_SUPABASE_URL!,
    process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY!
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
