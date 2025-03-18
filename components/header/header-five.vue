<template>
    <header class="header-area p-relative tp-header-4">
        <!-- header top area start -->
        <header-top-area-two />
        <!-- header top area end -->
        <div id="header-sticky" :class="`tp-header-4-main ${isSticky ? 'tp-header-sticky' : ''}`">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
                        <div class="tp-header-4-logo tp-header-logo">
                            <nuxt-link href="/">
                                <img class="logo-1" src="/images/logo/logo.png" alt="logo">
                                <img class="logo-2" src="/images/logo/logo-black-1.png" alt="logo">
                            </nuxt-link>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-7 d-none d-xl-block">
                        <div class="main-menu main-menu-4">
                            <!-- header nav menus -->
                            <header-nav-menus />
                            <!-- header nav menus -->
                        </div>
                    </div>
                    <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-6">
                        <div class="tp-header-contact d-flex align-items-center justify-content-end">
                            <div class="tp-header-2-cart cart-4 d-none d-md-block">
                                <button @click="handleCartMini" class="cartmini-open-btn">
                                    <span><svg-cart-two /></span>
                                    <i>{{ cartStore.cart_products.length }}</i>
                                </button>
                            </div>
                            <div class="tp-header-4-btn d-none d-md-block ml-30">
                                <nuxt-link href="/university-schedule">Plan a Visit</nuxt-link>
                            </div>
                            <div class="tp-header-bar d-xl-none ml-30">
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

    <!-- offcanvas area -->
    <offcanvas-area :open-off-canvas="openOffcanvas" @handle-off-canvas="handleOffcanvas" />
    <!-- offcanvas area -->

     <!-- cart mini area -->
    <offcanvas-cart-mini :open-sidebar="cartMiniOpen" @show-sidebar="handleCartMini" />
    <!-- cart mini area -->
</template>

<script setup lang="ts">
import { useCartStore } from '@/pinia/useCartStore';

const cartStore = useCartStore();
const {isSticky} = useSticky();
const openOffcanvas = ref(false);
const cartMiniOpen = ref(false);

function handleOffcanvas() {
    openOffcanvas.value = !openOffcanvas.value;
}

function handleCartMini() {
    cartMiniOpen.value = !cartMiniOpen.value;
}
</script>
