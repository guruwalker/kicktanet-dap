<template>
    <ul>
        <li>
            <a href="#" id="header-bottom__lang-toggle" @click.prevent="toggleLangMenu">
                <span>
                    <img src="/images/flag/flag-1.png" alt="flag-img" />
                    English
                </span>
                <span>
                    <svg-arrow-down />
                </span>
            </a>
            <ul :class="['header-bottom__lang-submenu', { open: openLang }]">
                <li><a href="#">Arabic</a></li>
                <li><a href="#">Spanish</a></li>
                <li><a href="#">Mandarin</a></li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">

const openLang = ref(false);

function toggleLangMenu() {
    openLang.value = !openLang.value;
}
</script>
