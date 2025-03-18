<template>
    <div class="tpd-course-area">
        <div class="tpd-dashboard-filter d-flex justify-content-between align-items-center mb-30">
            <div class="tpd-dashboard-search">
                <div class="tp-header-2-search">
                    <form action="#">
                        <input type="text" placeholder="Search for Courses..." />
                        <button class="tp-header-2-search-btn" type="submit">
                            <svg-search />
                        </button>
                    </form>
                </div>
            </div>
            <div class="tpd-dashboard-select">
                <div class="tp-course-filter-select">
                    <ui-nice-select 
                        :options="[
                            { value: '1', text: 'Free' },
                            { value: '2', text: 'Newest' },
                            { value: '3', text: 'Oldest' }
                        ]" 
                        :default-current="0" 
                        cls="wide" 
                        placeholder="Default" 
                        @on-change="handleCourseFilter"
                        name="filter" 
                    />
                </div>
            </div>
        </div>

        <div class="tpd-table li-hover-none mb-25">
            <ul>
                <li class="tpd-table-head">
                    <div class="tpd-table-row">
                        <div class="tpd-assign-info analytic">
                            <h4 class="tpd-table-title">Course Name</h4>
                        </div>
                        <div class="tpd-assign-mark analytic">
                            <h4 class="tpd-table-title">Learners</h4>
                        </div>
                        <div class="tpd-assign-submit analytic">
                            <h4 class="tpd-table-title">Earnings</h4>
                        </div>
                        <div class="tpd-assign-details">
                            <h4 class="tpd-table-title">Rating</h4>
                        </div>
                    </div>
                </li>

                <li v-for="(course, i) in analyticsCourseData.slice(startItem, endItem)" :key="i">
                    <div class="tpd-table-row">
                        <div class="tpd-assign-info analytic">
                            <h4 class="tpd-assign-title">{{ course.courseName }}</h4>
                            <div class="tpd-student-info">
                                <p>
                                    Lesson: <span>{{ course.lessons }}</span>
                                </p>
                                <p>
                                    Assignment: <span>{{ course.assignments }}</span>
                                </p>
                                <p>
                                    Quiz <span>{{ course.quizzes }}</span>
                                </p>
                            </div>
                        </div>
                        <div class="tpd-assign-mark analytic">
                            <span class="tpd-common-text">{{ course.learners }}</span>
                        </div>
                        <div class="tpd-assign-submit analytic">
                            <h4 class="tpd-table-title">{{ formatPrice(course.earnings, true) }}</h4>
                        </div>
                        <div class="tpd-assign-details analytic">
                            <a class="tpd-border-btn" href="#">
                                Details
                            </a>
                            <button>
                                <svg-dashboard-refresh />
                            </button>
                        </div>
                    </div>
                </li>

            </ul>
        </div>


        <div class="tp-dashboard-pagination pt-20">
            <div class="tp-pagination">
                <ui-pagination :total-items="analyticsCourseData.length" :items-per-page="per_page" :max-pages-shown="5"
                    v-model="currentPage" @pageChange="updatePage" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { formatPrice } from '@/lib/format-price';
// analytics course data
const analyticsCourseData = [
    {
        id: 1,
        courseName: "Product Design",
        learners: 4,
        earnings: 0.00,
        rating: 1,
        lessons: 0,
        assignments: 0,
        quizzes: 1,
    },
    {
        id: 2,
        courseName: "Graphic Design Masterclass",
        learners: 2,
        earnings: 0.00,
        rating: 1,
        lessons: 0,
        assignments: 0,
        quizzes: 1,
    },
    {
        id: 3,
        courseName: "Design System in Figma",
        learners: 2,
        earnings: 0.00,
        rating: 1,
        lessons: 0,
        assignments: 0,
        quizzes: 1,
    },
    {
        id: 4,
        courseName: "3D Motion Design",
        learners: 2,
        earnings: 0.00,
        rating: 1,
        lessons: 0,
        assignments: 0,
        quizzes: 1,
    },
    {
        id: 5,
        courseName: "App Development",
        learners: 4,
        earnings: 0.00,
        rating: 1,
        lessons: 0,
        assignments: 0,
        quizzes: 1,
    },
    {
        id: 6,
        courseName: "Web Development Bootcamp",
        learners: 5,
        earnings: 100.00,
        rating: 4,
        lessons: 10,
        assignments: 3,
        quizzes: 2,
    },
    {
        id: 7,
        courseName: "UI/UX Design Fundamentals",
        learners: 3,
        earnings: 50.00,
        rating: 3,
        lessons: 8,
        assignments: 2,
        quizzes: 1,
    },
    {
        id: 8,
        courseName: "Python Programming",
        learners: 7,
        earnings: 150.00,
        rating: 5,
        lessons: 15,
        assignments: 4,
        quizzes: 3,
    },
    {
        id: 9,
        courseName: "React Development",
        learners: 6,
        earnings: 200.00,
        rating: 5,
        lessons: 12,
        assignments: 5,
        quizzes: 2,
    },
    {
        id: 10,
        courseName: "Digital Marketing",
        learners: 4,
        earnings: 75.00,
        rating: 3,
        lessons: 6,
        assignments: 2,
        quizzes: 1,
    },
];

const per_page = 6;
const length = computed(() => analyticsCourseData.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);

function handleCourseFilter(item: { value: string, text: string }) {
    console.log(item);
}
</script>
