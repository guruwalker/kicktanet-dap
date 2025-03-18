<template>
    <section class="tp-checkout-area pt-120 pb-120" style="background-color: #EFF1F5;">
        <div class="container">

            <div v-if="cartStore.cart_products.length === 0" class="text-center pt-50">
                <h3 class="py-2">No items found in cart to checkout</h3>
                <NuxtLink to="/shop-grid" class="tp-btn-inner">
                   Return to shop
                </NuxtLink>
            </div>

            <div class="row" v-if="cartStore.cart_products.length > 0">
                <div class="col-xl-7 col-lg-7">
                    <!-- checkout verify area -->
                    <checkout-verify-area />
                    <!-- checkout verify area -->
                </div>
            </div>

            <form @submit.prevent="onSubmit" v-if="cartStore.cart_products.length > 0">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="tp-checkout-bill-area">
                            <h3 class="tp-checkout-bill-title">Billing Details</h3>

                            <div class="tp-checkout-bill-form">
                                <div class="tp-checkout-bill-inner">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="tp-checkout-input">
                                                <label>First Name <span>*</span></label>
                                                <field name="fname" v-slot="{ field }">
                                                    <input type="text" placeholder="First Name" v-bind="field">
                                                </field>
                                                <err-msg :msg="errors.fname" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="tp-checkout-input">
                                                <label>Last Name <span>*</span></label>
                                                <field name="lname" v-slot="{ field }">
                                                    <input type="text" placeholder="Last Name" v-bind="field">
                                                </field>
                                                <err-msg :msg="errors.lname" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="tp-checkout-input">
                                                <label>Company name (optional)</label>
                                                <field name="company" v-slot="{ field }">
                                                  <input type="text" placeholder="Example LTD." v-bind="field">
                                                </field>
                                            </div>
                                        </div>
                                         <div class="col-md-12">
                                            <div class="tp-checkout-input">
                                                <label>Street address</label>
                                                <field name="address" v-slot="{ field }">
                                                  <input type="text" placeholder="House number and street name" v-bind="field">
                                                </field>
                                                <err-msg :msg="errors.address" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="tp-checkout-input">
                                                <label>Town / City</label>
                                                <field name="city" v-slot="{ field }">
                                                 <input type="text" placeholder="city" v-bind="field">
                                                </field>
                                                <err-msg :msg="errors.city" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="tp-checkout-input">
                                                <label>State / County</label>
                                                <field name="country" as="select" class="nice-select wide">
                                                        <option disabled value="">Select a country</option>
                                                        <option value="us">New York US</option>
                                                        <option value="ger">Berlin Germany</option>
                                                        <option value="fr">Paris France</option>
                                                        <option value="jpn">Tokiyo Japan</option>
                                                </field>
                                                <err-msg :msg="errors.country" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="tp-checkout-input">
                                                <label>Postcode ZIP</label>
                                                <field name="zipCode" v-slot="{ field }">
                                                 <input type="text" placeholder="zip code" v-bind="field">
                                                </field>
                                                <err-msg :msg="errors.zipCode" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="tp-checkout-input">
                                                <label>Phone <span>*</span></label>
                                                <field name="phone" v-slot="{ field }">
                                                  <input type="text" placeholder="phone" v-bind="field">
                                                </field>
                                                <err-msg :msg="errors.phone" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="tp-checkout-input">
                                                <label>Email address <span>*</span></label>
                                                <field name="email" v-slot="{ field }">
                                                 <input type="email" placeholder="email" v-bind="field">
                                                </field>
                                                <err-msg :msg="errors.email" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="tp-checkout-input">
                                                <label>Order notes (optional)</label>
                                                <field name="orderNote" v-slot="{ field }">
                                                <textarea
                                                    placeholder="Notes about your order, e.g. special notes for delivery." v-bind="field"></textarea>
                                                </field>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <!-- checkout place order -->
                        <div class="tp-checkout-place white-bg">
                            <h3 class="tp-checkout-place-title">Your Order</h3>

                            <div class="tp-order-info-list">
                                <ul>
                                    <!-- list -->
                                    <checkout-product-list :products="products" />
                                    <!-- Subtotal -->
                                    <li class="tp-order-info-list-subtotal">
                                        <span>Subtotal</span>
                                        <span>${{ totalPrice.toFixed(2) }}</span>
                                    </li>

                                    <!-- Shipping Options -->
                                    <checkout-shipping-option
                                      :options="shippingOptions"
                                      :selected-option="shipping"
                                      @option-change="handleShipping"
                                    />

                                    <!-- Total -->
                                    <li class="tp-order-info-list-total">
                                        <span>Total</span>
                                        <span>
                                            {{(totalPrice + (shippingOptions.find(opt => opt.id === shipping)?.price || 0)).toFixed(2) }}
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <!-- checkout payment -->
                            <checkout-payment
                              :options="paymentOptions"
                              :selected-option="paymentMethod"
                                @optionChange="handlePayment"
                            />
                            <!-- checkout payment -->

                            <div class="tp-checkout-agree">
                                <div class="tp-checkout-option">
                                    <input id="read_all" type="checkbox">
                                    <label for="read_all">I have read and agree to the website.</label>
                                </div>
                            </div>
                            <div class="tp-checkout-btn-wrapper">
                                <button type="submit" class="tp-checkout-btn w-100">Place Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

const cartStore = useCartStore();
const products = cartStore.cart_products;

const shippingOptions = [
    { id: "flat_rate", label: "Flat rate", price: 20 },
    { id: "local_pickup", label: "Local pickup", price: 25 },
    { id: "free_shipping", label: "Free shipping", price: 0 }
];

const paymentOptions = [
    { id: "back_transfer", label: "Direct Bank Transfer", description: "Make your payment directly into our bank account. Please use your Order ID as the payment reference." },
    { id: "cheque_payment", label: "Cheque Payment", description: "Make your payment directly into our bank account." },
    { id: "cod", label: "Cash on Delivery", description: "Make your payment directly into our bank account." }
];

const shipping = ref("flat_rate");
const paymentMethod = ref("back_transfer");


const totalPrice = cartStore.totalPriceQuantity.total;

function handleShipping(value: string) {
    shipping.value = value;
}

function handlePayment(value: string) {
    paymentMethod.value = value;
}

interface IFormValues {
  fname?: string | null;
  lname?: string | null;
  company?: string | null;
  address?: string | null;
  city?: string | null;
  country?: string | null;
  zipCode?: string | null;
  phone?: string | null;
  email?: string | null;
  orderNote?: string | null;
}

const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    fname: yup.string().required("First name is required"),
    lname: yup.string().required("Last name is required"),
    company: yup.string().optional(),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    country: yup.string().required("Country is required"),
    zipCode: yup.string().required("Zip code is required"),
    phone: yup.string().required("Phone number is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    orderNote: yup.string().optional(),
  }),
});

const onSubmit = handleSubmit((values) => {
  console.log(values,'values');
  alert(JSON.stringify(values, null, 2));
  resetForm();
});

</script>
