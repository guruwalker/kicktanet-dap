<template>
    <section class="tp-filter-mt">
        <div v-if="state.filteredCoursesByRoute.length > 0" class="container">
            <div class="row">
                <div class="col-lg-12">
                    <course-filter-select-box />
                </div>
            </div>

            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="row">
                        <div v-for="course in state.filteredCoursesByRoute.slice(startItem, endItem)" :key="course.id"
                            class="col-md-6">
                            <course-single-grid-item :course="course" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <course-single-list-item-two v-for="course in state.filteredCoursesByRoute.slice(startItem, endItem)"
                        :key="course.id" :course="course" />
                </div>
            </div>

            <div class="col-lg-12">
                <div class="tp-event-inner-pagination pb-100">
                    <div class="tp-dashboard-pagination pt-20">
                        <div class="tp-pagination">
                            <ui-pagination :total-items="state.filteredCoursesByRoute.length" :items-per-page="per_page"
                                :max-pages-shown="5" v-model="currentPage" @pageChange="updatePage" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <course-filter-reset v-else path="/course-open-filter" />
    </section>
</template>

<script setup lang="ts">
import { useCourseFilter } from '@/pinia/use-course-filter';


const state = useCourseFilter();
const per_page = 6;
const length = computed(() => state.filteredCoursesByRoute?.length ?? 0)
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);

</script>