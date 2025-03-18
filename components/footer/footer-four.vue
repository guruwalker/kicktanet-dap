<template>
    <footer>
        <div class="tp-footer-4">
            <div :class="`tp-footer-4-bg ${inner ? 'tp-footer-inner' : ''}`">
                <div class="container">
                    <div class="tp-footer-4-top">
                        <div class="row">
                            <div class="col-lg-6">
                                <h4 class="tp-footer-4-top-title">
                                    Sign now for offers <br /> and keep yourself informed!
                                </h4>
                            </div>
                            <div class="col-lg-6">
                                <div class="tp-footer-4-top-form">
                                    <form @submit.prevent="submitForm">
                                        <input type="text" placeholder="Enter your email..." v-model="email" />
                                        <button type="submit" class="tp-footer-4-top-btn">
                                            Send
                                            <span>
                                                <svg-arrow-right-six clr="currentColor" />
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tp-footer-4-main pt-90 pb-70">
                        <div class="row">
                            <div class="col-lg-2 col-sm-6">
                                <div class="tp-footer-widget tp-footer-4-col-1 mb-30">
                                    <div :class="`tp-footer-4-btn ${inner ? 'tp-footer-btn-inner' : ''}`">
                                        <NuxtLink class="active" to="/university-apply">Apply Now</NuxtLink>
                                        <NuxtLink to="/contact">Contact Us</NuxtLink>
                                        <NuxtLink to="/contact">Visit Us</NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                <div class="tp-footer-widget tp-footer-widget-4 has-border tp-footer-4-col-2 mb-30">
                                    <div class="tp-footer-widget-link">
                                        <ul>
                                            <li><NuxtLink to="/about">About Us</NuxtLink></li>
                                            <li><a href="#">Courses</a></li>
                                            <li><a href="#">Parent Portal</a></li>
                                            <li><a href="#">News & Blogs</a></li>
                                            <li><a href="#">Events</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="tp-footer-widget tp-footer-widget-4 tp-footer-4-col-3 mb-30">
                                    <div class="tp-footer-widget-link">
                                        <ul>
                                            <li><a href="#">Students</a></li>
                                            <li><a href="#">Admission</a></li>
                                            <li><a href="#">Faculty & Staffs</a></li>
                                            <li><a href="#">Tuition & Fees</a></li>
                                            <li><a href="#">Dress Code</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-sm-6">
                                <div class="tp-footer-widget tp-footer-widget-4 tp-footer-4-col-4 mb-30">
                                    <div class="tp-footer-4-info">
                                        <span>
                                            Germany — <br /> 785 15h Street, Office 478 Berlin, De 81566
                                        </span>
                                        <div class="tp-footer-4-mail">
                                            <a href="mailto:info@email.com">info@email.com</a>
                                        </div>
                                        <div class="tp-footer-4-phone">
                                            <a href="tel:0123456789">+(402) 763 282 46</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div :class="`tp-footer-4-bottom ${inner ? 'tp-footer-inner-bottom' : ''}`">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-3 col-md-3">
                            <div class="tp-footer-4-logo tp-header-logo">
                                <NuxtLink to="/">
                                    <img src="/images/logo/logo-white.png" alt="logo" />
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-5">
                            <div class="tp-footer-4-copyright text-start text-md-center">
                                <span>
                                    Copyright © {{ new Date().getFullYear() }}
                                    <a href="#">ThemePure</a>
                                </span>
                                <span class="span"><a href="#">All Rights Reserved</a></span>
                                <span class="span"><a href="#">Privacy & Policy</a></span>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-4">
                            <div class="tp-footer-4-social text-md-end">
                                <!-- Footer Social -->
                                <social-links />
                                <!-- Footer Social -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

const email = ref('');
withDefaults(defineProps<{ inner?: boolean }>(), {
    inner: false
})

const submitForm = () => {
    if (email.value) {
        console.log(`Email submitted: ${email.value}`);
        email.value = '';
    } else {
        console.error('Please enter a valid email.');
    }
};
</script>
