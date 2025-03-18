<template>
    <div class="tp-checkout-verify">
        <!-- Login Section -->
        <div class="tp-checkout-verify-item">
            <p class="tp-checkout-verify-reveal">
                Returning customer?
                <button type="button" class="tp-checkout-login-form-reveal-btn" @click="toggleLoginForm">
                    Click here to login
                </button>
            </p>

            <div v-if="showLoginForm" id="tpReturnCustomerLoginForm" class="tp-return-customer">
                <form @submit.prevent="handleLogin">
                    <div class="tp-return-customer-input">
                        <label>Email</label>
                        <input type="text" placeholder="Your Email" v-model="loginForm.email" />
                    </div>
                    <div class="tp-return-customer-input">
                        <label>Password</label>
                        <input type="password" placeholder="Password" v-model="loginForm.password" />
                    </div>

                    <div
                        class="tp-return-customer-suggestions d-sm-flex align-items-center justify-content-between mb-20">
                        <div class="tp-return-customer-remember">
                            <input id="remember" type="checkbox" v-model="loginForm.remember" />
                            <label for="remember"> Remember me</label>
                        </div>
                        <div class="tp-return-customer-forgot">
                            <a href="#">Forgot Password?</a>
                        </div>
                    </div>
                    <button type="submit" class="tp-return-customer-btn tp-checkout-btn">
                        Login
                    </button>
                </form>
            </div>
        </div>

        <!-- Coupon Section -->
        <div class="tp-checkout-verify-item">
            <p class="tp-checkout-verify-reveal">
                Have a coupon?
                <button type="button" class="tp-checkout-coupon-form-reveal-btn" @click="toggleCouponForm">
                    Click here to enter your code
                </button>
            </p>

            <div v-if="showCouponForm" id="tpCheckoutCouponForm" class="tp-return-customer">
                <form @submit.prevent="applyCoupon">
                    <div class="tp-return-customer-input">
                        <label>Coupon Code :</label>
                        <input type="text" placeholder="Coupon" v-model="couponCode" />
                    </div>
                    <button type="submit" class="tp-return-customer-btn tp-checkout-btn">
                        Apply
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// Reactive state
const showLoginForm = ref(false);
const showCouponForm = ref(false);

// Form data
const loginForm = reactive({
    email: '',
    password: '',
    remember: false,
});

const couponCode = ref('');

// Toggle functions
const toggleLoginForm = () => {
    showLoginForm.value = !showLoginForm.value;
};

const toggleCouponForm = () => {
    showCouponForm.value = !showCouponForm.value;
};

// Handlers
const handleLogin = () => {
    console.log('Login form submitted', loginForm);
};

const applyCoupon = () => {
    console.log('Coupon applied:', couponCode.value);
};
</script>