<template>
    <div class="tp-main-menu-mobile d-xl-none">
        <nav class="tp-main-menu-content">
            <ul class="dropdown-opened">
                <li v-for="menu in menu_data_2" :key="menu.id" :class="[
                    'has-dropdown',
                    (menu.home_dropdown || menu.academic_dropdown || menu.course_dropdown || menu.pages_dropdown) ? 'tp-static' : '',
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

                    <div v-if="menu.academic_dropdown" class="tp-megamenu-main"
                        :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
                        <header-nav-academic-dropdown :academic_dropdown="menu.academic_dropdown" />
                    </div>

                    <div v-if="menu.course_dropdown" class="tp-megamenu-main tp-megamenu-courses"
                        :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
                        <header-nav-course-dropdown :course-dropdown="menu.course_dropdown" />
                    </div>

                    <ul v-if="menu.dashboard_dropdown" class="tp-submenu"
                        :class="{ 'dropdown-opened': navTitle === menu.title }"
                        :style="{ display: navTitle === menu.title ? 'block' : 'none' }">
                        <li v-for="dpm in menu.dashboard_dropdown" :key="dpm.id"
                            :class="['has-dropdown', subMenu === dpm.title ? 'dropdown-opened expanded' : '']">
                            <NuxtLink :to="dpm.link">
                                {{ dpm.title }}
                                <button @click="openSubMobileMenu(dpm.title)"
                                    :class="['dropdown-toggle-btn', subMenu === dpm.title ? 'dropdown-opened' : '']"></button>
                            </NuxtLink>
                            <ul class="tp-submenu" :style="{ display: subMenu === dpm.title ? 'block' : 'none' }">
                                <li v-for="dm in dpm.dropdown_menus" :key="dm.id">
                                    <NuxtLink :to="dm.link">{{ dm.title }}</NuxtLink>
                                </li>
                            </ul>
                        </li>
                    </ul>

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
import { menu_data_2 } from "@/data/menu-data";

const navTitle = ref<string>('')
const subMenu = ref<string>('')

// Toggles the main menu
const openMobileMenu = (menu: string) => {
    navTitle.value = navTitle.value === menu ? '' : menu
    subMenu.value = '' // Reset sub-menu when switching main menu
}

// Toggles the sub-menu
const openSubMobileMenu = (s_menu: string) => {
    subMenu.value = subMenu.value === s_menu ? '' : s_menu
}
</script>