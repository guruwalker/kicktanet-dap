<template>
    <section>
        <div v-if="state.filteredCoursesByRoute.length > 0" class="tp-filter-mt pb-100">
            <div class="container">
                <div class="row">

                    <div class="tp-course-grid-box tp-tab">
                        <ul class="nav nav-tabs">
                            <li v-for="(cate, i) in tab_categories" :key="i" class="nav-item" role="presentation">
                                <button @click="handleCategory(cate.category)"
                                    :class="`nav-link ${activeTab === cate.category ? 'active' : ''}`">
                                    {{ cate.category }}
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content" id="myTabContent">
                        <div :class="`tab-pane fade ${listActive ? '' : 'show active'}`" id="home" role="tabpanel"
                            aria-labelledby="home-tab">

                            <div class="row">
                                <div v-for="course in state.filteredCoursesByRoute.slice(startItem, endItem)" :key="course.id"
                                    class="col-lg-4 col-md-6">
                                    <course-single-item :course="course" :remove-tag="true" />
                                </div>
                            </div>
                        </div>

                        <div :class="`tab-pane fade ${listActive ? 'show active' : ''}`" id="profile" role="tabpanel"
                            aria-labelledby="profile-tab">

                            <course-single-list-item-two
                                v-for="course in state.filteredCoursesByRoute.slice(startItem, endItem)" :key="course.id"
                                :course="course" />

                        </div>
                    </div>

                    <div class="col-lg-12">
                        <div class="tp-event-inner-pagination">
                            <div class="tp-dashboard-pagination pt-20">
                                <div class="tp-pagination">
                                    <ui-pagination :total-items="state.filteredCoursesByRoute.length"
                                        :items-per-page="per_page" :max-pages-shown="5" v-model="currentPage"
                                        @pageChange="updatePage" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <course-filter-reset v-else />

    </section>
</template>

<script setup lang="ts">
import { courseCategories } from '@/lib/get-course-fields';
import { useCourseFilter } from '@/pinia/use-course-filter';

type IProps = {
    listActive?: boolean
}

withDefaults(defineProps<IProps>(), {
    listActive: false
});

const tab_categories = [{ category: 'All Courses' }, ...courseCategories].slice(0, 7);

const state = useCourseFilter();
const activeTab = ref('All Courses');
const per_page = 6;
const length = computed(() => state.filteredCoursesByRoute?.length ?? 0)
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);

const router = useRouter();

function handleCategory(category: string) {
    activeTab.value = category;
    router.push({
        query: {
            ...router.currentRoute.value.query,
            category: router.currentRoute.value.query.category
                ? router.currentRoute.value.query.category.includes(category)
                    ? (router.currentRoute.value.query.category as string)
                        .split(",")
                        .filter((item: string) => item !== category)
                        .join(",")
                    : formatString(category)
                : formatString(category)
        }
    });
}
</script>