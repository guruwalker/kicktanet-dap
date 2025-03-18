<template>
    <section class="tp-grid-sidebar-area pb-100">
        <div class="container">
            <div class="row" v-if="state.filteredCoursesByRoute.length > 0">
                <div class="col-lg-3">
                    <!-- sidebar area -->
                    <div class="tp-grid-sidebar-left">
                        <div class="tp-grid-widget-box">
                            <div class="tp-grid-widget-item">
                                <h4 class="tp-grid-widget-title">All categories</h4>
                                <course-filter-category cls='grid' />
                            </div>
                            <div class="tp-grid-widget-item">
                                <h4 class="tp-grid-widget-title">Instructors</h4>
                                <course-filter-instructor cls='grid' />
                            </div>
                            <div class="tp-grid-widget-item">
                                <h4 class="tp-grid-widget-title">Price</h4>
                                <div class="tp-filter-widget-radio">
                                    <course-filter-price cls="grid" />
                                </div>
                            </div>
                            <div class="tp-grid-widget-item">
                                <h4 class="tp-grid-widget-title">Language</h4>
                                <course-filter-language cls='grid' :checkbox="true" />
                            </div>
                        </div>
                        <div class="tp-grid-widget-btn mt-15">
                            <a class='pointer' @click.prevent="resetFilter"> 
                                <span> <svg-close /></span> Clear all Filters
                            </a>
                        </div>
                    </div>
                    <!-- sidebar area -->
                </div>

                <div class="col-lg-9">
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <div class="tp-grid-sidebar-right">
                                <div class="row">

                                    <div v-for="course in state.filteredCoursesByRoute.slice(startItem, endItem)"
                                        :key="course.id" class="col-lg-4 col-md-6">
                                        <course-single-item :course="course" :remove-tag="true" />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="tp-list-sidebar-right">
                                <div class="row">

                                    <!-- list item start -->
                                    <course-single-list-item-two
                                        v-for="course in state.filteredCoursesByRoute.slice(startItem, endItem)"
                                        :key="course.id" :course="course" />
                                    <!-- list item end -->

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="tp-event-inner-pagination" v-if="state.filteredCoursesByRoute.length > per_page">
                        <div class="tp-dashboard-pagination pt-20">
                            <div class="tp-pagination">

                                <!-- pagination start -->
                                <ui-pagination :total-items="state.filteredCoursesByRoute.length" :items-per-page="per_page"
                                    :max-pages-shown="5" v-model="currentPage" @pageChange="updatePage" />
                                <!-- pagination end -->
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <course-filter-reset v-else path="/course-with-sidebar" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { useCourseFilter } from '@/pinia/use-course-filter';


const state = useCourseFilter();
const per_page = 6;
const length = computed(() => state.filteredCoursesByRoute?.length ?? 0)
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);

const router = useRouter();
function resetFilter() {
    router.push("/course-with-sidebar");
}
</script>
