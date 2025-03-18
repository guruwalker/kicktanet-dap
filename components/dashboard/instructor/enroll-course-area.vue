<template>
    <!-- Dashboard Tab Area Start -->
    <div class="dashboader-area mb-30">
        <div class="tp-dashboard-tab">
            <h2 class="tp-dashboard-tab-title">Dashboard</h2>
            <div class="tp-dashboard-tab-list">
                <ul>
                    <li v-for="tab in tabLists" :key="tab.id">
                        <a @click="activeTab = tab.id" :class="{ active: activeTab === tab.id, pointer: true }">
                            {{ tab.title }} <span>({{ handleCourseCount(tab.id) }})</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- Dashboard Tab Area End -->

    <!-- Course Area Start -->
    <div v-if="myCourses.length > 0" class="course-area">
        <div class="row">
            <div v-for="(course, index) in myCourses.slice(startItem, endItem)" :key="index" class="col-xl-4 col-md-6">
                <course-single-dashboard-enroll-course :course="course" />
            </div>
        </div>
    </div>
    <div v-else class="tpd-dashboard-pending-course pt-120">
        <div class="row">
            <div class="col-12">
                <div class="tpd-withdraw-bg text-center">
                    <img src="/images/dashboard/bg/withdrawal-bg.png" alt="No Data Available" />
                    <p>No Data Available in this Section</p>
                </div>
            </div>
        </div>
    </div>
    <!-- Course Area End -->

    <!-- Pagination Area Start -->
    <div v-if="myCourses.length > 0 && filteredCourses.length >= limit" class="tp-dashboard-pagination pt-20">
        <div class="tp-pagination">
            <ui-pagination :total-items="myCourses.length" :items-per-page="limit" :max-pages-shown="5"
                v-model="currentPage" @pageChange="updatePage" />
        </div>
    </div>
    <!-- Pagination Area End -->
</template>

<script setup lang="ts">
import { online_courses_data } from "@/data/course-data";

const tabLists = [
   { id: 'enroll', title: 'Enrolled Courses' },
   { id: 'active-course', title: 'Active Courses' },
   { id: 'completed', title: 'Completed Courses' },
]

const limit = 5;

const activeTab = ref(tabLists[0].id);
const myCourses = ref([...online_courses_data]);

// Filtered courses based on the active tab
const filteredCourses = computed(() => {
    if (activeTab.value === "enroll") {
        return [...online_courses_data];
    } else if (activeTab.value === "active-course") {
        return [...online_courses_data].slice(0, 3);
    } else if (activeTab.value === "completed") {
        return [...online_courses_data].slice(3, 6);
    }
    return [];
});

const length = computed(() => myCourses.value.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, limit);

// Watch activeTab to update courses
watch(activeTab, () => {
    myCourses.value = filteredCourses.value;
});

// Function to handle the count for each tab
const handleCourseCount = (tabId: string) => {
    if (tabId === "enroll") {
        return online_courses_data.length;
    } else if (tabId === "active-course") {
        return [...online_courses_data].slice(0, 3).length;
    } else if (tabId === "completed") {
        return [...online_courses_data].slice(3, 6).length;
    }
    return 0;
};
</script>
