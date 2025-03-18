<script setup lang="ts">
import menuData from "@/data/menu-data";
defineProps<{ sm_mega_title?: string }>();

const { isSticky } = useSticky();
const openOffcanvas = ref(false);

function handleOffcanvas() {
  openOffcanvas.value = !openOffcanvas.value;
}
</script>

<template>
  <header class="header-area tp-header-transparent p-relative">
    <!-- header top area -->
    <div class="tp-header-top theme-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div
              class="tp-heder-info d-flex justify-content-center justify-content-lg-start align-items-center"
            >
              <div class="tp-header-info-item">
                <span>
                  <a href="tel:0123456789">
                    <i
                      ><img src="/images/icon/calling.svg" alt="phone-img"
                    /></i>
                    +(254) 712 345 67
                  </a>
                </span>
              </div>
              <div class="tp-header-info-item">
                <div class="header-bottom__lang">
                  <header-top-lang />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 d-none d-lg-block">
            <div class="tp-header-right-list d-flex justify-content-md-end">
              <a href="#">Campus</a>
              <a href="#">Students</a>
              <a href="#"> Staffs</a>
              <a href="#"> Alumni </a>
              <a href="#">Help Desk</a>
            </div>
          </div>
        </div>
      </div>
    </div>
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
              <nav class="tp-main-menu-content">
                <ul>
                  <li
                    v-for="menu in menuData"
                    :key="menu.id"
                    :class="{
                      'has-dropdown': true,
                      'tp-static': menu.home_dropdown || menu.pages_dropdown,
                    }"
                  >
                    <NuxtLink :to="menu.link">
                      {{
                        menu.sm_mega_menus && sm_mega_title
                          ? sm_mega_title
                          : menu.title
                      }}
                    </NuxtLink>

                    <!-- Home Dropdown -->
                    <div
                      v-if="menu.home_dropdown"
                      class="tp-megamenu-main tp-megamenu-container"
                    >
                      <header-nav-home-dropdown
                        :home-dropdown="menu.home_dropdown"
                      />
                    </div>

                    <!-- Small Mega Menus -->
                    <div
                      v-if="menu.sm_mega_menus"
                      class="tp-megamenu-main tp-megamenu-small"
                    >
                      <header-nav-sm-mega-menus
                        :dropdown_menus="menu.sm_mega_menus"
                      />
                    </div>

                    <!-- Pages Dropdown -->
                    <div
                      v-if="menu.pages_dropdown"
                      class="tp-megamenu-main tp-megamenu-fullwidth"
                    >
                      <header-nav-pages-dropdown
                        :pages-dropdown="menu.pages_dropdown"
                      />
                    </div>

                    <!-- Submenus -->
                    <ul v-if="menu.dropdown_menus" class="tp-submenu">
                      <li v-for="dm in menu.dropdown_menus" :key="dm.id">
                        <NuxtLink :to="dm.link">{{ dm.title }}</NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
              <!-- header nav menus -->
            </div>
          </div>
          <div class="col-xxl-2 col-xl-3 col-lg-6 col-md-6 col-6">
            <div
              class="tp-header-contact d-flex align-items-center justify-content-end"
            >
              <div class="tp-header-btn d-none d-md-block ml-30">
                <NuxtLink to="/university-application-form"
                  >Login
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

  <!-- offcanvas area -->
  <offcanvas-area
    :open-off-canvas="openOffcanvas"
    @handle-off-canvas="handleOffcanvas"
  />
  <!-- offcanvas area -->
</template>
