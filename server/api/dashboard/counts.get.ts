import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  // Define Supabase Client with the Service Role Key
  const supabase = createClient(
    "https://uujbxewichsqfnwasuxe.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1amJ4ZXdpY2hzcWZud2FzdXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0OTE4MDgsImV4cCI6MjA1ODA2NzgwOH0.Ok33zThBGTPpfiLC3fL49H-vtcoN0iEqdqe5PdUp5nY" // Service Role Key
  );

  if (!supabase) {
    throw createError({
      statusCode: 500,
      message: "Failed to initialize Supabase client.",
    });
  }

  try {
    // Fetch counts from the tables
    const { count: employeesCount, error: employeesError } = await supabase
      .from("employees")
      .select("*", { count: "exact", head: true });

    const { count: suppliersCount, error: suppliersError } = await supabase
      .from("suppliers")
      .select("*", { count: "exact", head: true });

    const { count: productCount, error: productError } = await supabase
      .from("product")
      .select("*", { count: "exact", head: true });

    const { count: productsCount, error: productsError } = await supabase
      .from("products")
      .select("*", { count: "exact", head: true });

    // Check for errors in the queries
    if (employeesError || suppliersError || productsError || productError) {
      throw createError({
        statusCode: 500,
        message: "Error fetching counts.",
      });
    }

    // Return the counts
    return {
      success: true,
      data: {
        employees: employeesCount,
        suppliers: suppliersCount,
        product: productCount,
        products: productsCount,
      },
    };
  } catch (err) {
    console.error("Error fetching counts:", err);
    return {
      success: false,
      message: "Internal Server Error",
    };
  }
});
