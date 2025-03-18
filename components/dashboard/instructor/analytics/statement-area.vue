<template>
    <div>

        <div class="row">
            <div class="col-lg-6">
                <div class="tpd-dashboard-select-course mb-30">
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
                                <div class="tpd-order-id">
                                    <h4 class="tpd-table-title">Order ID</h4>
                                </div>
                                <div class="tpd-order-name">
                                    <h4 class="tpd-table-title">Course Name</h4>
                                </div>
                                <div class="tpd-order-date">
                                    <h4 class="tpd-table-title">Date</h4>
                                </div>
                                <div class="tpd-order-price">
                                    <h4 class="tpd-table-title">Price</h4>
                                </div>
                                <div class="tpd-order-status">
                                    <h4 class="tpd-table-title">Status</h4>
                                </div>
                                <div class="tpd-order-action"></div>
                            </div>
                        </li>

                        <li v-for="statement in statementData" :key="statement.id">
                            <div class="tpd-table-row">
                                <div class="tpd-order-id">
                                    <h4 class="tpd-common-text">{{ statement.id }}</h4>
                                </div>
                                <div class="tpd-order-name">
                                    <h4 class="tpd-common-text">{{ statement.courseName }}</h4>
                                </div>
                                <div class="tpd-order-date">
                                    <h4 class="tpd-common-text">{{ statement.date }}</h4>
                                </div>
                                <div class="tpd-order-price">
                                    <h4 class="tpd-common-text">{{ formatPrice(statement.price, true) }}</h4>
                                </div>
                                <div class="tpd-order-status">
                                    <div class="tpd-badge-item">
                                        <span :class="`tpd-badge ${statement.statusClass}`">
                                            {{ statement.status }}
                                        </span>
                                    </div>
                                </div>
                                <div class="tpd-order-action">
                                    <div class="tpd-action-btn">
                                        <button>
                                            <svg-dashboard-download />
                                            <span class="tpd-action-tooltip">Download</span>
                                        </button>
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
import { formatPrice } from '@/lib/format-price';

const statementData = [
    {
        id: "#4024",
        courseName: "Application",
        date: "March 2, 2024",
        price: 50.00,
        status: "On Hold",
        statusClass: "warning",
    },
    {
        id: "#4056",
        courseName: "Design System in Figma",
        date: "June 2, 2024",
        price: 100.00,
        status: "Success",
        statusClass: "sucess",
    },
    {
        id: "#4034",
        courseName: "App Development",
        date: "May 2, 2024",
        price: 76.00,
        status: "Processing",
        statusClass: "info",
    },
    {
        id: "#4018",
        courseName: "Graphic",
        date: "March 2, 2024",
        price: 10,
        status: "Canceled",
        statusClass: "danger",
    },
    {
        id: "#4056",
        courseName: "Digital Marketing Courses",
        date: "June 2, 2024",
        price: 100.00,
        status: "Success",
        statusClass: "sucess",
    },
    {
        id: "#4018",
        courseName: "Application",
        date: "June 2, 2024",
        price: 100.00,
        status: "On Hold",
        statusClass: "warning",
    },
];

function handleCourseFilter(item: { value: string, text: string }) {
    console.log(item);
}

const selectedDate = ref<Date>(new Date());

const updateDate = (newDate: Date) => {
    selectedDate.value = newDate;
};
</script>