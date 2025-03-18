<template>
    <header class="header-area p-relative">
         <div id="header-sticky" :class="`tp-header-inner ${isSticky ? 'tp-header-sticky' : ''}`">
            <div class="container">
               <div class="row align-items-center">
                  <div class="col-xxl-2 col-xl-2 col-6">
                     <div class="tp-header-logo">
                        <nuxt-link href="/">
                           <img src="/images/logo/logo-breadcrumb.png" alt="logo">
                        </nuxt-link>
                     </div>
                  </div>
                  <div class="col-xxl-7 col-xl-7 d-none d-xl-block">
                     <div class="main-menu text-xl-center">
                        <!-- header nav menus -->
                        <header-nav-menus />
                        <!-- header nav menus -->
                     </div>
                  </div>
                  <div class="col-xxl-3 col-xl-3 col-6">
                     <div class="tp-header-contact d-flex align-items-center justify-content-end">
                        <div class="tp-header-red-search d-none d-md-block">
                           <button @click="handleSearchPopup" class="tp-search-open-btn">
                              <svg-search-four/>
                           </button>
                        </div>
                        <div class="tp-header-inner-btn d-none d-md-block">
                           <nuxt-link class="tp-btn-3" href="/university-schedule">Plan a Visit</nuxt-link>
                        </div>
                        <div class="tp-header-red-sidebar">
                           <button @click="handleOffcanvas" class="offcanvas-open-btn">
                              <svg-menu-line/>
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
     <offcanvas-area :open-off-canvas="openOffcanvas" @handle-off-canvas="handleOffcanvas" />
    <!-- offcanvas area -->
</template>

<script setup lang="ts">
const {isSticky} = useSticky();

const openSearchPopup = ref(false);
const openOffcanvas = ref(false);

function handleSearchPopup() {
    openSearchPopup.value = !openSearchPopup.value;
}

function handleOffcanvas() {
    openOffcanvas.value = !openOffcanvas.value;
}

</script>
