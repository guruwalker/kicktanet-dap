<template>
    <div>
        <nuxt-layout name="layout-eight">

            <!-- breadcrumb area start -->
            <breadcrumb-one title="Mission and values" subtitle="Mission and values" />
            <!-- breadcrumb area end -->

            <!-- campus choose area start -->
            <campus-choose-area-three />
            <!-- campus choose area end -->

            <!-- mission area start -->
            <mission-area-two />
            <!-- mission area end -->


            <!-- mission area start -->
            <section class="tp-mission-area grey-bg pb-120">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="tp-mission-warp pr-75">
                                <div class="tp-mission-heading">
                                    <h3 class="tp-mission-title">The Acadia <br> Mission</h3>
                                </div>
                                <div class="tp-mission-improve-box">
                                    <span class="tp-mission-improve-dec">Improves retention</span>
                                    <h4 class="tp-mission-improve-title">96 <span>%</span></h4>
                                    <p>of our students successfully graduate and begin their <br> career development.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="tp-mission-wrapper">
                                <div class="tp-mission-desc">
                                    <p>Acadia University is a distinguished public university, values learning in the
                                        liberal arts and sciences as a cornerstone of individual development and a vital
                                        foundation.We will ensure that our students develop both the skills that a sound
                                        education provides and the competencies essential for success and leadership in
                                        the emerging creative economy.</p>
                                    <p>We will also lead to generating practical and theoretical knowledge that enables
                                        people to better understand our world and improve conditions for local and
                                        global communities.</p>
                                </div>
                                <div class="tp-mission-conversation-box p-relative">
                                    <h4 class="tp-mission-conversation-title">What do you need to bring?</h4>
                                    <p>A phone with an Internet connection, and we recommend <br>
                                        that you bring a charger.</p>
                                    <div class="tp-mission-conversation-thumb">
                                        <img src="/images/our-mission/mission/mission-mesg.png" alt="">
                                    </div>
                                    <div class="tp-mission-conversation-msg">
                                        <span class="tp-mission-conversation-msg-1">Hello 👋</span>
                                        <span class="tp-mission-conversation-msg-2">Ready for my first assignment!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- mission area end -->

        </nuxt-layout>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false,
});
useSeoMeta({ title: "University Mission - Acadia" });
</script>
