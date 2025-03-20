<template>
  <div id="login" class="bg--fixed login-1 login-section division">
    <div class="container mt-5">
      <div class="row">
        <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <div class="register-page-form">
            <!-- TITLE -->
            <div class="col-md-12">
              <div class="register-form-title">
                <h3 class="s-32 w-700">Login</h3>
              </div>
            </div>
            <!-- LOGIN FORM -->
            <form name="signinform" class="row sign-in-form">
              <!-- Form Input -->
              <div class="col-md-12">
                <p class="p-sm input-header">Email address</p>
                <input
                  class="form-control email"
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                />
              </div>
              <!-- Form Input -->
              <div class="col-md-12">
                <p class="p-sm input-header">Password</p>
                <div class="wrap-input">
                  <span class="btn-show-pass ico-20"
                    ><span class="flaticon-visibility eye-pass"></span
                  ></span>
                  <input
                    class="form-control password"
                    type="password"
                    name="password"
                    placeholder="* * * * * * * * *"
                  />
                </div>
              </div>
              <!-- Reset Password Link -->
              <div class="col-md-12">
                <div class="reset-password-link">
                  <p class="color--theme p-sm">
                    Forgot your password? Please contact administrator
                  </p>
                </div>
              </div>
              <!-- Form Submit Button -->
              <div class="col-md-12">
                <button
                  type="submit"
                  class="btn btn--theme hover--theme submit"
                >
                  Log In
                </button>
              </div>
            </form>
            <!-- END LOGIN FORM -->
          </div>
        </div>
      </div>
      <!-- End row -->
    </div>
    <!-- End container -->
  </div>
</template>

<script setup>
definePageMeta({
  layout: "no-header-footer",
});
</script>
