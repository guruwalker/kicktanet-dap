<template>
    <div class="back-to-top-wrapper" ref="backToTopWrapper">
        <button id="back_to_top" type="button" class="back-to-top-btn" @click="scrollToTop">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6L6 1L1 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Define type for the ref element
const backToTopWrapper = ref<HTMLElement | null>(null);

const handleScroll = (): void => {
    if (backToTopWrapper.value) {
        if (window.scrollY > 200) {
            backToTopWrapper.value.classList.add("back-to-top-btn-show");
        } else {
            backToTopWrapper.value.classList.remove("back-to-top-btn-show");
        }
    }
};

const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>