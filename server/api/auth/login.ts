import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
const supabase = createClient(
  "https://uujbxewichsqfnwasuxe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTE4MDgsImV4cCI6MjA1ODA2NzgwOH0.Ok33zThBGTPpfiLC3fL49H-vtcoN0iEqdqe5PdUp5nY"
);

  const { email, password } = await readBody(event);

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      message: "Missing email or password",
    });
  }

  try {
    // Authenticate User
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError || !authData.user) {
      throw createError({
        statusCode: 401,
        message: authError?.message || "Invalid credentials",
      });
    }

    // Fetch Full User Data
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (userError) {
      throw createError({
        statusCode: 500,
        message: "Failed to fetch user data",
      });
    }

    return {
      success: true,
      message: "Login successful",
      user: userData,
      token: authData.session?.access_token, // Optional: Return token if needed
    };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, message: "Failed to Authenticate" };
  }
});
