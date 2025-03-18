<template>
    <div class="tp-sidebar-wrapper pl-55">
        <!-- Sidebar Search -->
        <div class="tp-sidebar-widgets mb-50">
            <div class="tp-sidebar-content">
                <div class="tp-sidebar-search p-relative">
                    <form @submit.prevent="onSearch">
                        <input type="text" v-model="searchQuery" placeholder="Search..." />
                        <button class="tp-sidebar-search-btn" type="submit">
                            <span>
                                <svg-search-two />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Categories -->
        <div class="tp-sidebar-widget mb-50">
            <div class="tp-sidebar-content">
                <h5 class="tp-sidebar-widget-title">Categories</h5>
                <ul>
                    <li v-for="(category, index) in categories" :key="index">
                        <NuxtLink :to="category.link">{{ category.name }} <span>({{ category.count }})</span></NuxtLink>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Recent Posts -->
        <div class="tp-sidebar-widget mb-50">
            <h5 class="tp-sidebar-widget-title">Recent Posts</h5>
            <div v-for="(blog, index) in recentPosts" :key="blog.id" class="tp-recent-post-content">
                <span :class="['tp-recent-post-span', getTagClass(index)]">
                    {{ blog.tag }}
                </span>
                <h5 class="tp-recent-post-title">
                    <NuxtLink :to="`/blog-details/${blog.id}`">{{ blog.title }}</NuxtLink>
                </h5>
                <div class="tp-recent-post-tag">
                    <span>{{ blog.date }}</span>
                    <span>Minute</span>
                </div>
            </div>
        </div>

        <!-- Tag Cloud -->
        <div class="tp-sidebar-widget mb-50">
            <div class="tp-sidebar-content">
                <h5 class="tp-sidebar-widget-title">Tag</h5>
                <div class="tagcloud">
                    <a href="#">News</a>
                    <a href="#">Counseling</a>
                    <a href="#">Career</a>
                    <a href="#">Software</a>
                    <a href="#">Development</a>
                    <a href="#">Merket</a>
                    <a href="#">Life</a>
                    <a href="#">Research</a>
                    <a href="#">UI Design</a>
                    <a href="#">Team</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { blog_stories_data } from "@/data/blog-data";


const searchQuery = ref('');

// Categories
const categories = [
    { name: 'Articles', count: 8, link: '/blog-standard' },
    { name: 'Business', count: 4, link: '/blog-standard' },
    { name: 'Family & Divorce', count: 2, link: '/blog-standard' },
    { name: 'Web Design', count: 6, link: '/blog-standard' },
    { name: 'Software', count: 3, link: '/blog-standard' },
    { name: 'Video', count: 8, link: '/blog-standard' },
];

// Recent posts (show only the first 3)
const recentPosts = computed(() => blog_stories_data.slice(0, 3));

// Method to get the correct tag class for the recent post
const getTagClass = (index: number) => {
    return index === 1 ? 'gray' : index === 2 ? 'yellow' : '';
};

// Handle search submission
const onSearch = () => {
    console.log('Search submitted:', searchQuery.value);
};
</script>
