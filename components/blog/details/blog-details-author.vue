<template>
    <div class="tp-postbox-details-author-box mb-60 p-relative">
        <div class="tp-postbox-details-author-wrap d-flex align-items-center">
            <div class="tp-postbox-details-author-avata">
                <img src="/images/blog/deatils/review.png" alt="review-img" />
            </div>
            <div class="tp-postbox-details-author-content">
                <h4>{{ author }}</h4>
                <p>Digital content wrangler I UX enthusiast I Recovering educator I <br />
                    Shameless nerd &amp; GIF connoisseur I Hockey fan.</p>
            </div>
        </div>
        <div class="tp-postbox-details-author-social">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
    </div>
</template>

<script setup lang="ts">

// prop type 
type IProps = {
    author: string;
}
defineProps<IProps>();

</script>