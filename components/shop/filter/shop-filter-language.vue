<template>
    <div class="tp-shop-widget-content">
            <div class="tp-shop-widget-categories height">
                <ul>
                    <li v-for="(lang, i) in allLanguages" :key="i">
                        <a href="#" @click.prevent="handleLang(lang)">{{ lang }}</a>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script setup lang="ts">
import {allLanguages} from "@/lib/get-shop-fields";

const router = useRouter();
function handleLang(lang: string) {
    router.push(`/shop-grid?language=${lang.toLowerCase().split(' ').join('-')}`);
}
</script>