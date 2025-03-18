<template>
    <section class="tp-course-details-area grey-bg pt-100 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="tp-course-details-wrapper">
                        <div class="tp-course-details-heading">
                            <h3 class="tp-course-details-title">Computer Science</h3>
                            <p>Earn a bachelor's in computer science degree from Acadia University and develop the
                                software engineering, project management and programming skills to impact how technology
                                will change and transform our world.</p>
                            <div class="tp-course-details-thumb">
                                <img src="/images/course/details/course-details-thumb-1.jpg" alt="">
                            </div>
                            <h3 class="tp-course-details-title">Overview</h3>
                            <p>How we do business, how we communicate and what we do for entertainment are all being
                                transformed by computer scientists and software developers. Quickly changing landscapes
                                in these fields and beyond provide opportunities for people with advanced computer
                                science skills to profoundly impact the world. Biola's computer science major allows
                                future computer scientists to grow their knowledge in the field of computer science,
                                while honing their abilities to innovate, program, solve problems and succeed across a
                                range of careers.</p>
                            <p>Here's an overview of key topics and concepts within Computer Science:</p>
                            <div class="tp-course-details-list">
                                <ul>
                                    <li><span><svg-check-three /></span>Programming</li>
                                    <li><span><svg-check-three /></span>Big Data and Data Science</li>
                                    <li><span><svg-check-three /></span>Artificial Intelligence (AI) and Machine Learning</li>
                                    <li><span><svg-check-three /></span>Software Development</li>
                                    <li><span><svg-check-three /></span>Algorithms and Data Structures</li>
                                    <li><span><svg-check-three /></span>Database Management</li>
                                </ul>
                            </div>
                            <p>The B.S.c in Computer Science offers expert training in computation and information
                                processing strategies through a varied list of computer science courses.</p>
                            <h3 class="tp-course-details-title">Core Curriculum (Traditional Undergraduate)</h3>

                            <div class="tp-course-details">
                                <div v-for="(semester, index) in courseDetailsData" :key="index"
                                    class="tp-course-details-box">
                                    <span>Semester {{ semester.semesterNumber }}</span>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="tp-course-details-table mb-45">
                                                <ul>
                                                    <li class="tp-course-details-table-head">
                                                        <div class="tp-course-table-row">
                                                            <div class="tp-course-id">
                                                                <h4 class="tp-table-title">Course ID</h4>
                                                            </div>
                                                            <div class="tp-course-sub">
                                                                <h4 class="tp-table-title">Course Title</h4>
                                                            </div>
                                                            <div class="tp-course-type">
                                                                <h4 class="tp-table-title">Course Type</h4>
                                                            </div>
                                                            <div class="tp-course-credits">
                                                                <h4 class="tp-table-title">Credits</h4>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li v-for="(course, idx) in semester.courses" :key="idx"
                                                        class="tp-course-table-inner">
                                                        <div class="tp-course-table-row">
                                                            <div class="tp-course-id">
                                                                <h4 class="tp-table-inner">{{ course.id }}</h4>
                                                            </div>
                                                            <div class="tp-course-sub">
                                                                <h4 class="tp-table-inner">{{ course.title }}</h4>
                                                            </div>
                                                            <div class="tp-course-type">
                                                                <h4 class="tp-table-inner">{{ course.type }}</h4>
                                                            </div>
                                                            <div class="tp-course-credits">
                                                                <h4 class="tp-table-inner">{{ course.credits }}</h4>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tp-course-details-social">
                                <a href="#"><span><svg-social-fb /></span>Share</a>
                                <a class="black" href="#"><span><svg-social-x /></span>Tweet</a>
                                <a class="sky" href="#"><span><svg-social-linkedin /></span>Share</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="tp-course-requrement-widget-box">
                        <div class="tp-course-requrement-widget mb-30">
                            <div class="tp-course-requrement-widget-content">
                                <nuxt-link href="/university-requirements">Degree Requirements</nuxt-link>
                                <nuxt-link href="/university-apply">How to Apply</nuxt-link>
                                <nuxt-link href="/university-leadership">Faculty & Staff</nuxt-link>
                                <nuxt-link href="/university-financial">Financial Add</nuxt-link>
                            </div>
                        </div>
                        <div class="tp-course-requrement-widget-btn mb-30">
                            <nuxt-link class="tp-btn btn-1 w-100 text-center" href="/university-request-info">
                                Request information
                            </nuxt-link>
                            <nuxt-link class="tp-btn btn-2 w-100 text-center" href="/university-apply">Apply Now</nuxt-link>
                        </div>
                        <div class="tp-course-requrement-widget-contact mb-30">
                            <h4 class="tp-course-requrement-widget-contact-title">Contact Us</h4>
                            <p>1810 Campus Way NEBothell,<br> WA 98011-8246</p>
                            <a href="mailto:acadia@gmail.com"><span><svg-email-five /></span> acadia@gmail.com</a>
                            <a href="tel:90762"><span><svg-phone /></span> +670 413 90 762</a>
                        </div>
                        <div class="tp-course-requrement-widget-faq">
                            <h4 class="tp-course-requrement-widget-faq-title">Do you have <br> more questions?</h4>
                            <p>Read our <nuxt-link href="/faq">FAQ</nuxt-link></p>
                            <div class="tp-course-requrement-widget-faq-thumb">
                                <img src="/images/history/undergraduate/course-contact-bg.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
const courseDetailsData = [
    {
        semesterNumber: 1,
        courses: [
            { id: "ENG-101", title: "Basic Functional English and English Spoken", type: "GED Theory", credits: 3 },
            { id: "MAT-101", title: "Mathematics - I", type: "GED Theory", credits: 3 },
            { id: "CSE-113", title: "Programming and Problem Solving", type: "Core Theory", credits: 1.5 },
            { id: "CSE-114", title: "Programming and Problem Solving Lab", type: "Core Lab", credits: 3 },
        ],
    },
    {
        semesterNumber: 2,
        courses: [
            { id: "CSE-221", title: "Object Oriented Programming", type: "Core Theory", credits: 3 },
            { id: "CSE-222", title: "Object Oriented Programming Lab", type: "Core Lab", credits: 1.5 },
            { id: "CSE-113", title: "Data Communication", type: "Core Theory", credits: 2 },
            { id: "CSE-114", title: "Systems Analysis and Design", type: "Core Lab", credits: 3 },
        ],
    },
    {
        semesterNumber: 3,
        courses: [
            { id: "CSE-315", title: "Software Engineering", type: "Core Theory", credits: 3 },
            { id: "CSE-316", title: "Artificial Intelligence", type: "Core Theory", credits: 2 },
            { id: "CSE-311", title: "Database Management System", type: "Core Theory", credits: 3 },
            { id: "CSE-312", title: "Database Management System Lab", type: "Core Lab", credits: 1.5 },
        ],
    },
    {
        semesterNumber: 4,
        courses: [
            { id: "CSE-323", title: "Operating Systems", type: "Core Theory", credits: 3 },
            { id: "CSE-324", title: "Operating Systems Lab", type: "Core Lab", credits: 1.5 },
            { id: "CSE-113", title: "Programming and Problem Solving", type: "Core Theory", credits: 2 },
        ],
    },
]
</script>