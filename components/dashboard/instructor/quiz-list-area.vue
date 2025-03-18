<template>
    <div>

        <!-- section-area-start -->
         <div class="section-area">
            <div class="tp-dashboard-section">
               <h2 class="tp-dashboard-title">My quiz Attempts</h2>
            </div>
         </div>
         <!-- section-area-end -->


         <!-- quiz list area start -->
         <div class="tpd-course-area">
            <div class="tpd-table mb-25">
               <ul>
                  <li class="tpd-table-head">
                     <div class="tpd-table-row">
                        <div class="tpd-quiz-info-sub">
                           <h4 class="tpd-table-title">Quiz Info</h4>
                        </div>
                        <div class="tpd-quiz-ques">
                           <h4 class="tpd-table-title">Qus</h4>
                        </div>
                        <div class="tpd-quiz-tm">
                           <h4 class="tpd-table-title">TM</h4>
                        </div>
                        <div class="tpd-quiz-ca-sub">
                           <h4 class="tpd-table-title">CA</h4>
                        </div>
                        <div class="tpd-quiz-result-sub">
                           <h4 class="tpd-table-title">Result</h4>
                        </div>
                        <div class="tpd-quiz-details">
                           <h4 class="tpd-table-title">Details</h4>
                        </div>
                     </div>
                  </li>

                     <li v-for="quiz in quizList.slice(startItem, endItem)" :key="quiz.id">
                        <div class="tpd-table-row">
                           <div class="tpd-quiz-info-sub">
                              <span class="tpd-common-date">{{quiz.date}}</span>
                              <h4 class="tpd-quiz-title">{{quiz.title}}</h4>
                              <div class="tpd-student-info">
                                 <p>
                                    <span>Student: </span> {{quiz.student}}
                                 </p>
                              </div>
                           </div>
                           <div class="tpd-quiz-ques">
                              <span class="tpd-common-text">{{quiz.questions}}</span>
                           </div>
                           <div class="tpd-quiz-tm">
                              <h4 class="tpd-table-title">{{quiz.totalMarks}}</h4>
                           </div>
                           <div class="tpd-quiz-ca-sub">
                              <h4 class="tpd-table-title">{{quiz.correctAnswers}}</h4>
                           </div>
                           <div class="tpd-quiz-result-sub">
                              <div class="tpd-badge-item">
                                 <span :class="`tpd-badge ${quiz.result === 'Pass' ? 'sucess' : 'danger'}`">
                                    {{quiz.result}}
                                 </span>
                              </div>
                           </div>
                           <div class="tpd-quiz-details">
                              <div class="tpd-quiz-details-btn">
                                 <a class="tpd-border-btn" href="#">
                                    Details
                                 </a>
                              </div>
                           </div>
                        </div>
                     </li>
               </ul>
            </div>
         </div>
         <!-- quiz list area end -->

        <!-- pagination area start -->
        <div class="tp-dashboard-pagination pt-20">
            <div class="tp-pagination">
                <!-- pagination start -->
                <ui-pagination :total-items="quizList.length" :items-per-page="per_page" :max-pages-shown="5"
                    v-model="currentPage" @pageChange="updatePage" />
                <!-- pagination end -->
            </div>
        </div>
        <!-- pagination area end -->
    </div>
</template>

<script setup lang="ts">

// quizList data
const quizList = [
   {
      id: 1,
      date: 'March 26, 2024',
      title: "What is design thinking's",
      student: 'Benjamin Evalent',
      questions: 2,
      totalMarks: 1,
      correctAnswers: 0,
      result: 'Fail',
   },
   {
      id: 2,
      date: 'December 26, 2023',
      title: 'Quiz Test 01',
      student: 'Benjamin Evalent',
      questions: 1,
      totalMarks: 0,
      correctAnswers: 1,
      result: 'Pass',
   },
   {
      id: 3,
      date: 'March 26, 2024',
      title: 'Quiz Test 02',
      student: 'Benjamin Evalent',
      questions: 2,
      totalMarks: 0,
      correctAnswers: 1,
      result: 'Pass',
   },
   {
      id: 4,
      date: 'August 23, 2023',
      title: 'Knowledge Check',
      student: 'Benjamin Evalent',
      questions: 1,
      totalMarks: 1,
      correctAnswers: 1,
      result: 'Pass',
   },
   {
      id: 5,
      date: 'March 26, 2024',
      title: 'Quiz Test 03',
      student: 'Benjamin Evalent',
      questions: 1,
      totalMarks: 0,
      correctAnswers: 0,
      result: 'Fail',
   },
   {
      id: 6,
      date: 'January 30, 2024',
      title: "What is design thinking's",
      student: 'Benjamin Evalent',
      questions: 2,
      totalMarks: 1,
      correctAnswers: 0,
      result: 'Pass',
   },
];
const per_page = 5;
const length = computed(() => quizList.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);
</script>
