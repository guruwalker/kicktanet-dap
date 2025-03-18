<template>
    <div :class="['tp-search-area', { opened: isSearchOpen }]">
        <div class="tp-search-inner p-relative">
            <div class="tp-search-close">
                <button class="tp-search-close-btn" @click="hide">
                    <svg-close-two clr="#57595F" />
                </button>
            </div>
            <div class="container">
                <div class="row">
                    <div class="tp-search-wrapper">
                        <div class="col-lg-9">
                            <div class="tp-search-content blue">
                                <div class="search p-relative">
                                    <input type="text" class="search-input" placeholder="What are you looking for?" />
                                    <button class="tp-search-icon">
                                        <svg-search />
                                    </button>
                                </div>
                                <div class="tp-search-course-wrap">
                                    <h3 class="tp-search-course-title">OUR TOP Program</h3>
                                    <div class="row">
                                        <div v-for="item in topPrograms" :key="item.id"
                                            class="col-xl-3 col-lg-4 col-sm-6">
                                            <div class="tp-search-course-item mb-30">
                                                <div class="tp-search-course-thumb mb-5">
                                                    <NuxtLink :to="`/course-details/${item.id}`">
                                                        <img :src="item.thumbnail" alt="search-img" width="186" />
                                                    </NuxtLink>
                                                </div>
                                                <div class="tp-search-course-content">
                                                    <div class="tp-search-course-star">
                                                        <span v-for="star in 5" :key="star">
                                                            <svg-star-three />
                                                        </span>
                                                    </div>
                                                    <h4 class="tp-search-course-item-title">
                                                        <NuxtLink :to="`/course-details/${item.id}`">
                                                            {{ item.category }}
                                                        </NuxtLink>
                                                    </h4>
                                                    <div class="tp-search-course-price">
                                                        <span>{{ formatPrice(item.price, true) }}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div @click="hide" :class="['body-overlay', { opened: isSearchOpen }]" />
</template>

<script setup lang="ts">
import { online_courses_data } from '@/data/course-data';
import { formatPrice } from '@/lib/format-price';

defineProps<{ isSearchOpen: boolean }>();

const topPrograms = computed(() => online_courses_data.slice(0, 4));

const emit = defineEmits<{
    (event: 'update:searchOpen'): void;
}>();

function hide() {
    emit('update:searchOpen');
}
</script>
