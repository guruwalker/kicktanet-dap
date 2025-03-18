<template>
    <div class="tp-course-details-2-review-rating">
        <div class="row gx-2">
            <div class="col-lg-4">
                <div class="tp-course-details-2-review-rating-info text-center">
                    <h5>4.5</h5>
                    <div class="rating-icons mb-5">
                        <span><svg-star-two /></span>
                        <span><svg-star-two /></span>
                        <span><svg-star-two /></span>
                        <span><svg-star-two /></span>
                        <span><svg-star-two clr="#BFC5CA" /></span>
                    </div>
                    <p>Rated 4 out of 1 Rating</p>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="tp-course-details-2-review-details">
                    <div class="tp-course-details-2-review-content">
                        <div v-for="(rating, index) in ratingData" :key="index"
                            class="tp-course-details-2-review-item d-flex align-items-center justify-content-between">
                            <div class="tp-course-details-2-review-text">
                                <span>{{ rating.stars }}</span>
                            </div>
                            <div class="tp-course-details-2-review-progress">
                                <div class="single-progress" :style="{ width: rating.width }"></div>
                            </div>
                            <div class="tp-course-details-2-review-percent">
                                <h5>{{ rating.percentage }}%</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const ratingData = [
    { stars: "5 star", percentage: 82, width: "82%" },
    { stars: "4 star", percentage: 30, width: "30%" },
    { stars: "3 star", percentage: 15, width: "15%" },
    { stars: "2 star", percentage: 6, width: "6%" },
    { stars: "1 star", percentage: 10, width: "10%" },
];
</script>
