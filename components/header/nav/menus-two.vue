<template>
    <nav class="tp-main-menu-content">
        <ul>
            <li v-for="menu in menu_data" :key="menu.id" :class="[
                'has-dropdown',
                (menu.home_dropdown ||
                    menu.academic_dropdown ||
                    menu.course_dropdown ||
                    menu.pages_dropdown) ? 'tp-static' : ''
            ]">
                <NuxtLink :to="menu.link">
                    {{ menu.title }}
                </NuxtLink>

                <div v-if="menu.home_dropdown" class="tp-megamenu-main tp-megamenu-container">
                    <header-nav-home-dropdown :home-dropdown="menu.home_dropdown" />
                </div>

                <div v-if="menu.academic_dropdown" class="tp-megamenu-main tp-megamenu-academics">
                    <header-nav-academic-dropdown :academic_dropdown="menu.academic_dropdown" />
                </div>

                <div v-if="menu.course_dropdown" class="tp-megamenu-main tp-megamenu-courses">
                    <header-nav-course-dropdown :course-dropdown="menu.course_dropdown" />
                </div>

                <ul v-if="menu.dashboard_dropdown" class="tp-submenu">
                    <li v-for="dpm in menu.dashboard_dropdown" :key="dpm.id" class="has-dropdown">
                        <NuxtLink :to="dpm.link">{{ dpm.title }}</NuxtLink>
                        <ul class="tp-submenu">
                            <li v-for="dm in dpm.dropdown_menus" :key="dm.id">
                                <NuxtLink :to="dm.link">{{ dm.title }}</NuxtLink>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div v-if="menu.pages_dropdown" class="tp-megamenu-main tp-megamenu-fullwidth">
                    <header-nav-pages-dropdown :pages-dropdown="menu.pages_dropdown" />
                </div>

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
import { menu_data_2 } from "@/data/menu-data";

const props = withDefaults(defineProps<{ showAllMenus?: boolean }>(), {
    showAllMenus: true
});

const menu_data = computed(() => {
    return props.showAllMenus ? menu_data_2 : menu_data_2.filter(m => m.id !== 2);
});
</script>