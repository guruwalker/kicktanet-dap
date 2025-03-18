<template>
    <header id="header-sticky" :class="`header-area tp-header-transparent tp-header-3 ${isSticky ? 'tp-header-sticky' : ''}`">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xxl-2 col-xl-2 col-6">
                    <div class="tp-header-logo">
                        <NuxtLink to="/">
                            <img src="/images/logo/logo-black.png" alt="logo">
                        </NuxtLink>
                    </div>
                </div>
                <div class="col-xxl-8 col-xl-7 d-none d-xl-block">
                    <div class="main-menu text-center">
                        <!-- header nav menus -->
                        <header-nav-menus :sm_mega_title="sm_mega_title" />
                        <!-- header nav menus -->
                    </div>
                </div>
                <div class="col-xxl-2 col-xl-3 col-6">
                    <div class="tp-header-contact d-flex align-items-center justify-content-end">
                        <div class="tp-header-3-btn d-none d-sm-block">
                            <NuxtLink class="tp-btn-tomato" href="/contact">Book a visit</NuxtLink>
                        </div>
                        <div class="offcanvas-btn d-xxl-none ml-30">
                            <button @click="handleOffcanvas" class="offcanvas-open-btn">
                                <i class="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- offcanvas area -->
    <offcanvas-area :open-off-canvas="openOffcanvas" :offcanvas_cls="'offcanvas__3'" @handle-off-canvas="handleOffcanvas" />
    <!-- offcanvas area -->
</template>

<script setup lang="ts">
const {isSticky} = useSticky();
// prop type
type IProps = {
    sm_mega_title?: string;
};

defineProps<IProps>();

const openOffcanvas = ref(false);

function handleOffcanvas() {
    openOffcanvas.value = !openOffcanvas.value;
}
</script>
