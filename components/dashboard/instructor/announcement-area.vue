<template>
    <section class="tpd-order-area">
        <div class="row">
            <div class="col-lg-6">
                <div class="tp-dashboard-section">
                    <h2 class="tp-dashboard-title">Announcements</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="tpd-announcement tpd-common-shadow d-flex align-items-center justify-content-between mb-70">
                    <div class="tpd-announcement-info d-flex align-items-center">
                        <div class="tpd-announcement-icon">
                            <span><img src="/images/dashboard/icon/announcement-icon.svg" alt="icon" /></span>
                        </div>
                        <div class="tpd-announcement-notification">
                            <span>Create Announcement</span>
                            <h4 class="tpd-announcement-notification-title">Notify all students of your course</h4>
                        </div>
                    </div>
                    <div class="text-lg-end">
                        <button class="tpd-border-btn active" :data-bs-target="`#${modalId}`" data-bs-toggle="modal">
                            Add New Announcement
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="tpd-dashboard-select-course">
                    <div class="tp-course-filter-select">
                        <ui-nice-select :options="[
                                { value: '', text: 'All Courses' },
                                { value: 'latest', text: 'New Courses 2024' },
                                { value: 'web-d', text: 'Web Design System in Figma' },
                                { value: 'interior', text: 'Interior design concepts Masterclass' },
                                { value: 'graphic', text: 'Graphic Design Masterclass' },
                                { value: 'bootstrap', text: 'Bootstrap 5 From Scratch' },
                            ]" 
                            :default-current="0" 
                            @on-change="handleCourseFilter" 
                            cls="wide" 
                            name="courseSort" 
                        />
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="tpd-dashboard-select-calender d-flex align-items-center justify-content-lg-end">
                    <div class="tpd-order-short-list mb-30">
                        <div class="tp-course-filter-select">
                            <ui-nice-select 
                               :options="[
                                    { value: 'desc', text: 'DESC' },
                                    { value: 'asc', text: 'SCFW' },
                                    { value: 'popularity', text: 'QESC' },
                                ]" 
                                :default-current="0" 
                                cls="wide" 
                                @on-change="handleCourseSorting" 
                                name="sorting" 
                            />
                        </div>
                    </div>
                    <div class="tpd-order-date-input mb-30 ml-10">
                        <form action="#">
                            <ui-date-picker :date="selectedDate" @update:date="updateDate" />
                            <span><svg-calender /></span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="tpd-table tpd-announcement-table mb-45">
                    <ul>
                        <li class="tpd-table-head">
                            <div class="tpd-table-row">
                                <div class="tpd-announcement-date">
                                    <h4 class="tpd-table-title">Date</h4>
                                </div>
                                <div class="tpd-announcement-announcement">
                                    <h4 class="tpd-table-title">Announcements</h4>
                                </div>
                                <div class="tpd-announcement-btn"></div>
                                <div class="tpd-announcement-action"></div>
                            </div>
                        </li>

                        <li v-for="item in announcementData" :key="item.id">
                            <div class="tpd-table-row">
                                <div class="tpd-announcement-date">
                                    <h4 class="tpd-common-text">{{ item.date }}</h4>
                                    <span class="tpd-announcement-time">{{ item.time }}</span>
                                </div>
                                <div class="tpd-announcement-announcement">
                                    <h4 class="tpd-common-text">{{ item.announcement }}</h4>
                                    <div class="tpd-course-wrap">
                                        <span class="tpd-course-name">{{ item.courseName }}</span>
                                        <span class="tpd-course-title">{{ item.courseTitle }}</span>
                                    </div>
                                </div>
                                <div class="tpd-announcement-btn">
                                    <button class="tpd-btn-details">Details</button>
                                </div>
                                <div class="tpd-announcement-action" ref="actionButtonRef">
                                    <div :class="`tpd-action-inexact-btn ${openActionId === item.id ? 'active' : ''}`">
                                        <button class="click" @click="toggleAction(item.id)">
                                            <svg-dashboard-dots />
                                        </button>
                                        <div class="tpd-action-click-tooltip bundle">
                                            <button>
                                                <span>
                                                    <svg-pen-three />
                                                </span>
                                                Edit
                                            </button>
                                            <button>
                                                <span>
                                                    <svg-dashboard-delete />
                                                </span>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

defineProps<{modalId: string}>();
const announcementData = [
    {
        id: 1,
        date: "August 27, 2024",
        time: "6:01 am",
        announcement: "Web Design System in Figma",
        courseName: "Course:",
        courseTitle: "Design Masterclass",
    },
    {
        id: 2,
        date: "August 27, 2024",
        time: "6:01 am",
        announcement: "Web Design System in Figma",
        courseName: "Course:",
        courseTitle: "Design Masterclass",
    },
    {
        id: 3,
        date: "August 27, 2024",
        time: "6:01 am",
        announcement: "Web Design System in Figma",
        courseName: "Course:",
        courseTitle: "Design Masterclass",
    },
    {
        id: 4,
        date: "August 27, 2024",
        time: "6:01 am",
        announcement: "Web Design System in Figma",
        courseName: "Course:",
        courseTitle: "Design Masterclass",
    },
    {
        id: 5,
        date: "August 27, 2024",
        time: "6:01 am",
        announcement: "Web Design System in Figma",
        courseName: "Course:",
        courseTitle: "Design Masterclass",
    }
];
function handleCourseFilter(item: { value: string, text: string }) {
    console.log(item);
}
function handleCourseSorting(item: { value: string, text: string }) {
    console.log(item);
}

const openActionId = ref<number | null>(null);

const toggleAction = (id: number) => {
    openActionId.value = openActionId.value === id ? null : id;
};

const closeAction = () => {
    openActionId.value = null;
};

const actionButtonRef = useClickOutside(closeAction);

const selectedDate = ref<Date>(new Date());

const updateDate = (newDate: Date) => {
    selectedDate.value = newDate;
};
</script>
