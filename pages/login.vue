<script setup lang="ts">
definePageMeta({
  layout: false,
});
useSeoMeta({ title: "Login  | KICTANet" });
</script>

<template>
  <div>
    <!-- login area start -->
    <section class="tp-login-area">
      <div class="tp-login-register-box d-flex align-items-center">
        <!-- login register banner -->
        <login-register-banner-box />
        <!-- login register banner -->
        <div
          class="tp-login-register-wrapper d-flex justify-content-center align-items-center"
        >
          <div class="tp-login-from-box">
            <div class="tp-login-from-heading text-center">
              <h4 class="tp-login-from-title">Sign in</h4>
            </div>
            <!-- form start -->
            <form-login />
            <!-- form end -->
          </div>
        </div>
      </div>
    </section>
    <!-- login area end -->
  </div>
</template>
