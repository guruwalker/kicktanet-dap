<template>
    <section class="tp-progress-wrapper">
        <div class="tp-dashboard-section">
            <h2 class="tp-dashboard-title">Earnings Graph</h2>
        </div>
        <div class="row">
            <div class="col-lg-7">
                <div class="tpd-order-filter tpd-redio-style tmy-tab mb-30">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">


                        <li v-for="(tab, index) in tabListData" :key="index" class="nav-item p-relative">
                            <button class="nav-link" :class="{ active: state.activeTab === tab.key }"
                                :id="`${tab.key}-tab`" type="button" @click="changeTab(tab.key)">
                                <span class="tpd-redio-style-span"></span>
                                <span>{{ tab.label }}</span>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
            <div class="col-lg-5">
                <div class="tpd-order-date-input text-lg-end">
                    <form action="#">
                        <ui-date-picker :date="selectedDate" @update:date="updateDate" />
                        <span><svg-calender /></span>
                    </form>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <div class="tpd-dashboard-progress-box">
                    <div class="tpd-dashboard-progress-heading d-flex">
                        <div class="tpd-dashboard-progress-item">
                            <span>Total Earning</span>
                            <p>$0.00</p>
                        </div>
                        <div class="tpd-dashboard-progress-item">
                            <span>Course Enrolled</span>
                            <p>35</p>
                        </div>
                        <div class="tpd-dashboard-progress-item">
                            <span>Total Refund</span>
                            <p>35</p>
                        </div>
                        <div class="tpd-dashboard-progress-item">
                            <span>Total Discount</span>
                            <p>35</p>
                        </div>
                    </div>
                    <div class="tpd-dashboard-progress-body">
                        <h4>Earnings Graph</h4>
                        <div class="tpd-dashboard-progress-graph">
                            <!-- progress-earnings-graph area start -->
                            <ClientOnly>
                                <dashboard-instructor-analytics-progress-chart :chart-series="chartSeries" />
                            </ClientOnly>
                            <!-- progress-earnings-graph area start -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const selectedDate = ref<Date>(new Date());

const updateDate = (newDate: Date) => {
    selectedDate.value = newDate;
};


// Tab data
const tabListData = [
    { key: 'today', label: 'Today', data: [30, 40, 35, 50, 49, 60, 70, 91, 125] },
    { key: 'monthly', label: 'Monthly', data: [50, 60, 55, 70, 65, 80, 100, 110, 150] },
    { key: 'yearly', label: 'Yearly', data: [100, 120, 110, 140, 130, 150, 170, 190, 200] },
];

// Reactive state
const state = reactive({
    activeTab: tabListData[0].key,
});

// Method to change tab
function changeTab(key: string) {
    state.activeTab = key;
}

// Compute chart series dynamically based on the active tab
const chartSeries = computed(() => {
    const activeTabData = tabListData.find((tab) => tab.key === state.activeTab);
    return activeTabData
        ? [
            {
                name: activeTabData.label,
                data: activeTabData.data,
                color: '#556DF5',
            },
        ]
        : [];
});
</script>
