<template>
    <div>

        <!-- quiz area start -->
        <div class="tpd-course-area">
            <div class="tpd-table mb-25">
                <ul>
                    <li class="tpd-table-head">
                        <div class="tpd-table-row">
                            <div class="tpd-quiz-info">
                                <h4 class="tpd-table-title">Quiz Info</h4>
                            </div>
                            <div class="tpd-quiz-ques">
                                <h4 class="tpd-table-title">Qus</h4>
                            </div>
                            <div class="tpd-quiz-tm">
                                <h4 class="tpd-table-title">TM</h4>
                            </div>
                            <div class="tpd-quiz-ca">
                                <h4 class="tpd-table-title">CA</h4>
                            </div>
                            <div class="tpd-quiz-result">
                                <h4 class="tpd-table-title">Result</h4>
                            </div>
                            <div class="tpd-quiz-details">
                                <h4 class="tpd-table-title">Details</h4>
                            </div>
                        </div>
                    </li>

                    <li v-for="(quiz, i) in quizData.slice(startItem, endItem)" :key="i">
                        <div class="tpd-table-row">
                            <div class="tpd-quiz-info">
                                <span class="tpd-common-date">{{ quiz.date }}</span>
                                <h4 class="tpd-quiz-title">{{ quiz.title }}</h4>
                                <div class="tpd-student-info">
                                    <p>
                                        <span>Student: </span> {{ quiz.student }}
                                    </p>
                                </div>
                            </div>
                            <div class="tpd-quiz-ques">
                                <span class="tpd-common-text">{{ quiz.questions }}</span>
                            </div>
                            <div class="tpd-quiz-tm">
                                <h4 class="tpd-table-title">{{ quiz.totalMarks }}</h4>
                            </div>
                            <div class="tpd-quiz-ca">
                                <h4 class="tpd-table-title">{{ quiz.correctAnswers }}</h4>
                            </div>
                            <div class="tpd-quiz-result">
                                <div class="tpd-badge-item">
                                    <span :class="`tpd-badge ${quiz.resultClass}`">{{ quiz.result }}</span>
                                </div>
                            </div>
                            <div class="tpd-quiz-details">
                                <div class="tpd-quiz-details-box d-flex">
                                    <div class="tpd-quiz-details-btn mr-15">
                                        <nuxt-link class="tpd-border-btn" href="/dashboard/instructor-quiz">
                                            Details
                                        </nuxt-link>
                                    </div>
                                    <div class="tpd-action-inexact-btn">
                                        <button class="border-bg">
                                            <svg-dashboard-delete />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <!-- quiz area end -->

        <!-- pagination area start -->
        <div class="tp-dashboard-pagination pt-20">
            <div class="tp-pagination">
                <!-- pagination start -->
                <ui-pagination :total-items="quizData.length" :items-per-page="per_page" :max-pages-shown="5"
                    v-model="currentPage" @pageChange="updatePage" />
                <!-- pagination end -->
            </div>
        </div>
        <!-- pagination area end -->

    </div>
</template>

<script setup lang="ts">
// quiz data
const quizData = [
    {
        date: "March 26, 2024",
        title: "What is design thinking",
        student: "Benjamin Evalent",
        questions: 2,
        totalMarks: 1,
        correctAnswers: 0,
        result: "Fail",
        resultClass: "danger",
    },
    {
        date: "March 26, 2024",
        title: "Quiz Test 01",
        student: "Benjamin Evalent",
        questions: 1,
        totalMarks: 0,
        correctAnswers: 1,
        result: "Pass",
        resultClass: "sucess",
    },
    {
        date: "March 26, 2024",
        title: "Quiz Test 02",
        student: "Benjamin Evalent",
        questions: 2,
        totalMarks: 0,
        correctAnswers: 1,
        result: "Pass",
        resultClass: "sucess",
    },
    {
        date: "March 26, 2024",
        title: "Knowledge Check",
        student: "Benjamin Evalent",
        questions: 1,
        totalMarks: 1,
        correctAnswers: 1,
        result: "Pass",
        resultClass: "sucess",
    },
    {
        date: "March 26, 2024",
        title: "Quiz Test 03",
        student: "Benjamin Evalent",
        questions: 1,
        totalMarks: 0,
        correctAnswers: 0,
        result: "Fail",
        resultClass: "danger",
    },
];

const per_page = 4;
const length = computed(() => quizData.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);
</script>