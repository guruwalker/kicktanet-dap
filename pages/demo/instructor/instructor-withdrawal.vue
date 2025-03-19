<template>
    <div>
        <nuxt-layout name="layout-nine" :dashboardLayout="true">

            <!-- banner area start -->
            <dashboard-banner />
            <!-- banner area end -->

            <dashboard-content-wrapper>

                <!-- Withdrawal area start -->
                <section class="tpd-order-area">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="tp-dashboard-section">
                                <h2 class="tp-dashboard-title">Withdrawal</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tpd-withdraw-wrap mb-85">
                                <div
                                    class="tpd-announcement tpd-common-shadow d-flex align-items-center justify-content-between mb-25">
                                    <div class="tpd-announcement-info d-flex align-items-center">
                                        <div class="tpd-announcement-icon">
                                            <span>
                                                <img src="/images/dashboard/icon/announcement-icon.svg" alt="announcement-icon" />
                                            </span>
                                        </div>
                                        <div class="tpd-announcement-notification">
                                            <span>Current Balance is $0.00</span>
                                            <h4 class="tpd-withdraw-title">You have <span>$0.00</span> and this is insufficient balance to withdrawe</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="tpd-withdraw-notification">
                                    <p>
                                        <span>
                                            <svg-info-two />
                                        </span>
                                        The preferred payment method is selected as E-Check. You can change your <a href="#"> Withdraw Preference</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="tpd-withdraw-bg text-center">
                                <img src="/images/dashboard/bg/withdrawal-bg.png" alt="no-data-bg" />
                                <p>No Data Available in this Section</p>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Withdrawal area end -->

            </dashboard-content-wrapper>
        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "Instructor Withdrawal  | KICTANet" });
</script>
