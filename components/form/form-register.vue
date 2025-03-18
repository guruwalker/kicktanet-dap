<template>
    <form @submit.prevent="onSubmit" class="tp-login-input-form">
        <div class="row">
            <div class="col-12">
                <div class="tp-login-input p-relative">
                    <label>Full Name</label>
                    <field name="name" v-slot="{ field }">
                        <input v-bind="field" type="text" placeholder="Type your name">
                    </field>
                    <err-msg :msg="errors.name" />
                </div>
            </div>
            <div class="col-12">
                <div class="tp-login-input p-relative">
                    <label>Email or Phone</label>
                    <field name="email" v-slot="{ field }">
                        <input v-bind="field" type="text" placeholder="Type your email or phone number">
                    </field>
                    <err-msg :msg="errors.email" />
                </div>
            </div>
            <div class="col-12">
                <div class="tp-login-input p-relative">
                    <label>Password</label>
                    <div class="password-input p-relative">
                        <field name="password" v-slot="{ field }">
                            <input v-bind="field" :type="showPass ? 'text' : 'password'" placeholder="Password">
                        </field>
                        <div class="tp-login-input-eye password-show-toggle" @click="showPass = !showPass">
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
                <div class="tp-login-input p-relative">
                    <label>Conform Password </label>
                    <div class="password-input p-relative">
                        <field name="conPassword" v-slot="{ field }">
                           <input :type="showConPass ? 'text' : 'password'" placeholder="Password" v-bind="field">
                        </field>
                        <div class="tp-login-input-eye password-show-toggle" @click="showConPass = !showConPass">
                            <template v-if="showConPass">
                                <svg-eye-open />
                            </template>
                            <template v-else>
                                <svg-eye-close />
                            </template>
                        </div>
                    </div>
                    <err-msg :msg="errors.conPassword" />
                </div>
            </div>
            <div class="col-12">
                <div class="tp-login-from-remeber">
                    <div class="row">
                        <div class="col-12">
                            <div class="tp-contact-input-remeber login">
                                <input id="remeber" type="checkbox">
                                <label for="remeber">Save account</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tp-login-from-btn">
                    <button class="tp-btn-inner w-100 text-center">Register</button>
                </div>
                <div class="tp-login-from-subtitle-heading">
                    <h5 class="tp-login-from-subtitle">Or Sign In with email</h5>
                </div>
                <div class="tp-login-from-google-btn">
                    <a class="w-100" href="#">
                        <svg-google />
                        Continue with Google
                    </a>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

const showPass = ref<boolean>(false);
const showConPass = ref<boolean>(false);

interface IFormValues {
    name?: string | null;
    email?: string | null;
    password?: string | null;
    conPassword?: string | null;
}

const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
    validationSchema: yup.object({
        name: yup.string().required("Name is required"),
        email: yup.string().required("Email is required").email("Email is invalid"),
        password: yup
            .string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
        conPassword: yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match')
    }),
});

const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
});
</script>