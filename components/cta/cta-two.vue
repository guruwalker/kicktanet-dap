<template>
    <section :class="`${top_cls}`" :style="{backgroundColor:`${bgClr}`}">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xxl-8 col-lg-10">
                    <div class="tp-cta-2-wrapper text-center">
                        <h2 class="tp-cta-2-title">Get Started With
                            <span>Acadia
                                <img class="tp-underline-shape-12 wow bounceIn" data-wow-duration="1.5s"
                                    data-wow-delay=".4s" src="/images/unlerline/cta-2-svg-1.svg" alt="">
                            </span>
                            Now
                        </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <div class="tp-cta-2-form">
                            <form action="#">
                                <span>
                                    <svg-email-two />
                                </span>
                                <input type="text" placeholder="Enter your email address">
                                <div class="tp-cta-2-btn">
                                    <button class="tp-btn-round">Subscribe!</button>
                                </div>
                            </form>
                        </div>
                        <div class="tp-cta-2-info-list">
                            <span>
                                <span>
                                    <svg-check-one />
                                </span>
                                Easy to Access
                            </span>
                            <span>
                                <span>
                                    <svg-check-one />
                                </span>
                                No Credit card
                            </span>
                            <span>
                                <span>
                                    <svg-check-one />
                                </span>
                                85,000 student onboard with us
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

withDefaults(defineProps<{ top_cls?: string;bgClr?: string }>(), {
    top_cls: 'cta-area tp-cta-2-bg',
    bgClr: 'none'
})
</script>
