<template>
    <section :class="`brand-area ${spacing}`">
        <div :class="`container ${custom_container}`">
            <div class="row">
                <div class="col-lg-4">
                    <div class="tp-brand-2-content mb-40">
                        <h4 class="tp-brand-2-title">Who will <br> You Learn
                            <span>With?
                                <img class="tp-underline-shape-10 wow bounceIn" data-wow-duration="1.5s"
                                    data-wow-delay=".4s" src="/images/unlerline/brand-2-svg-1.svg" alt="">
                            </span>
                        </h4>
                        <p>You can list your partners or instructors's <br> brands here to show off your site's</p>
                        <div class="tp-brand-2-btn">
                            <a class="tp-btn-round" href="#">View All Patners</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="tp-brand-2-wrapper">
                        <div v-for="(b,i) in brand_images" :key="i" class="tp-brand-2-item">
                            <img :src="b" alt="brand">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{custom_container?: string;spacing?: string}>(),{
    custom_container: '',
    spacing: 'mb-65'
});

const brand_images = [
    '/images/brand/brand-2-logo-1.png',
    '/images/brand/brand-2-logo-2.png',
    '/images/brand/brand-2-logo-3.png',
    '/images/brand/brand-2-logo-4.png',
    '/images/brand/brand-2-logo-5.png',
    '/images/brand/brand-2-logo-6.png',
    '/images/brand/brand-2-logo-7.png',
    '/images/brand/brand-2-logo-8.png',
    '/images/brand/brand-2-logo-9.png',
]
</script>
