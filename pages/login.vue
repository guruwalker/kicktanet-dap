<script setup>
definePageMeta({
  layout: "blank",
});

useSeoMeta({
  title: "Login",
  ogTitle: "Login",
});
const { loginFormState, isLoading, login } = useAuthentication();
</script>

<template>
  <div id="login" class="bg--fixed login-1 login-section division">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <div class="register-page-form">
            <div class="col-md-12">
              <div class="register-form-title">
                <h3 class="s-32 w-700">Login</h3>
              </div>
            </div>
            <UForm
              :state="loginFormState"
              class="mt-4 space-y-4"
              @submit="login"
            >
              <UFormGroup label="Email" name="email">
                <UInput
                  v-model="loginFormState.email"
                  placeholder="Enter your email"
                />
              </UFormGroup>

              <UFormGroup label="Password" name="password">
                <UInput
                  v-model="loginFormState.password"
                  type="password"
                  placeholder="Enter your password"
                />
              </UFormGroup>

              <div class="flex justify-between text-xs py-1 text-primary">
                <NuxtLink to="/forgot-password" class="hover:underline"
                  >Forgot Password?</NuxtLink
                >
              </div>

              <UButton
                type="submit"
                :loading="isLoading"
                :disabled="isLoading"
                color="primary"
                block
              >
                Sign In
              </UButton>
            </UForm>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
