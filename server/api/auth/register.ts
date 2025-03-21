import { createClient } from "@supabase/supabase-js";

export default defineEventHandler(async (event) => {
  const supabase = createClient(
    process.env.NUXT_SUPABASE_URL!,
    process.env.NUXT_SUPABASE_ANON_KEY!
  );

  const {
    email,
    password,
    full_name,
    username,
    phone_number,
    account_id,
    role,
  } = await readBody(event);

  if (
    !email ||
    !password ||
    !full_name ||
    !username ||
    !phone_number ||
    !account_id ||
    !role
  ) {
    throw createError({
      statusCode: 400,
      message: "Missing required fields",
    });
  }

  try {
    // Generate a unique account_id

    // Create user in Supabase Auth with metadata
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name,
          username,
          account_id,
          phone_number,
          role,
        },
      },
    });

    if (authError || !authData.user) {
      throw createError({
        statusCode: 400,
        message: authError?.message || "Registration failed",
      });
    }

    return {
      success: true,
      message: "User registered successfully",
      user: authData.user,
    };
  } catch (err) {
    console.error("Registration error:", err);
    return { success: false, message: "Failed to register" };
  }
});
