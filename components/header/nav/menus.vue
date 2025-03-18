<template>
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
          {{ menu.sm_mega_menus && sm_mega_title ? sm_mega_title : menu.title }}
        </NuxtLink>

        <!-- Home Dropdown -->
        <div v-if="menu.home_dropdown" class="tp-megamenu-main tp-megamenu-container">
          <header-nav-home-dropdown :home-dropdown="menu.home_dropdown" />
        </div>

        <!-- Small Mega Menus -->
        <div v-if="menu.sm_mega_menus" class="tp-megamenu-main tp-megamenu-small">
          <header-nav-sm-mega-menus :dropdown_menus="menu.sm_mega_menus" />
        </div>

        <!-- Pages Dropdown -->
        <div v-if="menu.pages_dropdown" class="tp-megamenu-main tp-megamenu-fullwidth">
          <header-nav-pages-dropdown :pages-dropdown="menu.pages_dropdown" />
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
</template>


<script setup lang="ts">
import menuData from "@/data/menu-data";
defineProps<{ sm_mega_title?: string }>();
</script>
