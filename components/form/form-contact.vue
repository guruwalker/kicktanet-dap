<template>
    <form @submit.prevent="onSubmit" id="contact-form">
        <div class="tp-contact-input-form">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input p-relative">
                        <label>Your Name</label>
                        <field name="name" v-slot="{ field }">
                          <input type="text" v-bind="field" name="name">
                        </field>
                        <err-msg :msg="errors.name" />
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input p-relative">
                        <label>Email Address</label>
                        <field name="email" v-slot="{ field }">
                         <input type="email" v-bind="field" name="email">
                        </field>
                        <err-msg :msg="errors.email" />
                    </div>
                </div>
                <div class="col-xl-12 col-lg-12">
                    <div class="tp-contact-input p-relative">
                        <label>Subject</label>
                        <field name="subject" v-slot="{ field }">
                          <input type="text" v-bind="field" name="subject">
                        </field>
                        <err-msg :msg="errors.subject" />
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="tp-contact-input p-relative">
                        <label>Your message</label>
                        <field name="message" v-slot="{ field }">
                          <textarea v-bind="field" name="message"></textarea>
                        </field>
                        <err-msg :msg="errors.message" />
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="tp-contact-input-remeber">
                        <input id="remeber" type="checkbox">
                        <label for="remeber">Save my name, email, and website in this browser
                            for the next time I comment.</label>
                    </div>
                </div>
                <div class="tp-contact-btn">
                    <button type="submit" class="tp-btn-inner">Send message</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
  name?: string | null;
  email?: string | null;
  subject?: string | null;
  message?: string | null;
}

const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required")
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});

</script>