<template>
    <div>
        <!-- assignment area start -->
        <div class="tpd-course-area">
            <div class="row">
                <div class="col-12">
                    <div class="tpd-table li-hover-none mb-25">
                        <ul>
                            <li class="tpd-table-head">
                                <div class="tpd-table-row">
                                    <div class="tpd-assign-info">
                                        <h4 class="tpd-table-title">Assignments Name</h4>
                                    </div>
                                    <div class="tpd-assign-mark">
                                        <h4 class="tpd-table-title">Total Marks</h4>
                                    </div>
                                    <div class="tpd-assign-submit">
                                        <h4 class="tpd-table-title">Total Submit</h4>
                                    </div>
                                    <div class="tpd-assign-details">
                                        <h4 class="tpd-table-title">Details</h4>
                                    </div>
                                </div>
                            </li>

                            <li v-for="(assignment, i) in assignmentData.slice(startItem, endItem)" :key="i">
                                <div class="tpd-table-row">
                                    <div class="tpd-assign-info">
                                        <h4 class="tpd-assign-title">{{ assignment.name }}</h4>
                                        <div class="tpd-student-info">
                                            <p>
                                                Course: <span>{{ assignment.course }}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="tpd-assign-mark">
                                        <span class="tpd-common-text">{{ assignment.totalMarks }}</span>
                                    </div>
                                    <div class="tpd-assign-submit">
                                        <h4 class="tpd-table-title">{{ assignment.totalSubmit }}</h4>
                                    </div>
                                    <div class="tpd-assign-details">
                                        <a class="tpd-border-btn" href="#">
                                            Details
                                        </a>
                                    </div>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- assignment area end -->


        <!-- pagination area start -->
        <div class="tp-dashboard-pagination pt-20">
            <div class="tp-pagination">
                <!-- pagination start -->
                <ui-pagination :total-items="assignmentData.length" :items-per-page="per_page" :max-pages-shown="5"
                    v-model="currentPage" @pageChange="updatePage" />
                <!-- pagination end -->
            </div>
        </div>
        <!-- pagination area end -->
    </div>
</template>

<script setup lang="ts">
const assignmentData = [
    {
        id: 1,
        name: "What is design thinking",
        course: "Graphic",
        totalMarks: 2,
        totalSubmit: 1,
    },
    {
        id: 2,
        name: "Web Design System in Figma",
        course: "Graphic",
        totalMarks: 2,
        totalSubmit: 1,
    },
    {
        id: 3,
        name: "Assignments 02",
        course: "Graphic",
        totalMarks: 2,
        totalSubmit: 1,
    },
    {
        id: 4,
        name: "Assignments 03",
        course: "Graphic",
        totalMarks: 2,
        totalSubmit: 1,
    },
    {
        id: 5,
        name: "Introduction to JavaScript",
        course: "Web Development",
        totalMarks: 20,
        totalSubmit: 18,
    },
    {
        id: 6,
        name: "Responsive Web Design",
        course: "Front-End Development",
        totalMarks: 12,
        totalSubmit: 9,
    },
    {
        id: 7,
        name: "User Research Methods",
        course: "UX Design",
        totalMarks: 8,
        totalSubmit: 7,
    },
];
const per_page = 5;
const length = computed(() => assignmentData.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);
</script>
