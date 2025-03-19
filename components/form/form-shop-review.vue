<template>
    <form action="#">
        <div class="tp-product-details-review-form-rating d-flex align-items-center">
            <p>Your Rating :</p>
            <div class="tp-product-details-review-form-rating-icon d-flex align-items-center">
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
                <span><i class="fa-solid fa-star"></i></span>
            </div>
        </div>
        <div class="tp-product-details-review-input-wrapper">
            <div class="tp-product-details-review-input-box">
                <div class="tp-product-details-review-input">
                    <textarea id="msg" name="msg" placeholder="Write your review here..."></textarea>
                </div>
                <div class="tp-product-details-review-input-title">
                    <label for="msg">Your Name</label>
                </div>
            </div>
            <div class="tp-product-details-review-input-box">
                <div class="tp-product-details-review-input">
                    <input name="name" id="name" type="text" placeholder="Pranta" />
                </div>
                <div class="tp-product-details-review-input-title">
                    <label for="name">Your Name</label>
                </div>
            </div>
            <div class="tp-product-details-review-input-box">
                <div class="tp-product-details-review-input">
                    <input name="email" id="email" type="email" placeholder="info@kictanet.or.ke" />
                </div>
                <div class="tp-product-details-review-input-title">
                    <label for="email">Your Email</label>
                </div>
            </div>
        </div>
        <div class="tp-product-details-review-suggetions mb-20">
            <div class="tp-product-details-review-remeber">
                <input id="remeber" type="checkbox" />
                <label for="remeber">Save my name, email, and website in this browser for the next time I
                    comment.</label>
            </div>
        </div>
        <div class="tp-product-details-review-btn-wrapper">
            <button class="tp-product-details-review-btn">Submit</button>
        </div>
    </form>
</template>

<script setup lang="ts">

</script>
