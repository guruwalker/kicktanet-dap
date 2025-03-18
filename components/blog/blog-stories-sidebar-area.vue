<template>
    <section class="tp-blog-stories-area p-relative pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div v-for="blog in currentItems" :key="blog.id" class="col-lg-6 col-md-6">
                            <blog-item-two :blog="blog" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <!-- blog sidebar area -->
                    <blog-sidebar />
                    <!-- blog sidebar area -->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-event-inner-pagination">
                        <div class="tp-dashboard-pagination">
                            <div class="tp-pagination">
                                    <ui-pagination :total-items="blog_stories_data.length" :items-per-page="per_page"
                                    :max-pages-shown="5" v-model="currentPage" @pageChange="updatePage"/>
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

const per_page = 6;
const length = computed(() => blog_stories_data.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);

const currentItems = computed(() =>
    blog_stories_data.slice(startItem.value, endItem.value)
);
</script>