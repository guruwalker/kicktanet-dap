<template>
    <div class="tp-shop-widget-content">
        <div class="tp-shop-widget-categories height">
            <ul>
                <li v-for="(author, i) in bookAuthors" :key="i">
                    <a href="#" @click.prevent="handleAuhtor(author.author)">
                        {{author.author}}<span>{{author.authorCount}}</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import {bookAuthors} from "@/lib/get-shop-fields";

const router = useRouter();
function handleAuhtor(author: string) {
    router.push(`/shop-grid?author=${author.toLowerCase().split(" ").join("-")}`);
}
</script>