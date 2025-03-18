<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed tpd-new-course-heading-title" type="button"
                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo">
                Course Intro Video
            </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="tpd-new-course-wrapper">
                    <div class="tpd-new-course-categories">
                        <div class="tpd-input">
                            <label>Course Intro Video</label>
                            <div class="tpd-select">
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
                                name="courseSort" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
function handleCourseFilter(item: { value: string, text: string }) {
    console.log(item);
}
</script>