<template>
    <div class="tp-product-details-bottom">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="tp-product-details-tab-nav tp-tab">
                        <nav>
                            <div class="nav nav-tabs justify-content-center p-relative tp-product-tab"
                                id="navPresentationTab" role="tablist">

                                <button class="nav-link" id="nav-description-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-description" type="button" role="tab"
                                    aria-controls="nav-description" aria-selected="false"
                                    tabindex="-1">Description</button>

                                <button class="nav-link active" id="nav-addInfo-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-addInfo" type="button" role="tab" aria-controls="nav-addInfo"
                                    aria-selected="true" tabindex="0">Additional information</button>

                                <button class="nav-link" id="nav-review-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review"
                                    aria-selected="false" tabindex="-1">Reviews (2)</button>

                            </div>
                        </nav>
                        <div class="tab-content" id="navPresentationTabContent">
                            <div class="tab-pane fade" id="nav-description" role="tabpanel"
                                aria-labelledby="nav-description-tab">
                                <div class="tp-product-details-additional-p">
                                    <div class="row">
                                        <div class="col-xl-12">
                                            <p>{{ product.description }}</p>
                                            <p>For years, rumours of the Marsh Girl have haunted Barkley Cove, a quiet
                                                town on the North Carolina coast. So in late 1969, <br /> when handsome
                                                Chase Andrews is found dead.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show active" id="nav-addInfo" role="tabpanel"
                                aria-labelledby="nav-addInfo-tab">
                                <div class="tp-product-details-additional-info">
                                    <div class="row justify-content-center">
                                        <div class="col-xl-10">
                                            <table>
                                                <tbody>
                                                    <template v-if="product.additional_info">
                                                        <tr v-for="[key, value] in Object.entries(product.additional_info)"
                                                            :key="key">
                                                            <td>{{ formatKey(key) }}</td>
                                                            <td>{{ value }}</td>
                                                        </tr>
                                                    </template>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                                <div class="tp-product-details-review-wrapper pt-60">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="tp-product-details-review-statics">
                                                <!-- number -->
                                                <div class="tp-product-details-review-number d-inline-block mb-50">
                                                    <h3 class="tp-product-details-review-number-title">
                                                        Customer reviews
                                                    </h3>
                                                    <div
                                                        class="tp-product-details-review-summery d-flex align-items-center">
                                                        <div class="tp-product-details-review-summery-value">
                                                            <span>4.5</span>
                                                        </div>
                                                        <div
                                                            class="tp-product-details-review-summery-rating d-flex align-items-center">
                                                            <span><i class="fa-solid fa-star"></i></span>
                                                            <span><i class="fa-solid fa-star"></i></span>
                                                            <span><i class="fa-solid fa-star"></i></span>
                                                            <span><i class="fa-solid fa-star"></i></span>
                                                            <span><i class="fa-solid fa-star"></i></span>
                                                            <p>(36 Reviews)</p>
                                                        </div>
                                                    </div>
                                                    <div class="tp-product-details-review-rating-list">
                                                        <!-- rating bar -->
                                                        <shop-details-rating-bar v-for="rating in ratings"
                                                            :key="rating.stars" :stars="rating.stars"
                                                            :percentage="rating.percentage" />
                                                    </div>
                                                </div>

                                                <!-- reviews -->
                                                <div class="tp-product-details-review-list pr-110">
                                                    <h3 class="tp-product-details-review-title">Rating & Review</h3>
                                                    <shop-details-review-item v-for="review in reviews" :key="review.id"
                                                        :review="review" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="tp-product-details-review-form">
                                                <h3 class="tp-product-details-review-form-title">
                                                    Review this product
                                                </h3>
                                                <p>
                                                    Your email address will not be published. Required fields are marked*
                                                </p>
                                                <!-- shop review form -->
                                                <form-shop-review />
                                                <!-- shop review form -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { type IBookDT } from "@/types/book-d-t";
import { formatKey } from "@/utils/index";

type IProps = {
    product: IBookDT;
}

const props = defineProps<IProps>();
// rating data
const ratings = [
    { stars: 5, percentage: 82 },
    { stars: 4, percentage: 30 },
    { stars: 3, percentage: 15 },
    { stars: 2, percentage: 6 },
    { stars: 1, percentage: 10 },
];
// review data
const reviews = [
    {
        id: 1,
        name: "Eleanor Fant",
        date: "06 March, 2024",
        comment: "Designed very similarly to the nearly double priced Galaxy tab S6, with the only removal being.",
        rating: 5,
        avatar: "/images/shop/product/shop-product-user-1.png",
    },
    {
        id: 2,
        name: "Theodore Handle",
        date: "06 March, 2024",
        comment: "This review is for the Samsung Tab S6 Lite, 64gb wifi in blue. purchased this product performed.",
        rating: 5,
        avatar: "/images/shop/product/shop-product-user-2.png",
    },
];


</script>
