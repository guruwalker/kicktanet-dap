import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    process.env.NUXT_SUPABASE_URL!,
    process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY!
  );

  const attendanceData = await readBody(event);
  if (!attendanceData) {
    throw createError({ statusCode: 400, message: "Missing attendance data" });
  }

  try {
    const { data, error } = await supabase
      .from("attendance")
      .insert(attendanceData)
      .select()
      .single();

    if (error) {
      throw createError({ statusCode: 500, message: error.message });
    }

    return { success: true, data };
  } catch (err) {
    console.error("Error creating attendance:", err);
    return { success: false, message: "Internal Server Error" };
  }
});
