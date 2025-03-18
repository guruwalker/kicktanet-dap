<template>
    <div class="dashboader-area mb-25">
        <div class="row">
            <div v-for="item in factItemData" :key="item.id" class="col-lg-4">
                <div class="tp-fact-item d-flex align-items-center justify-content-between">
                    <div class="tp-fact-content">
                        <h4 class="tp-fact-count">{{ item.count }}</h4>
                        <span>{{ item.label }}</span>
                    </div>
                    <div class="tp-fact-icon">
                        <span :class="item.iconClass ? item.iconClass : ''">
                            <img :src="item.iconSrc" alt="icon" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const factItemData = [
    {
        id: 1,
        count: 20,
        label: 'Active Courses',
        iconSrc: '/images/dashboard/icon/fact/teacher.svg',
    },
    {
        id: 2,
        count: 84,
        label: 'Enrolled Courses',
        iconSrc: '/images/dashboard/icon/fact/enroll-icon.svg',
        iconClass: 'common-pale-yellow',
    },
    {
        id: 3,
        count: 42,
        label: 'Completed Courses',
        iconSrc: '/images/dashboard/icon/fact/cup.svg',
        iconClass: 'common-pale-pacific',
    },
    {
        id: 4,
        count: 145,
        label: 'Total Students',
        iconSrc: '/images/dashboard/icon/fact/students.svg',
        iconClass: 'common-pale-green',
    },
    {
        id: 5,
        count: 65,
        label: 'Total Courses',
        iconSrc: '/images/dashboard/icon/fact/course-total.svg',
        iconClass: 'common-pale-blue',
    },
    {
        id: 6,
        count: 26,
        label: 'Total Earnings',
        iconSrc: '/images/dashboard/icon/fact/card-pos.svg',
        iconClass: 'common-pale-purple',
    },
];
</script>