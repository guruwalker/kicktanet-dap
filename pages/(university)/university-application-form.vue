<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- university application form start -->
            <section class="tp-application-area grey-bg pt-150 pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-application-heading wow fadeInUp" data-wow-delay=".3s">
                                <p class="tp-application-subtitle">
                                    Ready to find out what sets us apart?
                                </p>
                                <h3 class="tp-application-title">Start your Application</h3>
                            </div>
                            <div class="tp-application-from-box wow fadeInUp" data-wow-delay=".5s">
                                <!-- form area start  -->
                                 <form-university-application/>
                                <!-- form area end  -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- university application form end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Application Form  | KICTANet" });
</script>
