<template>
    <section class="tutor-area grey-bg pb-80">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="tp-tutor-section text-center mb-100">
                        <h3 class="tp-tutor-section-title">Interactive <span> Online Tutoring
                                <svg xmlns="http://www.w3.org/2000/svg" width="110" height="8" viewBox="0 0 110 8" fill="none"> <path fill-rule="evenodd" clip-rule="evenodd" d="M105.822 7.56286C59.3901 -2.33701 18.7303 3.46988 4.47635 7.48938C3.24142 7.83762 1.48833 7.74409 0.560712 7.28048C-0.366903 6.81687 -0.117772 6.15873 1.11716 5.81049C16.8317 1.37913 59.8901 -4.64518 108.584 5.73701C109.927 6.02336 110.397 6.66422 109.635 7.16842C108.872 7.67261 107.165 7.84921 105.822 7.56286Z" fill="#161613" />
                                </svg>
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="(item) in tutorFeatures" :key="item.id" class="col-lg-4 col-md-6 wow fadeInUp"
                    :data-wow-delay="`.${item.id}s`">
                    <div class="tp-tutor-item text-center mb-30">
                        <div class="tp-tutor-icon">
                            <span><img src="/images/icon/tutor/tutor-icon-1.svg" alt=""></span>
                        </div>
                        <div class="tp-tutor-content">
                            <h4 class="tp-tutor-title"><a href="#">{{ item.title }}</a></h4>
                            <p>{{ item.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const tutorFeatures = [
    {
        id: 1,
        title: "Professional Educators",
        description: "Get one-on-one help from our subject matter experts.",
    },
    {
        id: 2,
        title: "Real-Time Support",
        description: "Ask questions over live chat or schedule a virtual meeting.",
    },
    {
        id: 3,
        title: "Free Access",
        description: "Every course offers online tutoring at no additional charge.",
    },
];
</script>