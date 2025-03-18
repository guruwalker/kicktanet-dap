<template>
    <footer>
        <div class="tp-footer-main tp-footer-shop pt-80 pb-55">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                        <div class="tp-footer-widget tp-footer-shop-col-1 mb-30">
                            <div class="tp-footer-widget-logo mb-20 tp-header-logo">
                                <NuxtLink to="/"><img src="/images/logo/logo-black.png" alt=""></NuxtLink>
                            </div>
                            <div class="tp-footer-widget-content">
                                <p>Lorem ipsum dolor sit amet, consectetur <br> adipisc ing elit.</p>
                            </div>
                            <div class="tp-footer-contact shop">
                                <span>Got Questions? Call us</span>
                                <a href="tel:012345678">+670 413 90 762</a>
                            </div>
                            <div class="tp-footer-contact-mail shop">
                                <a href="mailto:acadia@gmail.com">
                                    <span>
                                        <svg-email-one />
                                    </span>
                                    acadia@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div class="tp-footer-widget tp-footer-shop-col-2 mb-30">
                            <h4 class="tp-footer-widget-title mb-15">About</h4>
                            <div class="tp-footer-widget-link">
                                <ul>
                                    <li v-for="link in footerLinks.link_one" :key="link.id">
                                        <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-5 col-sm-5">
                        <div class="tp-footer-widget tp-footer-shop-col-3 mb-30">
                            <h4 class="tp-footer-widget-title mb-15">Quick links</h4>
                            <div class="tp-footer-widget-link">
                                <ul>
                                    <li v-for="link in footerLinks.link_two" :key="link.id">
                                        <NuxtLink :to="link.link">{{ link.title }}</NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-3 col-md-7 col-sm-7">
                        <div class="p-footer-widget tp-footer-shop-col-4 mb-30">
                            <h4 class="tp-footer-widget-title mb-15">Our Newsletter</h4>
                            <div class="tp-footer-newsletter-wrap">
                                <p>Enter your email and we'll send you <br> more information</p>
                                <form action="#">
                                    <div class="tp-footer-newsletter-wrapper tp-footer-shop-input mb-30">
                                        <div class="tp-footer-newsletter-input">
                                            <input type="email" placeholder="Your email">
                                        </div>
                                        <div class="tp-footer-5-newsletter-submit">
                                            <button class="tp-btn-inner">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                                <div class="tp-footer-newsletter-social tp-footer-inner-social">
                                    <social-links />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-footer-5-bottom tp-footer-shop-bottom">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                        <div class="tp-footer-copyright ">
                            <span>© {{ new Date().getFullYear() }} <a href="#">Acadia</a>. All rights reserved.</span>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="tp-footer-copyright-payment text-start text-md-end">
                            <a href="#"><img src="/images/footer/pay_brand.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { footerLinks } from "@/data/footer-links";
</script>
