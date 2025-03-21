import { createClient } from "@supabase/supabase-js";
import { defineEventHandler, getCookie, createError } from "h3";

export default defineEventHandler(async (event) => {
const supabase = createClient(
  "https://uujbxewichsqfnwasuxe.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTE4MDgsImV4cCI6MjA1ODA2NzgwOH0.Ok33zThBGTPpfiLC3fL49H-vtcoN0iEqdqe5PdUp5nY"
);

  const { id } = getQuery(event);

  if (!id) {
    throw createError({ statusCode: 400, message: "Missing user ID" });
  }

  try {
    const { data: profile, error } = await supabase
      .from("users")
      .select("*")
      .eq("id", id)
      .single();

    return { success: true, user: profile };
  } catch (err) {
    console.error("Error fetching profile:", err);
    return { success: false, message: "Failed to fetch user profile" };
  }
});
