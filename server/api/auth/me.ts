import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
const supabase = createClient(
  "https://uujbxewichsqfnwasuxe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTE4MDgsImV4cCI6MjA1ODA2NzgwOH0.Ok33zThBGTPpfiLC3fL49H-vtcoN0iEqdqe5PdUp5nY"
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
