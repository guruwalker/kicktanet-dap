<template>
    <header class="header-area tp-header-transparent">
        <div id="header-sticky" :class="`tp-header-5 ${isSticky ? 'tp-header-sticky' : ''}`">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-xl-2 col-lg-6 col-6">
                        <div class="tp-header-5-logo tp-header-logo">
                            <NuxtLink to="/">
                                <img class="logo-1" src="/images/logo/logo-white.png" alt="logo">
                                <img class="logo-2" src="/images/logo/logo-black.png" alt="logo">
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-xl-8 d-none d-xl-block">
                        <div class="main-menu">

                            <!-- header nav menus -->
                            <header-nav-menus :sm_mega_title="sm_mega_title" />
                            <!-- header nav menus -->

                        </div>
                    </div>
                    <div class="col-xl-2 col-lg-6 col-6">
                        <div class="tp-header-5-contact d-flex align-items-center justify-content-end">


                            <!-- profile dropdown start -->
                            <header-top-profile-dropdown top_cls="tp-header-5-login" :user_icon="true" />
                            <!-- profile dropdown end -->

                            <div class="tp-header-5-cart ml-35">
                                <button @click="handleCartMini" class="cartmini-open-btn">
                                    <span>
                                        <svg-cart />
                                    </span>
                                    <i>{{ cartStore.cart_products.length }}</i>
                                </button>
                            </div>
                            <div class="tp-header-5-sidebar offcanvas-btns ml-35">
                                <button @click="handleOffcanvas" class="offcanvas-open-btn">
                                    <span></span>
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

type IProps = {
    sm_mega_title?: string;
};
defineProps<IProps>();

const openOffcanvas = ref(false);
const cartMiniOpen = ref(false);

function handleOffcanvas() {
    openOffcanvas.value = !openOffcanvas.value;
}

function handleCartMini() {
    cartMiniOpen.value = !cartMiniOpen.value;
}

</script>
