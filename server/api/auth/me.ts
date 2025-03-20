import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    process.env.NUXT_SUPABASE_URL!,
    process.env.NUXT_SUPABASE_ANON_KEY!
  );

  const authHeader = getHeader(event, "authorization");
  if (!authHeader) {
    throw createError({ statusCode: 401, message: "Unauthorized" });
  }

  const token = authHeader.replace("Bearer ", "");
  const { data: user, error } = await supabase.auth.getUser(token);

  if (error || !user) {
    throw createError({ statusCode: 401, message: "Invalid token" });
  }

  // Fetch User Profile
  const { data: userData, error: userError } = await supabase
    .from("users") // Your user table
    .select("*")
    .eq("id", user.id)
    .single();

  if (userError) {
    throw createError({
      statusCode: 500,
      message: "Failed to retrieve user data",
    });
  }

  return { success: true, user: userData };
});
