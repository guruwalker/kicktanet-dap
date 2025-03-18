<template>
    <div class="tp-video-5-area tp-video-hover tp-video-5-bg"
        style="background-image: url(/images/bg/video-5-bg-1.jpg);">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12">
                    <div class="tp-video-5-btn tp-video-button">
                        <a @click.prevent="playVideo('LlCwHnp3kL4')" class="popup-video" href="#" data-type="iframe">
                            <span class="tp-m-play-inner">
                                <svg-circle />
                                <svg-video-play-two />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- video popup start -->
    <modal-video />
    <!-- video popup end -->
</template>

<script setup lang="ts">
const { playVideo } = useVideoPopup();
</script>
