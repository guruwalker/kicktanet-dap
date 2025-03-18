<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Admissions Overview" subtitle="Admissions Overview" />
            <!-- breadcrumb area end -->

            <!-- campus area start -->
            <campus-choose-area />
            <!-- campus area end -->

            <!-- counter area start -->
            <counter-four />
            <!-- counter area end -->

            <!-- admission area start -->
            <section class="tp-admission-overview-area grey-bg pb-130">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="tp-admission-overview-heading wow fadeInUp" data-wow-delay=".3s">
                                <h3 class="tp-admission-overview-title">
                                    Afford Acadia
                                </h3>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="tp-admission-overview-wrapper wow fadeInUp" data-wow-delay=".5s">
                                <p>At Acadia University, we prepare you to launch your career by providing a supportive,
                                    creative, and professional environment from which to learn practical skills, build a
                                    network of industry contacts.</p>
                                <p>Acadia is affordable for all admitted students. Financial aid covers all demonstrated
                                    need for all students, regardless of citizenship or citizenship status. Families
                                    making under <span>$85,000</span> a year pay nothing for their student's education,
                                    and families making between <span>$85,000-$150,000 pay 0-10% of their
                                        incomes.</span></p>
                                <div class="tp-admission-overview-btn mt-50">
                                    <NuxtLink class="tp-btn" href="/university-financial">Learn more <br>
                                        About financial aid <span><svg-arrow-next-two /></span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- admission area end -->

            <!-- admission cta area start -->
            <section class="tp-admission-cta-area grey-bg pb-160">
                <div class="container">
                    <div class="tp-admission-cta-box">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="tp-admission-cta-heading wow fadeInUp" data-wow-delay=".3s">
                                    <h3 class="tp-admission-cta-title">Calculate Your <br> Estimated Scholarship.</h3>
                                    <p>How affordable is Harvard? See for yourself with our <br>
                                        Net Price Calculator.</p>
                                    <div class="tp-admission-cta-btn">
                                        <NuxtLink class="tp-btn" href="/university-tuition-fees">Net Price Calculator
                                            <span> <svg-arrow-next-two /></span>
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="tp-admission-cta-thumb wow fadeInUp" data-wow-delay=".5s">
                                    <img src="/images/course/details/admisson-overview-1.jpg" alt="admisson-overview">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- admission cta area end -->

            <!-- admission apply area start -->
            <section class="tp-admission-apply-area grey-bg pt-40 pb-140">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="tp-admission-apply-thumb p-relative wow fadeInUp" data-wow-delay=".3s">
                                <img src="/images/course/details/admisson-overview-2.jpg" alt="">
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="tp-admission-apply-heading wow fadeInUp" data-wow-delay=".5s">
                                <h3 class="tp-admission-apply-title">Apply for 2024</h3>
                                <p>We’ll guide you through the Common Application <br>
                                    or Coalition Application, Powered by Scoir, and answer <br>
                                    any questions you have along the way.</p>
                                <div class="tp-admission-apply-btn">
                                    <NuxtLink class="tp-btn" href="/university-apply">How To Apply
                                        <span><svg-arrow-next-two /></span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- admission apply area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Admission Overview - Acadia" });
</script>
