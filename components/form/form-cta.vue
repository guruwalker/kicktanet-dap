<template>
    <form @submit.prevent="onSubmit">
        <div class="row">
            <div class="col-md-6">
                <div class="tp-cta-3-form-input">
                    <field name="gurdianname" v-slot="{ field }">
                        <input v-bind="field" type="text" placeholder="Gurdian Name">
                    </field>
                    <err-msg :msg="errors.gurdianname" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="tp-cta-3-form-input">
                    <field name="phone" v-slot="{ field }">
                     <input type="text" placeholder="Phone No" v-bind="field">
                    </field>
                    <err-msg :msg="errors.phone" />
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-cta-3-form-input">
                    <field name="email" v-slot="{ field }">
                        <input type="email" placeholder="Email" v-bind="field">
                    </field>
                    <err-msg :msg="errors.email" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="tp-cta-3-form-input">
                    <field name="childName" v-slot="{ field }">
                        <input type="text" placeholder="Child Name" v-bind="field">
                    </field>
                    <err-msg :msg="errors.childName" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="tp-cta-3-form-input">
                    <field name="childage" v-slot="{ field }">
                        <input type="text" placeholder="Age of Child" v-bind="field">
                    </field>
                    <err-msg :msg="errors.childage" />
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-cta-3-form-input">
                    <field name="msg" v-slot="{ field }">
                        <textarea v-bind="field" placeholder="Message...."></textarea>
                    </field>
                    <err-msg :msg="errors.msg" />
                </div>
            </div>
            <div class="col-md-12">
                <div class="tp-cta-3-btn">
                    <button type="submit">Submit my information</button>
                </div>
            </div>
        </div>
    </form>
</template>


<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
    gurdianname?: string | null;
    phone?: string | null;
    email?: string | null;
    childName?: string | null;
    childage?: string | null;
    msg?: string | null;
}

const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
    validationSchema: yup.object({
        gurdianname: yup.string().required("Name is required"),
        phone: yup.string().required("Phone is required"),
        email: yup.string().required("Email is required").email("Email is invalid"),
        childName: yup.string().required("Child Name is required"),
        childage: yup.string().required("Child Age is required"),
        msg: yup.string().required("Message is required"),
    }),
});

const onSubmit = handleSubmit((values) => {
    alert(JSON.stringify(values, null, 2));
    resetForm();
});
</script>
