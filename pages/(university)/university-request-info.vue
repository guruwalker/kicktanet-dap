<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- request info area start -->
            <section class="tp-application-area grey-bg pt-150 pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tp-application-heading request wow fadeInUp" data-wow-delay=".3s">
                                <h3 class="tp-application-title">Request Information</h3>
                            </div>
                            <div class="tp-application-from-box wow fadeInUp" data-wow-delay=".5s">
                                <!-- request form area start -->
                                 <form-request-info/>
                                <!-- request form area end -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- request info area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Request Info  | KICTANet" });
</script>
