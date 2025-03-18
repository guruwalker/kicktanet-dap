<template>
    <div class="tp-course-details-2-review-reply-wrap">
        <div v-for="(review, index) in reviewsData.slice(0, visibleReviews)" :key="index" class="tp-course-details-2-review-item-reply">
            <div class="tp-course-details-2-review-top d-flex">
                <div class="tp-course-details-2-review-thumb">
                    <img :src="review.img" :alt="review.name" />
                </div>
                <div class="tp-course-details-2-review-content">
                    <h4>{{ review.name }}</h4>
                    <div class="tp-course-details-2-review-star">
                        <span v-for="starIndex in 5" :key="starIndex">
                            <svg-star-two :clr="starIndex <= review.rating ? '#FFC107' : '#BFC5CA'" />
                        </span>
                        <span class="span"> {{ review.timeAgo }}</span>
                    </div>
                </div>
            </div>
            <p>{{ review.content }}</p>
            <div class="tp-course-details-2-review-react d-flex align-items-center">
                <span>Helpful? </span>
                <div class="react">
                    <a href="#"><svg-like /></a>
                    <a href="#"><svg-dislike /></a>
                </div>
            </div>
        </div>

        <div v-if="visibleReviews < reviewsData.length" class="tp-course-details-2-review-reply-btn">
            <a class="pointer" @click="showMoreReviews">Show More Reviews</a>
        </div>
    </div>
</template>

<script setup lang="ts">

const reviewsData = [
    {
        name: "David W.",
        img: "/images/course/details/user-2.png",
        rating: 4,
        timeAgo: "2 weeks ago",
        content: "I love the way the instructor goes about the course. So easy to follow, even though a little bit challenging as expected.",
    },
    {
        name: "Nithish ..",
        img: "/images/course/details/user-3.png",
        rating: 4,
        timeAgo: "2 weeks ago",
        content: "I love the way the instructor goes about the course. So easy to follow, even though a little bit challenging as expected.",
    },
];

const visibleReviews = ref(1);

const showMoreReviews = () => {
    visibleReviews.value += 1;
};
</script>