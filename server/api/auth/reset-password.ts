import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    process.env.NUXT_SUPABASE_URL!,
    process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY!
  );

  const body = await readBody(event);
  const { token, newPassword } = body;

  if (!token || !newPassword) {
    throw createError({
      statusCode: 400,
      message: "Token and password are required.",
    });
  }

  const { error } = await supabase.auth.updateUser({
    password: newPassword,
  });

  if (error) {
    throw createError({ statusCode: 500, message: error.message });
  }

  return { success: true, message: "Password updated successfully." };
});
