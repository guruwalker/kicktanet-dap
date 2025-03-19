<template>
    <footer>
        <div :class="['tp-footer-main',dashboardFooter ? 'tpd-dashboard-footer' : 'tp-footer-inner','pt-80 pb-55']" :style="bgClr ? { backgroundColor: bgClr } : dashboardFooter ? { backgroundColor: '#0a1c3a' }: {}">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-3 col-md-6 col-sm-6">
                        <div class="tp-footer-widget tp-footer-col-1 mb-30">
                            <div class="tp-footer-widget-logo mb-20 tp-header-logo">
                                <NuxtLink to="/">
                                    <img :src="dashboardFooter ? '/images/logo/logo-white.png' : '/images/logo/logo-black-2.png'"
                                        alt="logo" />
                                </NuxtLink>
                            </div>
                            <div class="tp-footer-widget-content">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    <br />
                                    adipisc ing elit.
                                </p>
                            </div>
                            <div class="tp-footer-contact">
                                <span>Got Questions? Call us</span>
                                <a href="tel:012345678">+670 413 90 762</a>
                            </div>
                            <div class="tp-footer-contact-mail">
                                <a href="mailto:sofial@gmail.com">
                                    <span>
                                        <svg-email-one />
                                    </span>
                                    info@kictanet.or.ke
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-md-6 col-sm-6">
                        <div class="tp-footer-widget tp-footer-col-2 mb-30">
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
                        <div class="tp-footer-widget tp-footer-col-3 mb-30">
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
                        <div class="p-footer-widget tp-footer-5-col-4 mb-30">
                            <h4 class="tp-footer-widget-title mb-15">Our Newsletter</h4>
                            <div class="tp-footer-newsletter-wrap">
                                <p>
                                    Enter your email and we will send you
                                    <br />
                                    more information
                                </p>
                                <form @submit.prevent>
                                    <div :class="['tp-footer-newsletter-wrapper',dashboardFooter ? '' : 'tp-footer-inner-input','mb-30']">
                                        <div class="tp-footer-newsletter-input">
                                            <input type="email" placeholder="Your email" />
                                        </div>
                                        <div :class="[dashboardFooter ? 'tp-footer-newsletter-submit' : 'tp-footer-5-newsletter-submit']">
                                            <button :class="[dashboardFooter ? 'tp-btn' : 'tp-btn-inner']">
                                                Subscribe
                                            </button>
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

        <div :class="[dashboardFooter ? 'tp-footer-bottom tpd-dashboard-footer-bottom' : 'tp-footer-5-bottom tp-footer-inner-bottom']" :style="bgClr ? { backgroundColor: bgClr } : {}">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="tp-footer-copyright text-center">
                            <span>
                                © {{ new Date().getFullYear() }}
                                <a href="#">KICTANet</a>. All rights reserved.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { footerLinks } from "@/data/footer-links";

type IProps = {
  dashboardFooter?:boolean;
  bgClr?:string;
}

defineProps<IProps>();

</script>
