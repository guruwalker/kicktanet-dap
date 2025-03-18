<template>
    <main class="tp-dashboard-body-bg p-relative">
        <div class="tpd-dashboard-wrap-bg"
            style="background-image: url(/images/dashboard/bg/dashboard-bg-shape-1.jpg);">

            <!-- create new course area start -->
            <section class="tpd-new-course-area pt-80 pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="tpd-new-course-wrap">
                                <div class="tpd-new-course-box">

                                    <div class="accordion" id="accordionPanelsStayOpenExample">

                                        <!-- course info area start -->
                                        <course-create-info-area/>
                                        <!-- course info area end -->

                                        <!-- course intro video -->
                                        <course-create-intro-video/>
                                        <!-- course intro video -->

                                        <!-- course builder area -->
                                        <course-create-build-area/>
                                        <!-- course builder area -->

                                        <!-- course instructor area -->
                                        <course-create-instructor/>
                                        <!-- course instructor area -->

                                        <!-- course attachment area -->
                                        <course-create-attachment/>
                                        <!-- course attachment area -->

                                        <!-- course additional info -->
                                        <ClientOnly>
                                            <course-create-additional-info/>
                                        </ClientOnly>
                                        <!-- course additional info -->

                                        <!-- course prerequisites -->
                                        <ClientOnly>
                                            <course-create-prerequisites/>
                                        </ClientOnly>
                                        <!-- course prerequisites -->

                                        <!-- course certificate -->
                                        <course-create-certificate/>
                                        <!-- course certificate -->

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="tpd-course-enroll-list">
                                <h2 class="tp-dashboard-title">Course Upload Tips</h2>
                                <ul>
                                    <li v-for="(tip, index) in listData" :key="index">
                                        <span>{{ index + 1 }}. </span>
                                        {{ tip }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- {/* create new course area end */} -->

        </div>
    </main>
</template>

<script setup lang="ts">

const listData = [
    "Set the Course Price option or make it free.",
    "Standard size for the course thumbnail is 700x430.",
    "Video section controls the course overview video.",
    "Course Builder is where you create & organize a course.",
    "Add Topics in the Course Builder section to create lessons, quizzes, and assignments.",
];

</script>