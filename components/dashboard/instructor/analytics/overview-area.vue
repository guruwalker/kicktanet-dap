<template>
    <div>

        <!-- tab area start -->
        <div class="tp-dashboard-tab mb-60">
            <h2 class="tp-dashboard-tab-title">Analytics</h2>
            <div class="tp-dashboard-tab-list">
                <ul>
                    <li v-for="tab in tabData" :key="tab">
                        <a :class="`${activeTab === tab ? 'active' : ''} pointer`" @click="activeTab = tab">
                            {{ tab }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- tab area end -->

        <template v-if="activeTab === 'Overview'">
            <!-- top area start -->
             <dashboard-instructor-analytics-overview-top-area/>
            <!-- top area start -->

            <!-- progress-earnings-graph area start -->
             <dashboard-instructor-analytics-progress-earnings-graph/>
            <!-- progress-earnings-graph area start -->

            <!-- popular-courses area start -->
             <dashboard-instructor-analytics-popular-courses/>
            <!-- popular-courses area start -->

            <!-- popular-courses area start -->
             <dashboard-instructor-analytics-recent-reviews/>
            <!-- popular-courses area start -->
        </template>

        <template v-if="activeTab === 'Courses'">
            <!-- course area start -->
             <dashboard-instructor-analytics-course-area/>
            <!-- course area start -->
        </template>

        <template v-if="activeTab === 'Earnings'">
            <!-- earning area start -->
             <dashboard-instructor-analytics-earning-area/>
            <!-- earning area start -->
        </template>

        <template v-if="activeTab === 'Statements'">
            <!-- statement area start -->
             <dashboard-instructor-analytics-statement-area/>
            <!-- statement area start -->
        </template>

        <template v-if="activeTab === 'Students'">
            <!-- student area start -->
             <dashboard-instructor-analytics-student-area/>
            <!-- student area start -->
        </template>

        <template v-if="activeTab === 'Export'">
            <!-- export area start -->
            <div class="tpd-withdraw-bg text-center mt-100">
               <img src="/images/dashboard/bg/withdrawal-bg.png" alt="no-data-bg" />
               <p>No Data Available in this Section</p>
            </div>
            <!-- export area start -->
        </template>

    </div>
</template>

<script setup lang="ts">
// Tab data
const tabData = ['Overview', 'Courses', 'Earnings', 'Statements', 'Students', 'Export'];
const activeTab = ref(tabData[0]);
</script>
