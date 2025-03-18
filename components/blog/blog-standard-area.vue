<template>
    <section class="tp-blog-standard-area p-relative pt-100 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="tp-postbox-wrapper">
                        <template v-for="blog in currentItems" :key="blog.id">
                            <blog-item-quote-one v-if="blog.postboxQuote1" :blog="blog" />
                            <blog-item-quote-two v-else-if="blog.postboxQuote2" :blog="blog" />
                            <blog-item-standard v-else :blog="blog" />
                        </template>
                    </div>
                    <div class="tp-event-inner-pagination tp-postbox-item-pagination">
                        <div class="tp-dashboard-pagination">
                            <div class="tp-pagination">
                                <ui-pagination :total-items="blog_standard_data.length" :items-per-page="per_page"
                                    :max-pages-shown="5" v-model="currentPage" @pageChange="updatePage"
                                    :is-center="false" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <!-- blog sidebar area -->
                    <blog-sidebar />
                    <!-- blog sidebar area -->
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { blog_standard_data } from "@/data/blog-data";

const per_page = 4;
const length = computed(() => blog_standard_data.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);

const currentItems = computed(() =>
    blog_standard_data.slice(startItem.value, endItem.value)
);
</script>