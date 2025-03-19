<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

const showPass = ref<boolean>(false);

interface IFormValues {
  email?: string | null;
  password?: string | null;
}

const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>

<template>
  <form @submit.prevent="onSubmit" class="tp-login-input-form">
    <div class="row">
      <div class="col-12">
        <div class="tp-login-input p-relative">
          <label>Email or Phone</label>
          <field name="email" v-slot="{ field }">
            <input
              v-bind="field"
              type="text"
              id="email"
              placeholder="Type your email or phone number"
            />
          </field>
          <err-msg :msg="errors.email" />
        </div>
      </div>
      <div class="col-12">
        <div class="tp-login-input p-relative">
          <label>Password</label>
          <div class="password-input p-relative">
            <field name="password" v-slot="{ field }">
              <input
                v-bind="field"
                :type="showPass ? 'text' : 'password'"
                placeholder="Password"
              />
            </field>
            <div
              class="tp-login-input-eye password-show-toggle"
              @click="showPass = !showPass"
            >
              <template v-if="showPass">
                <svg-eye-open />
              </template>
              <template v-else>
                <svg-eye-close />
              </template>
            </div>
          </div>
          <err-msg :msg="errors.password" />
        </div>
      </div>
      <div class="col-12">
        <div class="tp-login-from-remeber">
          <div class="row">
            <div class="col-12">
              <div class="tp-login-input-remeber text-end">
                <a href="#">Forgot Password?</a>
              </div>
            </div>
          </div>
        </div>
        <div class="tp-login-from-btn">
          <button class="tp-btn-inner w-100 text-center">Sign In</button>
        </div>
      </div>
    </div>
  </form>
</template>
