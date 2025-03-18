<template>
    <div class="dashboader-area mb-25">
        <div class="row">
            <div v-for="fact in factData" :key="fact.id" class="col-lg-4">
                <div class="tp-fact-item d-flex align-items-center justify-content-between">
                    <div class="tp-fact-content">
                        <h4 class="tp-fact-count">{{ fact.count }}</h4>
                        <span>{{ fact.label }}</span>
                    </div>
                    <div class="tp-fact-icon">
                        <span class={fact.colorClass}>
                            <img :src="fact.icon" alt="fact-icon" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// Fact data
const factData = [
    { id: 1, count: 84, label: 'Enrolled Courses', icon: '/images/dashboard/icon/fact/enroll-icon.svg', colorClass: 'common-pale-yellow' },
    { id: 2, count: 145, label: 'Total Students', icon: '/images/dashboard/icon/fact/students.svg', colorClass: 'common-pale-green' },
    { id: 3, count: 26, label: 'Total Review', icon: '/images/dashboard/icon/fact/star.svg', colorClass: 'common-pale-purple' },
];
</script>