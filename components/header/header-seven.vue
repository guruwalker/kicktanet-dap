<template>
    <header class="header-area tp-header-transparent p-relative">
        <div id="header-sticky" :class="`tp-header-2 home-6 ${isSticky ? 'tp-header-sticky' : ''}`">
            <div class="container custom-container-1300">
                <div class="row align-items-center">
                    <div class="col-xl-5 col-lg-6 col-6">
                        <div class="tp-header-6-right d-flex align-items-center">
                            <div class="tp-header-6-logo">
                                <NuxtLink to="/">
                                    <img data-width="90" src="/images/logo/logo-black.png" alt="logo" style="width: 90px;">
                                </NuxtLink>
                            </div>
                            <div class="tp-header-2-category home-6 d-none d-md-block">
                                <NuxtLink class="tp-header-2-category-icon" href="/course-with-sidebar">
                                    <p><span><svg-dots /></span>Category</p>
                                </NuxtLink>
                                <div class="tp-header-2-category-list">
                                    <ul>
                                        <li><NuxtLink to="/course-with-sidebar">English Learning</NuxtLink></li>
                                        <li><NuxtLink to="/course-with-sidebar">Web Development</NuxtLink></li>
                                        <li><NuxtLink to="/course-with-sidebar">Logo Design</NuxtLink></li>
                                        <li><NuxtLink to="/course-with-sidebar">Motion Graphics</NuxtLink></li>
                                        <li><NuxtLink to="/course-with-sidebar">Video Edition</NuxtLink></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="tp-header-2-search d-none d-xxl-block">
                                <input type="text" placeholder="Search for Courses...">
                                  <button class="tp-header-2-search-btn"><svg-search />
                                </button>
                            </div>
                            <div class="tp-header-6-search ml-20 d-xxl-none">
                                <button @click="handleSearchPopup" class="tp-search-open-btn">
                                    <svg-search />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 col-6 d-xl-block">
                        <div class="tp-header-6-left d-flex align-items-center justify-content-end">
                            <div class="main-menu text-xl-center d-none d-xl-block">
                                <!-- nav menus start -->
                                <header-nav-menus-two :show-all-menus="false" />
                                <!-- nav menus end -->
                            </div>

                            <div class="tp-header-2-contact d-flex align-items-center justify-content-end">
                                <div class="tp-header-2-cart home-6 d-none d-xl-block">
                                    <button @click="handleCartMini" class="cartmini-open-btn">
                                        <span><svg-cart /></span>
                                        <i>{{ cartStore.cart_products.length }}</i>
                                    </button>
                                </div>

                                <!-- profile dropdown start -->
                                <header-top-profile-dropdown top_cls="tp-header-6-login d-none d-md-block" top_text="Admin" :user_icon="true" />
                                <!-- profile dropdown end -->



                                <div class="tp-header-6-btn ml-20 d-none d-xxl-block">
                                    <NuxtLink class="tp-btn-inner" href="/course-with-filter">Free Trial</NuxtLink>
                                </div>
                                <div class="offcanvas-btn d-xl-none ml-30">
                                    <button @click="handleOffcanvas" class="offcanvas-open-btn">
                                        <i class="fa-solid fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

     <!-- search popup -->
     <popup-search :is-search-open="openSearchPopup" @update:search-open="handleSearchPopup" />
    <!-- search popup -->

     <!-- offcanvas area -->
     <offcanvas-area :open-off-canvas="openOffcanvas" :offcanvas_cls="'offcanvas__2'" @handle-off-canvas="handleOffcanvas" />
    <!-- offcanvas area -->

     <!-- cart mini area -->
    <offcanvas-cart-mini :open-sidebar="cartMiniOpen" @show-sidebar="handleCartMini" />
    <!-- cart mini area -->
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
const cartStore = useCartStore();
const {isSticky} = useSticky();

const openSearchPopup = ref(false);
const openOffcanvas = ref(false);
const cartMiniOpen = ref(false);

function handleSearchPopup() {
    openSearchPopup.value = !openSearchPopup.value;
}

function handleOffcanvas() {
    openOffcanvas.value = !openOffcanvas.value;
}

function handleCartMini() {
    cartMiniOpen.value = !cartMiniOpen.value;
}
</script>
