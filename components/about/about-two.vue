<template>
    <section :class="`about-area ${spacing} grey-bg`">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="tp-about-4-wrapper mb-75 wow fadeInUp" data-wow-delay=".3s">
                        <h2 class="tp-about-4-head">
                            Our goal is to develop and meet the needs of each child so that he or
                            she becomes a well-rounded tomorrow individual.
                        </h2>
                        <div class="tp-about-4-btn wow fadeInUp" data-wow-delay=".5s">
                            <NuxtLink class="tp-btn-3" href="/university-about">Why Choose Acadia</NuxtLink>
                            <div class="tp-about-4-video">
                                <a @click.prevent="playVideo('_RpLvsA1SNM')" class="popup-video" href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14"
                                            viewBox="0 0 12 14" fill="none">
                                            <path d="M12 7.00012L0 0.0719185L0 13.9283L12 7.00012Z"
                                                fill="currentColor" />
                                        </svg>
                                    </span>
                                </a>
                                <span>Play Video</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row align-items-center">

                <div v-for="thumb in thumbs" :key="thumb.id" :class="`col-lg-${thumb.col_lg} col-sm-6`">
                    <div :class="`tp-about-4-thumb-${thumb.id} mb-30 wow fadeInUp`" :data-wow-delay="`${thumb.delay}s`">
                        <img :src="thumb.img" alt="thumb-img" />
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

const thumbs = [
    { id: 1, col_lg: 3, img: '/images/about/4/about-thumb-1.jpg', delay: .5 },
    { id: 2, col_lg: 4, img: '/images/about/4/about-thumb-2.jpg', delay: .7 },
    { id: 3, col_lg: 3, img: '/images/about/4/about-thumb-3.jpg', delay: .9 },
    { id: 4, col_lg: 2, img: '/images/about/4/about-thumb-4.jpg', delay: 1 },
]

type IProps = {
    spacing?: string;
};
withDefaults(defineProps<IProps>(), {
    spacing: "pt-115 pb-90"
})
</script>
