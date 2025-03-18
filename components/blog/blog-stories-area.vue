<template>
    <section class="tp-blog-stories-area p-relative pb-120">
        <div class="container">
            <div class="row">
                <div v-for="blog in currentItems" :key="blog.id" class="col-lg-4 col-md-6">
                    <blog-item-two :blog="blog" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-event-inner-pagination">
                        <div class="tp-dashboard-pagination">
                            <div class="tp-pagination">
                                    <ui-pagination :total-items="blog_stories_data.length" :items-per-page="6"
                                        :max-pages-shown="5" v-model="currentPage" @pageChange="updatePage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { blog_stories_data } from "@/data/blog-data";

const length = computed(() => blog_stories_data.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, 6);

const currentItems = computed(() =>
    blog_stories_data.slice(startItem.value, endItem.value)
);
</script>