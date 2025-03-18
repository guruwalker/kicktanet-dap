<template>
    <div>

        <div class="row">
            <div class="col-lg-6">
                <div class="tpd-dashboard-search">
                    <div class="tp-header-2-search">
                        <form action="#">
                            <input type="text" placeholder="Search for Courses..." />
                            <button class="tp-header-2-search-btn" type="submit">
                                <span>
                                    <svg-search />
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="tpd-order-date-input text-lg-end mb-30">
                    <form action="#">
                        <ui-date-picker :date="selectedDate" @update:date="updateDate" />
                        <span><svg-calender /></span>
                    </form>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-lg-12">
                <div class="tpd-table mb-45">
                    <ul>
                        <li class="tpd-table-head">
                            <div class="tpd-table-row">
                                <div class="tpd-instructor-qa-student">
                                    <h4 class="tpd-table-title">Student</h4>
                                </div>
                                <div class="tpd-instructor-qa-question">
                                    <h4 class="tpd-table-title">Question</h4>
                                </div>
                                <div class="tpd-instructor-qa-reply">
                                    <h4 class="tpd-table-title">Reply</h4>
                                </div>
                                <div class="tpd-instructor-qa-status">
                                    <h4 class="tpd-table-title">Status</h4>
                                </div>
                                <div class="tpd-instructor-qa-btn"></div>
                                <div class="tpd-instructor-qa-action"></div>
                            </div>
                        </li>

                        <li v-for="(item, index) in studentQaData" :key="index">
                            <div class="tpd-table-row">
                                <div class="tpd-instructor-qa-student">
                                    <div class="tpd-reviews-profile d-flex align-items-center">
                                        <div class="tpd-reviews-thumb">
                                            <img :src="item.student.profileImg" :alt="item.student.name" />
                                        </div>
                                        <div class="tpd-reviews-text">
                                            <h4 class="tpd-reviews-thumb-title">{{ item.student.name }}</h4>
                                            <span class="tpd-common-date">{{ item.student.date }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="tpd-instructor-qa-question">
                                    <h4 class="tpd-common-text">{{ item.question }}</h4>
                                    <div class="tpd-course-wrap">
                                        <span class="tpd-course-name">Course:</span>
                                        <span class="tpd-course-title">{{ item.course }}</span>
                                    </div>
                                </div>
                                <div class="tpd-instructor-qa-reply">
                                    <h4 class="tpd-common-text">{{ item.replies }}</h4>
                                </div>
                                <div class="tpd-instructor-qa-status">
                                    <div :class="`tpd-status${item.status === 'complete' ? '-complete' : ''}`">
                                        <button><svg-check-two /></button>
                                    </div>
                                </div>
                                <div class="tpd-instructor-qa-btn">
                                    <a class="tpd-border-btn" href="#">Details</a>
                                </div>
                                <div class="tpd-instructor-qa-action" ref="actionButtonRef">
                                    <div :class="`tpd-action-inexact-btn ${openActionId === item.id ? 'active' : ''}`">
                                        <button class="click" @click="toggleAction(item.id)">
                                            <svg-dashboard-dots />
                                        </button>
                                        <div class="tpd-action-click-tooltip">
                                            <button>
                                                <span>
                                                    <svg-email-four />
                                                </span>
                                                Mark as Unread
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

    </div>
</template>

<script setup lang="ts">

const studentQaData = [
    {
        id: 1,
        student: {
            name: "Hanson Deck",
            date: "June 11, 2021 at 6:01 am",
            profileImg: "/images/dashboard/profile/reviews-profile-1.png"
        },
        question: "Hello! Could you explain the last lesson?",
        course: "New Course",
        replies: 2,
        status: "pending",
    },
    {
        id: 2,
        student: {
            name: "Indigo Violet",
            date: "June 12, 2021 at 2:15 pm",
            profileImg: "/images/dashboard/profile/reviews-profile-2.png"
        },
        question: "I'm struggling with the assignment.",
        course: "Advanced Math",
        replies: 3,
        status: "complete",
    },
];

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
