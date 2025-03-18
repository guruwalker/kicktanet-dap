<template>
    <div class="tp-main-menu-mobile d-xl-none">
        <nav class="tp-main-menu-content">
            <ul class="dropdown-opened">
                <li v-for="menu in menuData" :key="menu.id" :class="[
                    'has-dropdown',
                    (menu.home_dropdown || menu.pages_dropdown) ? 'tp-static' : '',
                    navTitle === menu.title ? 'dropdown-opened expanded' : ''
                ]">
                    <NuxtLink :to="menu.link" :class="(menu.home_dropdown || menu.pages_dropdown) ? 'tp-static' : ''">
                        {{ menu.title }}
                        <button @click="openMobileMenu(menu.title)"
                            :class="['dropdown-toggle-btn', navTitle === menu.title ? 'dropdown-opened' : '']"></button>
                    </NuxtLink>

                    <div v-if="menu.home_dropdown" class="tp-megamenu-main"
                        :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
                        <header-nav-home-dropdown :home-dropdown="menu.home_dropdown" />
                    </div>

                    <div v-if="menu.sm_mega_menus" class="tp-megamenu-main"
                        :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
                        <div class="megamenu-demo-small p-relative">
                            <div class="tp-megamenu-small-content">
                                <div class="row tp-gx-50">
                                    <div class="col-xl-6">
                                        <div class="tp-megamenu-list">
                                            <NuxtLink v-for="dm in menu.sm_mega_menus.slice(0, 4)" :key="dm.id"
                                                :to="dm.link">
                                                {{ dm.title }}
                                            </NuxtLink>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="tp-megamenu-list">
                                            <NuxtLink v-for="dm in menu.sm_mega_menus.slice(4)" :key="dm.id"
                                                :to="dm.link">
                                                {{ dm.title }}
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="menu.pages_dropdown" class="tp-megamenu-main"
                        :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
                        <header-nav-pages-dropdown :pages-dropdown="menu.pages_dropdown" />
                    </div>

                    <ul v-if="menu.dropdown_menus" class="tp-submenu"
                        :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
                        <li v-for="dm in menu.dropdown_menus" :key="dm.id">
                            <NuxtLink :to="dm.link">{{ dm.title }}</NuxtLink>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script setup lang="ts">
import menuData from "@/data/menu-data";

const navTitle = ref<string>('')

// Function to toggle the menu
const openMobileMenu = (menu: string) => {
    navTitle.value = navTitle.value === menu ? '' : menu
}
</script>