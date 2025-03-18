<template>
  <header class="header-area p-relative">
     <div id="header-sticky" :class="`tp-header-2 ${transparent ? 'tp-header-transparent' : ''} ${isSticky ? 'tp-header-sticky' : ''}`">
        <div class="container custom-container-larg">
            <div class="row align-items-center">
                <div class="col-xxl-3 col-xl-3 col-lg-6 col-6">
                    <div class="tp-header-2-right d-flex align-items-center">
                    <div class="tp-header-inner-logo tp-header-logo">
                        <nuxt-link href="/">
                            <img src="/images/logo/logo-black.png" alt="logo">
                        </nuxt-link>
                    </div>
                    <div class="tp-header-2-category tp-header-inner-category home-2 d-none d-md-block">
                        <nuxt-link class="tp-header-2-category-icon" href="/course-with-sidebar">
                            <p><span><svg-dots/></span>Category</p>
                        </nuxt-link>
                        <div class="tp-header-2-category-list">
                            <ul>
                                <li><nuxt-link href="/course-with-sidebar">English Learning</nuxt-link></li>
                                <li><nuxt-link href="/course-with-sidebar">Web Development</nuxt-link></li>
                                <li><nuxt-link href="/course-with-sidebar">Logo Design</nuxt-link></li>
                                <li><nuxt-link href="/course-with-sidebar">Motion Graphics</nuxt-link></li>
                                <li><nuxt-link href="/course-with-sidebar">Video Edition</nuxt-link></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-7 col-lg-6 d-none d-xl-block">
                    <div class="main-menu text-xl-center d-none d-xl-block">

                        <!-- nav menus start -->
                        <header-nav-menus-two />
                        <!-- nav menus end -->

                    </div>
                </div>
                <div class="col-xxl-3 col-xl-2 col-lg-6 col-6">
                    <div class="tp-header-2-contact d-flex align-items-center justify-content-end">
                    <div class="tp-header-inner-search">
                        <button @click="handleSearchPopup" class="tp-search-open-btn">
                            <svg-search-two />
                        </button>
                    </div>
                    <div class="tp-header-2-cart home-2 d-none d-xxl-block">
                        <button @click="handleCartMini" class="cartmini-open-btn">
                            <span><svg-cart/></span><i>{{ cartStore.cart_products.length }}</i>
                        </button>
                    </div>
                    <div :class="`tp-header-inner-btn ${inner ? '' : 'home-2'} d-none d-xxl-block`">
                        <nuxt-link class="tp-btn-inner" href="/course-with-filter">Enroll Now</nuxt-link>
                    </div>

                    <!-- profile dropdown start -->
                    <header-top-profile-dropdown/>
                    <!-- profile dropdown end -->

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
    </header>

    <!-- search popup -->
    <popup-search :is-search-open="openSearchPopup" @update:search-open="handleSearchPopup" />
    <!-- search popup -->

     <!-- offcanvas area -->
     <offcanvas-area :open-off-canvas="openOffcanvas" :offcanvas_cls="'offcanvas__2'" :offcanvas_menu_2="true" @handle-off-canvas="handleOffcanvas" />
    <!-- offcanvas area -->

     <!-- cart mini area -->
    <offcanvas-cart-mini :open-sidebar="cartMiniOpen" @show-sidebar="handleCartMini" />
    <!-- cart mini area -->
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';
const cartStore = useCartStore();
const {isSticky} = useSticky();

// prop type 
type IProps = {
  inner?: boolean;
  transparent?: boolean;
}
withDefaults(defineProps<IProps>(), {
  inner: false,
  transparent: false
});


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