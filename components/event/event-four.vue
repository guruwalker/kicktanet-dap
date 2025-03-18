<template>
    <section class="tp-event-inner-area tp-event-inner-p pt-100 pb-100">
        <div class="container">
            <div class="row">
                <div v-for="item in currentItems" :key="item.id" class="col-lg-4 col-md-6">
                    <div class="tp-event-inner-item mb-30">
                        <div class="tp-event-inner-thumb">
                            <NuxtLink :to="`/event-details/${item.id}`">
                                <img :src="item.image" :alt="item.title" />
                            </NuxtLink>
                        </div>
                        <div class="tp-event-inner-content">
                            <span class="tp-event-inner-date">
                                {{ item.date.day }} {{ item.date.month }}, {{ item.date.year }}
                            </span>
                            <h4 class="tp-event-inner-title">
                                <NuxtLink :to="`/event-details/${item.id}`">{{ item.title }}</NuxtLink>
                            </h4>
                            <span class="tp-event-inner-location">
                                <svg-location-two /> United States
                            </span>
                            <div class="tp-event-inner-btn-box d-flex align-items-center justify-content-between">
                                <div class="tp-event-inner-user">
                                    <img src="/images/event/event/event-user.png" alt="user-img" />
                                </div>
                                <div class="tp-event-inner-btn">
                                    <NuxtLink :to="`/event-details/${item.id}`">
                                        Get Ticket
                                        <span>
                                            <svg-arrow-next-two />
                                        </span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-event-inner-pagination">
                        <div class="tp-dashboard-pagination pt-20">
                            <div class="tp-pagination">
                                <ui-pagination :total-items="event_data.length" :items-per-page="per_page"
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
import { event_data } from "@/data/event-data";

const per_page = 6;
const length = computed(() => event_data.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);

const currentItems = computed(() =>
    event_data.slice(startItem.value, endItem.value)
);
</script>
