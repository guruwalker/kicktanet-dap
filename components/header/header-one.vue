<template>
  <header class="header-area tp-header-transparent p-relative">
    <!-- header top area -->
    <header-top-area />
    <!-- header top area -->

    <div
      id="header-sticky"
      :class="`tp-header-mob-space tp-header-1 ${
        isSticky ? 'tp-header-sticky' : ''
      }`"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xxl-2 col-xl-2 col-lg-6 col-md-6 col-6">
            <div class="tp-header-logo-1 tp-header-logo">
              <NuxtLink to="/">
                <img class="logo-1" src="/images/logo/logo.png" alt="logo" />
                <img
                  class="logo-2"
                  src="/images/logo/logo-black-1.png"
                  alt="logo"
                />
              </NuxtLink>
            </div>
          </div>
          <div class="col-xxl-8 col-xl-7 d-none d-xl-block">
            <div class="main-menu text-end">
              <!-- header nav menus -->
              <header-nav-menus />
              <!-- header nav menus -->
            </div>
          </div>
          <div class="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
            <div
              class="tp-header-contact d-flex align-items-center justify-content-end"
            >
              <div class="tp-header-serach">
                <button @click="handleSearchPopup" class="tp-search-open-btn">
                  <svg-search />
                </button>
              </div>
              <div class="tp-header-btn d-none d-md-block ml-30">
                <NuxtLink to="/university-application-form"
                  >Apply Now
                </NuxtLink>
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

  <!-- search popup -->
  <popup-search
    :is-search-open="openSearchPopup"
    @update:search-open="handleSearchPopup"
  />
  <!-- search popup -->

  <!-- offcanvas area -->
  <offcanvas-area
    :open-off-canvas="openOffcanvas"
    @handle-off-canvas="handleOffcanvas"
  />
  <!-- offcanvas area -->
</template>

<script setup lang="ts">
const { isSticky } = useSticky();
const openSearchPopup = ref(false);
const openOffcanvas = ref(false);

function handleSearchPopup() {
  openSearchPopup.value = !openSearchPopup.value;
}

function handleOffcanvas() {
  openOffcanvas.value = !openOffcanvas.value;
}
</script>
