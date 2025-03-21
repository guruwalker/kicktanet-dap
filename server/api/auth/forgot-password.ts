import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    "https://uujbxewichsqfnwasuxe.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTE4MDgsImV4cCI6MjA1ODA2NzgwOH0.Ok33zThBGTPpfiLC3fL49H-vtcoN0iEqdqe5PdUp5nY"
  );

  const body = await readBody(event);
  const { email } = body;

  if (!email) {
    throw createError({ statusCode: 400, message: "Email is required." });
  }

  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${process.env.NUXT_PUBLIC_APP_URL}reset-password`,
  });

  if (error) {
    throw createError({ statusCode: 500, message: error.message });
  }

  return { success: true, message: "Password reset email sent." };
});
