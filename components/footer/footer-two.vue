<script setup lang="ts">
import { footerLinks } from "@/data/footer-links";
</script>

<template>
  <footer>
    <div class="tp-footer-2">
      <div class="tp-footer-main pt-70 pb-55">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="tp-footer-widget tp-footer-2-col-1 mb-30">
                <div class="tp-footer-widget-logo mb-20 tp-header-logo">
                  <NuxtLink to="/"
                    ><img src="/images/logo/logo-black.png" alt=""
                  /></NuxtLink>
                </div>
                <div class="tp-footer-widget-content">
                  <p>
                    Acadia education theme, built specifically for the education
                    centers which is teaching and involve learners.
                  </p>
                </div>
                <div class="tp-footer-contact">
                  <div class="tp-footer-btn">
                    <NuxtLink class="tp-btn-round" href="/contact"
                      >Contact Us
                      <span>
                        <svg-arrow-right-four />
                      </span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="tp-footer-widget tp-footer-2-col-2 mb-30">
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
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div class="tp-footer-widget tp-footer-2-col-3 mb-30">
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
            <div class="col-xl-3 col-lg-4 col-md-6">
              <div class="p-footer-widget tp-footer-2-col-4 mb-30">
                <h4 class="tp-footer-widget-title mb-20">Our Newsletter</h4>
                <div class="tp-footer-contact">
                  <span>Got Questions? Call us</span>
                  <a href="tel:012345678">+670 413 90 762</a>
                </div>
                <div class="tp-footer-contact-mail mb-20">
                  <a href="mailto:acadia@gmail.com">
                    <span>
                      <svg-email-one />
                    </span>
                    acadia@gmail.com</a
                  >
                </div>
                <div class="tp-footer-app">
                  <a href="#"
                    ><img src="/images/footer/google-play.jpg" alt=""
                  /></a>
                  <a href="#"
                    ><img src="/images/footer/apple-store.jpg" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tp-footer-bottom">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-3 col-md-4">
              <div class="tp-footer-bottom-social">
                <!-- Footer Social -->
                <social-links />
                <!-- Footer Social -->
              </div>
            </div>
            <div class="col-lg-6 col-md-5">
              <div class="tp-footer-copyright text-start text-md-center">
                <span
                  >© {{ new Date().getFullYear() }} <a href="#">Acadia</a>. All
                  rights reserved.</span
                >
              </div>
            </div>
            <div class="col-lg-3 col-md-3">
              <div class="header-bottom__lang-2 text-start text-md-end">
                <ul>
                  <li>
                    <a
                      id="header-bottom__lang-toggle"
                      href="javascript:void(0)"
                    >
                      <span>EN</span>
                      <span>
                        <svg-arrow-down-two />
                      </span>
                    </a>
                    <ul class="header-bottom__lang-submenu-2">
                      <li>
                        <a href="#">Arabic</a>
                      </li>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                      <li>
                        <a href="#">Mandarin</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
