<template>
    <section class="tpd-order-area">
        <div class="row">
            <div class="col-lg-6">
                <div class="tp-dashboard-section">
                    <h2 class="tp-dashboard-title">Order History</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-7">
                <div class="tpd-order-filter tpd-redio-style tmy-tab mb-30">
                    <ul class="nav nav-tabs">
                        <li v-for="(tab, index) in tabs" :key="index" class="nav-item p-relative" role="presentation">
                            <button @click="activeTab = tab" :class="`nav-link ${activeTab === tab ? 'active' : ''}`">
                                <span class="tpd-redio-style-span"> </span>
                                <span>{{ tab }}</span>
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
            <div class="tab-content" id="myTabContent">

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

                        <li v-for="(order, index) in orderItems.slice(startItem, endItem)" :key="index">
                            <div class="tpd-table-row">
                                <div class="tpd-order-id">
                                    <h4 class="tpd-common-text">{{ order.orderId }}</h4>
                                </div>
                                <div class="tpd-order-name">
                                    <h4 class="tpd-common-text">{{ order.courseName }}</h4>
                                </div>
                                <div class="tpd-order-date">
                                    <h4 class="tpd-common-text">{{ order.date }}</h4>
                                </div>
                                <div class="tpd-order-price">
                                    <h4 class="tpd-common-text">{{ order.price }}</h4>
                                </div>
                                <div class="tpd-order-status">
                                    <div class="tpd-badge-item">
                                        <span :class="`tpd-badge ${order.statusClass}`">
                                            {{ order.status }}
                                        </span>
                                    </div>
                                </div>
                                <div class="tpd-order-action">
                                    <div class="tpd-action-btn">
                                        <a :href="order.downloadLink" download="history.pdf">
                                            <svg-dashboard-download />
                                            <span class="tpd-action-tooltip">Download</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <div class="tp-dashboard-pagination">
                    <div class="tp-pagination">
                        <!-- pagination start -->
                        <ui-pagination :total-items="orderItems.length" :items-per-page="per_page" :max-pages-shown="5" v-model="currentPage" @pageChange="updatePage" />
                        <!-- pagination end -->
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup lang="ts">

type IOrder = {
    orderId: string;
    courseName: string;
    date: string;
    price: number;
    status: string;
    statusClass: string;
    downloadLink: string;
}
// today order data
const todayOrderData: IOrder[] = [
    {
        orderId: "#4024",
        courseName: "Application",
        date: "March 2, 2024",
        price: 50.00,
        status: "On Hold",
        statusClass: "warning",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4056",
        courseName: "Design System in Figma",
        date: "June 2, 2024",
        price: 100.00,
        status: "Success",
        statusClass: "sucess",
        downloadLink: "/assets/img/history.pdf",
    }
]
// monthly order data
const monthlyOrderData:IOrder[] = [
    {
        orderId: "#4024",
        courseName: "Application",
        date: "March 2, 2024",
        price: 50.00,
        status: "On Hold",
        statusClass: "warning",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4056",
        courseName: "Design System in Figma",
        date: "June 2, 2024",
        price: 100.00,
        status: "Success",
        statusClass: "sucess",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4034",
        courseName: "App Development",
        date: "May 2, 2024",
        price: 76.00,
        status: "Processing",
        statusClass: "info",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4018",
        courseName: "Graphic",
        date: "March 2, 2024",
        price: 40.00,
        status: "Canceled",
        statusClass: "danger",
        downloadLink: "/assets/img/history.pdf",
    },
]
// yearly order data
const yearlyOrderData:IOrder[] = [
    {
        orderId: "#4024",
        courseName: "Application",
        date: "March 2, 2024",
        price: 50.00,
        status: "On Hold",
        statusClass: "warning",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4056",
        courseName: "Design System in Figma",
        date: "June 2, 2024",
        price: 100.00,
        status: "Success",
        statusClass: "sucess",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4034",
        courseName: "App Development",
        date: "May 2, 2024",
        price: 76.00,
        status: "Processing",
        statusClass: "info",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4018",
        courseName: "Graphic",
        date: "March 2, 2024",
        price: 40.00,
        status: "Canceled",
        statusClass: "danger",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4056",
        courseName: "Digital Marketing Courses",
        date: "June 2, 2024",
        price: 100.00,
        status: "Success",
        statusClass: "sucess",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4067",
        courseName: "React Advanced Guide",
        date: "July 15, 2024",
        price: 120.00,
        status: "Success",
        statusClass: "sucess",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4078",
        courseName: "JavaScript Deep Dive",
        date: "August 10, 2024",
        price: 85.00,
        status: "On Hold",
        statusClass: "warning",
        downloadLink: "/assets/img/history.pdf",
    },
    {
        orderId: "#4089",
        courseName: "Web Development Bootcamp",
        date: "September 5, 2024",
        price: 200.00,
        status: "Processing",
        statusClass: "info",
        downloadLink: "/assets/img/history.pdf",
    }
];


const tabs = ['Today', 'Monthly', 'Yearly'];

const activeTab = ref(tabs[0]);

const orderItems = ref([...todayOrderData]);

const per_page = 4;
const length = computed(() => orderItems.value.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(length, per_page);

const filterOrders = computed(() => {
    if (activeTab.value === 'Today') {
        return [...todayOrderData];
    } else if (activeTab.value === 'Monthly') {
        return [...monthlyOrderData];
    } else if (activeTab.value === 'Yearly') {
        return [...yearlyOrderData];
    }
    return [];
});

watch(activeTab, () => {
    orderItems.value = filterOrders.value; // Update order items based on the tab
    updatePage(1); // Reset to the first page
});

const selectedDate = ref<Date>(new Date());

const updateDate = (newDate: Date) => {
    selectedDate.value = newDate;
};

</script>
