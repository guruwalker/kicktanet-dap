<template>
    <footer>
        <div class="tp-footer-3 tp-footer-3-bg" style="background-image: url(/images/bg/footer-3-bg.jpg);">
            <div class="container">
                <div class="tp-footer-main">
                    <div class="row">
                        <div class="col-xl-4 col-lg-3 col-sm-6">
                            <div class="tp-footer-widget tp-footer-3-col-1 mb-30">
                                <div class="tp-footer-widget-logo mb-20 tp-header-logo">
                                    <a href="#"><img src="/images/logo/logo-white.png" alt=""></a>
                                </div>
                                <div class="tp-footer-widget-content">
                                    <p>Lorem ipsum dolor sit amet, mea <br> ei viderer probatus</p>
                                </div>
                                <div class="tp-footer-contact">
                                    <span>Got Questions? Call us</span>
                                    <a href="tel:012345678">+670 413 90 762</a>
                                </div>
                                <div class="tp-footer-contact-mail">
                                    <a href="mailto:acadia@gmail.com">
                                        <span>
                                            <svg-email-one />
                                        </span>
                                        acadia@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-3 col-sm-6">
                            <div class="tp-footer-widget tp-footer-3-col-2 mb-30">
                                <h4 class="tp-footer-widget-title mb-15">About</h4>
                                <div class="tp-footer-widget-link">
                                    <ul>
                                        <li v-for="link in footerLinks.link_one" :key="link.id">
                                            <nuxt-link :to="link.link">{{ link.title }}</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-lg-2 col-sm-6">
                            <div class="tp-footer-widget tp-footer-3-col-3 mb-30">
                                <h4 class="tp-footer-widget-title mb-15">Quick links</h4>
                                <div class="tp-footer-widget-link">
                                    <ul>
                                        <li v-for="link in footerLinks.link_two" :key="link.id">
                                            <nuxt-link :to="link.link">{{ link.title }}</nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-sm-6">
                            <div class="p-footer-widget tp-footer-3-col-4 mb-30">
                                <h4 class="tp-footer-widget-title mb-15">Our Newsletter</h4>
                                <div class="tp-footer-newsletter-wrap">
                                    <p>Enter your email and we'll send you <br> more information</p>
                                    <form action="#">
                                        <div class="tp-footer-newsletter-wrapper mb-30">
                                            <div class="tp-footer-newsletter-input">
                                                <input type="email" placeholder="Your email">
                                            </div>
                                            <div class="tp-footer-newsletter-submit">
                                                <button class="tp-btn">Subscribe</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="tp-footer-newsletter-social">
                                        <!-- Footer Social -->
                                        <social-links />
                                        <!-- Footer Social -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="tp-footer-copyright text-center">
                            <span>© {{ new Date().getFullYear() }} <a href="#">Acadia</a>. All rights reserved.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tp-footer-shape">
                <div class="tp-footer-3-shape-1">
                    <img src="/images/shape/footer/fw-3-tree-1.png" alt="">
                </div>
                <div class="tp-footer-3-shape-2">
                    <img src="/images/shape/footer/fw-3-tree-2.png" alt="">
                </div>
                <div class="tp-footer-3-shape-3">
                    <img src="/images/shape/footer/fw-3-star-3.png" alt="">
                </div>
                <div class="tp-footer-3-shape-4">
                    <img src="/images/shape/footer/fw-3-cartoon-4.png" alt="">
                </div>
                <div class="tp-footer-3-shape-5">
                    <img src="/images/shape/footer/fw-3-cartoon-5.png" alt="">
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { footerLinks } from "@/data/footer-links";
</script>
