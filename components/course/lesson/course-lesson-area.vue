<template>
    <div class="tpd-dashboard-wrap-bg"
        :style="{ backgroundImage: 'url(/images/dashboard/bg/dashboard-bg-shape-1.jpg)' }">
        <div class="tpd-continue-learning-wrapper">
            <!-- Sidebar -->
            <div :class="`tpd-continue-learning-sidebar ${sidebarOpen ? '' : 'd-none d-block'}`">
                <div class="tpd-continue-learning-accordion">
                    <div class="accordion" id="accordionExample">
                        <div v-for="(section, index) in learningData" :key="index" class="accordion-item">
                            <h2 class="accordion-header" :id="'heading' + index">
                                <button :class="`accordion-button ${index === 0 ? '' : 'collapsed'}`" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`">
                                    {{ section.title }}
                                    <span>{{ section.progress }}</span>
                                </button>
                            </h2>
                            <div :id="'collapse' + index" :class="`accordion-collapse collapse ${index === 0 ? 'show' : ''}`" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
                                <div class="tpd-continue-learning-body">
                                    <div class="tpd-continue-learning-body-item">
                                        <a v-for="(lesson, lessonIndex) in section.lessons" :key="lessonIndex"
                                            :class="{ active: lesson.completed }" href="#">
                                            <p>
                                                <span>
                                                    <svg-document-two v-if="lesson.type === 'document'" />
                                                    <svg-video-play-four v-else-if="lesson.type === 'video'" />
                                                    <svg-question v-else-if="lesson.type === 'question'" />
                                                </span>
                                                {{ lesson.title }}
                                            </p>
                                            <div class="time" v-if="lesson.time">
                                                <p>{{ lesson.time }}</p>
                                                <i class="fa-solid fa-circle-check"></i>
                                            </div>
                                            <i v-if="lesson.completed" class="fa-solid fa-circle-check"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content -->
            <div class="tpd-continue-learning-main">
                <div class="tpd-continue-learning-popup d-flex justify-content-between align-items-center">
                    <div class="tpd-continue-learning-popup-main d-flex align-items-center">
                        <a href="#" @click.prevent="sidebarOpen = !sidebarOpen">
                            <span class="close">
                                <svg-arrow-prev-two cls="svg-1" />
                            </span>
                        </a>
                        <p>Interior design concepts Masterclass</p>
                    </div>
                    <div class="tpd-continue-learning-popup-main d-flex align-items-center">
                        <p>Your Progress: 8 of 10 (80%)</p>
                        <nuxt-link to="/course-details/1">
                            <span class="crose">
                                <svg-close-two />
                            </span>
                        </nuxt-link>
                    </div>
                </div>

                <div class="tpd-continue-learning-about-bg">
                    <div class="tpd-continue-learning-about-thumb mb-45">
                        <img src="/images/dashboard/bg/learning-bg.jpg" alt="Lesson background" />
                    </div>
                    <div class="tpd-continue-learning-about-wrapper">
                        <h4>About Lesson</h4>
                        <p>
                            The five main components of language are phonemes, morphemes,
                            lexemes, syntax, and context.
                        </p>
                    </div>
                    <div class="tpd-continue-learning-about-btn d-flex justify-content-center">
                        <div class="prv">
                            <a href="#">
                                <span>
                                    <svg-arrow-prev-four />
                                </span>
                                Previous
                            </a>
                        </div>
                        <div class="next">
                            <a href="#">
                                Next
                                <span>
                                    <svg-arrow-next-five />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const sidebarOpen = ref(true);

// learning data
const learningData = [
    {
        title: "Getting Started",
        progress: "3/3",
        lessons: [
            { type: "document", title: "History of Design", time: "", completed: true },
            { type: "video", title: "History of Design", time: "00:14", completed: false },
            { type: "question", title: "History of Design", time: "", completed: false }
        ]
    },
    {
        title: "Design History",
        progress: "2/3",
        lessons: [
            { type: "document", title: "Introduction to Design", time: "", completed: true },
            { type: "video", title: "Design Overview", time: "00:20", completed: false },
            { type: "question", title: "Quiz on Design", time: "", completed: false }
        ]
    },
    {
        title: "Typography Basics",
        progress: "2/3",
        lessons: [
            { type: "document", title: "Introduction to Typography", time: "", completed: true },
            { type: "video", title: "Typography Concepts", time: "00:25", completed: false },
            { type: "question", title: "Typography Quiz", time: "", completed: false }
        ]
    },
    {
        title: "Color Theory",
        progress: "3/3",
        lessons: [
            { type: "document", title: "Understanding Color", time: "", completed: true },
            { type: "video", title: "Color Combinations", time: "00:18", completed: false },
            { type: "question", title: "Color Theory Quiz", time: "", completed: true }
        ]
    },
    {
        title: "Design Principles",
        progress: "1/2",
        lessons: [
            { type: "document", title: "Principles of Design", time: "", completed: true },
            { type: "video", title: "Applying Design Principles", time: "00:30", completed: false }
        ]
    },
    {
        title: "User Interface Design",
        progress: "2/3",
        lessons: [
            { type: "document", title: "UI Design Basics", time: "", completed: true },
            { type: "video", title: "UI Components", time: "00:22", completed: false },
            { type: "question", title: "UI Design Quiz", time: "", completed: false }
        ]
    },
    {
        title: "Responsive Design",
        progress: "2/2",
        lessons: [
            { type: "document", title: "Introduction to Responsive Design", time: "", completed: true },
            { type: "video", title: "Creating Responsive Layouts", time: "00:28", completed: false }
        ]
    },
    {
        title: "Advanced Design Techniques",
        progress: "1/2",
        lessons: [
            { type: "document", title: "Design Optimization", time: "", completed: true },
            { type: "video", title: "Advanced Design Strategies", time: "00:35", completed: false }
        ]
    }
];

</script>