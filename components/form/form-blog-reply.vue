<template>
    <form id="contact-form">
        <div class="tp-contact-input-form">
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input p-relative">
                        <label>Your Name</label>
                        <input type="text">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input p-relative">
                        <label>Email Address</label>
                        <input type="email">
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="tp-contact-input p-relative">
                        <label>Your comment</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="tp-contact-input-remeber">
                        <input id="remeber" type="checkbox">
                        <label for="remeber">
                            Save my name, email, and website in this browser for the next time I comment.
                        </label>
                    </div>
                </div>
                <div class="tp-contact-btn">
                    <button type="submit" class="tp-btn-inner">Submit</button>
                </div>
            </div>
        </div>
    </form>
</template>


<script setup lang="ts">
import { Form as VeeForm, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

// Define the validation schema
const schema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    comments: yup.string().required("Comment is required"),
    remember: yup.boolean(),
});


</script>
