<template>
    <section class="tp-live-7-ptb pb-130">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="col-lg-12">
                        <div class="tp-live-7-item d-flex align-items-center">
                            <div class="tp-live-7-item-thumb p-relative">
                                <img src="/images/live/live-thumb-2.jpg" alt="">
                                <div class="tp-event-details-teaser-video-popup">
                                    <a @click.prevent="playVideo('_RpLvsA1SNM')" class="popup-video" href="#">
                                        <img src="/images/event/event/youtube.png" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="tp-live-7-item-content">
                                <span class="tp-live-7-subtitle">Get Started</span>
                                <h3 class="tp-live-7-title tp-section-3-title color-9">Enjoy Our <br>
                                    <span>Companionship
                                        <img class="tp-underline-shape-6 wow bounceIn" data-wow-duration="1.5s" data-wow-delay=".4s" src="/images/unlerline/course-2-svg-1.svg" alt="underline">
                                    </span>
                                </h3>
                                <p>Sneek peek into what has in storefor you on our online <br> teaching and mentoring portal. </p>
                                <a href="#">Download free guidebook <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none"> <path d="M1 6H11M11 6L6 1M11 6L6 11" stroke="#5956E9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> </svg></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- video popup start -->
    <modal-video />
    <!-- video popup end -->
</template>

<script setup lang="ts">
const {playVideo} = useVideoPopup();
</script>