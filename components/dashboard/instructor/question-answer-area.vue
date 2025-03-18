<template>
    <section class="tpd-order-area">
        <div class="row">
            <div class="col-lg-6">
                <div class="tp-dashboard-section">
                    <h2 class="tp-dashboard-title">Question & Answer</h2>
                </div>
            </div>
            <div class="col-lg-12">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="tpd-dashboard-qa-tab mb-30">
                            <div class="nav nav-tabs tpd-dashboard-qa-tab-bg" id="myTab" role="tablist">

                                <button v-for="(tab) in tabs" :key="tab" @click="activeTab = tab" :class="`nav-link ${activeTab === tab ? 'active' : ''} ${tab === 'Student' ? 'monthly' : 'yearly'}`">
                                    {{tab }}
                                </button>

                                <div class="test"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="tpd-dashboard-qa-select mb-30">
                            <div class="tp-course-filter-select">
                                <ui-nice-select :options="[
                                        { value: '1', text: 'Free' },
                                        { value: '2', text: 'Newest' },
                                        { value: '3', text: 'Oldest' }
                                   ]" 
                                    :default-current="0" 
                                    cls="wide" 
                                    placeholder="Default" 
                                    @on-change="handleFilter"
                                    name="filter" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="tab-content" id="myTabContent">

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

                            <!-- list items -->
                            <dashboard-instructor-question-answer-list-item v-for="item in questionAnswerData" :key="item.id" :item="item" />
                            <!-- list items -->


                        </ul>
                    </div>

                </div>
            </div>

        </div>
    </section>
</template>

<script setup lang="ts">
// student q-a data
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
// instructor q-a data
const instructorQaData = [
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
    {
        id: 3,
        student: {
            name: "Benjamin Evalent",
            date: "June 13, 2021 at 9:45 am",
            profileImg: "/images/dashboard/profile/reviews-profile-3.png"
        },
        question: "Can you clarify the project requirements?",
        course: "Physics 101",
        replies: 1,
        status: "pending",
    },
    {
        id: 4,
        student: {
            name: "Jennifer Lang",
            date: "June 14, 2021 at 8:30 am",
            profileImg: "/images/dashboard/profile/reviews-profile-4.png"
        },
        question: "What is the due date for the final project?",
        course: "Art History",
        replies: 5,
        status: "complete",
    },
    {
        id: 5,
        student: {
            name: "Michael Lee",
            date: "June 15, 2021 at 3:20 pm",
            profileImg: "/images/dashboard/profile/reviews-profile-2.png"
        },
        question: "Is there any extra credit available?",
        course: "Chemistry Basics",
        replies: 0,
        status: "pending",
    },
    {
        id: 6,
        student: {
            name: "Sophia Blake",
            date: "June 16, 2021 at 5:00 pm",
            profileImg: "/images/dashboard/profile/reviews-profile-1.png"
        },
        question: "Can you review my essay before submission?",
        course: "English Literature",
        replies: 4,
        status: "complete",
    },
    {
        id: 7,
        student: {
            name: "David Kim",
            date: "June 17, 2021 at 12:00 pm",
            profileImg: "/images/dashboard/profile/reviews-profile-4.png"
        },
        question: "I have trouble understanding the last chapter.",
        course: "Economics",
        replies: 2,
        status: "pending",
    },
    {
        id: 8,
        student: {
            name: "Rachel Green",
            date: "June 18, 2021 at 10:15 am",
            profileImg: "/images/dashboard/profile/reviews-profile-3.png"
        },
        question: "What resources do you recommend for exam preparation?",
        course: "Business Administration",
        replies: 3,
        status: "complete",
    }
];
// tabs
const tabs = ["Student", "Instructor"];

const activeTab = ref(tabs[0]);

const questionAnswerData = computed(() => {
    if (activeTab.value === "Student") {
        return [...studentQaData];
    } else if (activeTab.value === "Instructor") {
        return [...instructorQaData];
    }
    return [];
});

function handleFilter(item: { value: string, text: string }) {
    console.log(item);
}
</script>