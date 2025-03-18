<template>
    <div class="section-area">
        <div class="tp-dashboard-section">
            <h2 class="tp-dashboard-title">{{title}}</h2>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <div class="tpd-dashboard-select-course">
                    <div class="tp-course-filter-select">
                        <ui-nice-select 
                           :options="[
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
    </div>
</template>

<script setup lang="ts">

withDefaults(defineProps<{title?: string}>(), {
    title: 'Quiz Attempts'
})
function handleCourseFilter(item: { value: string, text: string }) {
    console.log(item);
}
function handleCourseSorting(item: { value: string, text: string }) {
    console.log(item);
}


const selectedDate = ref<Date>(new Date());

const updateDate = (newDate: Date) => {
    selectedDate.value = newDate;
};
</script>