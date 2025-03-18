<template>
    <!-- announcement area start -->
    <header-top-announcement v-if="!inner" />
    <!-- announcement area end -->
    <header class="header-area p-relative">
        <div id="header-sticky" :class="`tp-header-2 tp-header-shop ${inner?'':'bxs-none'} ${isSticky ? 'tp-header-sticky' : ''}`">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xxl-4 col-lg-6 col-6">
                        <div class="tp-header-2-right d-flex align-items-center">
                            <div class="tp-header-shop-logo tp-header-logo pr-20">
                                <NuxtLink to="/">
                                    <img src="/images/logo/logo-black.png" alt="logo">
                                </NuxtLink>
                            </div>
                            <div class="tp-header-shop-search p-relative d-none d-lg-block">
                                <form action="#">
                                    <input type="text" placeholder="Search...">
                                    <button class="tp-header-search-btn" type="submit">
                                        <span>
                                            <svg-search clr="#8B8B8B" />
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-5 col-lg-6 d-none d-xxl-block">
                        <div class="main-menu text-xxl-end d-none d-xxl-block">
                            <!-- header nav menus -->
                            <header-nav-menus />
                            <!-- header nav menus -->
                        </div>
                    </div>
                    <div class="col-xxl-3 col-lg-6 col-6">
                        <div class="tp-header-2-contact tp-header-shop d-flex align-items-center justify-content-end">
                            <div class="tp-header-2-cart d-none d-md-block">
                                <button @click="handleCartMini" class="cartmini-open-btn">
                                    <span>
                                        <svg-cart />
                                    </span>
                                    <i>{{ cartStore.cart_products.length }}</i>
                                </button>
                            </div>
                            <div class="tp-header-shop-btn d-none d-lg-block">
                                <NuxtLink class="tp-btn-inner" href="/shop-grid">Buy our book</NuxtLink>
                            </div>


                            <!-- profile dropdown start -->
                            <header-top-profile-dropdown top_cls="tp-header-shop-login" />
                            <!-- profile dropdown end -->

                            <div class="offcanvas-btn d-xxl-none ml-30">
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
// prop type
type IProps = {
    inner?: boolean;
};
withDefaults(defineProps<IProps>(), {
    inner: false
});

const {isSticky} = useSticky();
const openOffcanvas = ref(false);
const cartMiniOpen = ref(false);
const cartStore = useCartStore();

function handleOffcanvas() {
    openOffcanvas.value = !openOffcanvas.value;
}

function handleCartMini() {
    cartMiniOpen.value = !cartMiniOpen.value;
}
</script>
