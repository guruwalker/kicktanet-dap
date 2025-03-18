<template>
    <div>
        <!-- review tab area start -->
        <div class="tp-dashboard-tab mb-30">
            <h2 class="tp-dashboard-tab-title">Reviews</h2>
            <div class="tp-dashboard-tab-list">
                <ul>
                    <li v-for="tab in tabs" :key="tab" @click="activeTab = tab">
                        <a :class="`${activeTab === tab ? 'active' : ''} pointer`">
                            {{ tab }}<span>({{ handleReviewCount(tab) }})</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- review tab area end -->

        <!-- review area start -->
        <div class="tpd-table mb-25">
            <ul>
                <li class="tpd-table-head">
                    <div class="tpd-table-row">
                        <div class="tpd-reviews-student">
                            <h4 class="tpd-table-title">Student</h4>
                        </div>
                        <div class="tpd-reviews-date">
                            <h4 class="tpd-table-title">Date</h4>
                        </div>
                        <div class="tpd-reviews-feedback">
                            <h4 class="tpd-table-title">Feedback</h4>
                        </div>
                    </div>
                </li>

                <li v-for="review in currentItems" :key="review.id">
                    <div class="tpd-table-row">
                        <div class="tpd-reviews-student">
                            <div class="tpd-reviews-profile d-flex align-items-center">
                                <div class="tpd-reviews-thumb">
                                    <img :src="review.studentImage" :alt="review.studentName" />
                                </div>
                                <h4 class="tpd-reviews-thumb-title">{{ review.studentName }}</h4>
                            </div>
                        </div>
                        <div class="tpd-reviews-date">
                            <span>{{ review.date }}</span>
                            <p>{{ review.time }}</p>
                        </div>
                        <div class="tpd-reviews-feedback">
                            <div class="tp-instructor-rating">
                                <i v-for="i in review.rating" class="fa-solid fa-star"></i>
                            </div>
                            <span>{{ review.feedback }}</span>
                            <div class="tpd-course-wrap">
                                <span class="tpd-course-name">Course:</span>
                                <span class="tpd-course-title">{{ review.courseTitle }}</span>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
        <!-- review area end -->

        <!-- pagination area start -->
        <div class="tp-dashboard-pagination pt-20">
            <div class="tp-pagination">
                <ui-pagination :total-items="activeTab === 'Received' ? receivedReviewData.length : giverReviewData.length" :items-per-page="per_page" :max-pages-shown="5" v-model="currentPage" @pageChange="updatePage" />
            </div>
        </div>
        <!-- pagination area end -->
    </div>
</template>

<script setup lang="ts">

// tabs 
const tabs = ['Received', 'Given'];
const activeTab = ref(tabs[0]);
// review data
const receivedReviewData = ref([
    {
        id: 1,
        studentName: 'Joss Sticks',
        studentImage: '/images/dashboard/profile/reviews-profile-1.png',
        date: 'August 27, 2024',
        time: '8:31 am',
        rating: 5,
        feedback: 'Nice Course',
        courseTitle: 'Design Masterclass',
    },
    {
        id: 2,
        studentName: 'Benjamin Evalent',
        studentImage: '/images/dashboard/profile/reviews-profile-2.png',
        date: 'January 30, 2024',
        time: '10:21 am',
        rating: 5,
        feedback: 'Is Great Course!',
        courseTitle: '3D Motion Design',
    },
    {
        id: 3,
        studentName: 'Hanson Deck',
        studentImage: '/images/dashboard/profile/reviews-profile-3.png',
        date: 'April 20, 2024',
        time: '1:05 pm',
        rating: 5,
        feedback: 'Awesome',
        courseTitle: 'Graphic Design Masterclass',
    },
    {
        id: 4,
        studentName: 'Hanson Violet',
        studentImage: '/images/dashboard/profile/reviews-profile-4.png',
        date: 'August 27, 2024',
        time: '10:21 am',
        rating: 5,
        feedback: 'Is Great Course!',
        courseTitle: 'Graphic Design Masterclass',
    },
    {
        id: 5,
        studentName: 'Indigo Violet',
        studentImage: '/images/dashboard/profile/reviews-profile-5.png',
        date: 'January 30, 2024',
        time: '10:21 am',
        rating: 5,
        feedback: 'Awesome',
        courseTitle: 'Design System in Figma',
    },
]);
// review data
const giverReviewData = ref([
    {
        id: 1,
        studentName: 'Hanson Deck',
        studentImage: '/images/dashboard/profile/reviews-profile-3.png',
        date: 'April 20, 2024',
        time: '1:05 pm',
        rating: 5,
        feedback: 'Awesome',
        courseTitle: 'Graphic Design Masterclass',
    },
    {
        id: 2,
        studentName: 'Hanson Violet',
        studentImage: '/images/dashboard/profile/reviews-profile-4.png',
        date: 'August 27, 2024',
        time: '10:21 am',
        rating: 5,
        feedback: 'Is Great Course!',
        courseTitle: 'Graphic Design Masterclass',
    },
    {
        id: 3,
        studentName: 'Indigo Violet',
        studentImage: '/images/dashboard/profile/reviews-profile-5.png',
        date: 'January 30, 2024',
        time: '10:21 am',
        rating: 5,
        feedback: 'Awesome',
        courseTitle: 'Design System in Figma',
    },
]);
const per_page = 4;
const lenght = computed(() => activeTab.value === 'Received' ? receivedReviewData.value.length : giverReviewData.value.length);
const { currentPage, endItem, startItem, updatePage } = usePagination(lenght, per_page);

const currentItems = computed(() => {
    if (activeTab.value === 'Received') {
        return receivedReviewData.value.slice(startItem.value, endItem.value)
    } else {
        return giverReviewData.value.slice(startItem.value, endItem.value)
    }
})
function handleReviewCount(tab: string) {
    if (tab === 'Received') {
        return receivedReviewData.value.length
    } else {
        return giverReviewData.value.length
    }
}

watch(() => activeTab, () => {
    updatePage(1);
})

</script>
