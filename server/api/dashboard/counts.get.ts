import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  // Define Supabase Client with the Service Role Key
  const supabase = createClient(
    process.env.NUXT_SUPABASE_URL!,
    process.env.NUXT_SUPABASE_SERVICE_ROLE_KEY! // Service Role Key
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
