<template>
    <section class="tp-event-details-area pt-80 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="tp-event-details-wrapper">
                        <div class="tp-event-details-about">
                            <h3 class="tp-event-details-title">About the event</h3>
                            <p>The Creating Futures Through Technology Conference – KICTANet Tech Center is sponsored
                                jointly by the Mississippi Community College Board and the Mississippi Universities
                                Board with a goal of promoting collaboration as well as transforming teaching and
                                learning on college campuses.
                            </p>
                            <p>Celebrating our 20th anniversary this year on the gulf coast, the annual conference is
                                designed to be the key venue where the higher education faculty, administrators and IT
                                professionals come to share with one another their strategies, methods, This is an
                                excellent marketing opportunity to reach C-Suite level administrators and influential
                                educators. Some limited vendor exhibitor spaces and sponsorships may still be available
                                with speaking.</p>
                            <button class="tp-event-details-about-more">
                                <span><svg-plus /></span> Show more
                            </button>
                            <div class="tp-event-details-about-overlay">
                                <img src="/images/event/event/event-details-overlay.png" alt="">
                            </div>
                        </div>
                        <div class="tp-event-details-cover">
                            <h3 class="tp-event-details-title">During this event we’ll cover</h3>
                            <ul>
                                <li>How to get started learning JavaScript the right way</li>
                                <li>JavaScript for Beginners & CS Prep curriculum details</li>
                                <li>What the experience of learning in an online classroom is like</li>
                                <li>How these programs prepare you for Coders and other top coding programs.</li>
                            </ul>
                        </div>
                        <div class="tp-event-details-teaser">
                            <h3 class="tp-event-details-title">Here is the teaser</h3>
                            <div class="tp-event-details-teaser-video mt-30 p-relative">
                                <img src="/images/event/event/event-details-img.jpg" alt="">
                                <div class="tp-event-details-teaser-video-popup">
                                    <a @click.prevent="playVideo('_RpLvsA1SNM')" class="popup-video" href="#">
                                        <img src="/images/event/event/youtube.png" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="tp-event-details-box">
                        <div class="tp-event-details-details">
                            <h4 class="tp-event-details-box-title">Event Detail</h4>
                            <div class="tp-event-details-list d-flex align-items-center justify-content-between">
                                <h5><span><svg-calender-two /></span> Start Date</h5>
                                <span>30 Nov 2024</span>
                            </div>
                            <div class="tp-event-details-list d-flex align-items-center justify-content-between">
                                <h5><span><svg-clock-two clr="currentColor" /></span> Start Time</h5>
                                <span>02:00 PM</span>
                            </div>
                            <div class="tp-event-details-list d-flex align-items-center justify-content-between">
                                <h5><span><svg-calender-two /></span> End Date</h5>
                                <span>02 Dec 2024</span>
                            </div>
                            <div class="tp-event-details-list d-flex align-items-center justify-content-between">
                                <h5><span><svg-clock-two clr="currentColor" /></span> End Time</h5>
                                <span>05:00 PM</span>
                            </div>
                            <div class="tp-event-details-list d-flex align-items-center justify-content-between">
                                <h5><span><svg-ongoing /></span> Ongoing</h5>
                                <span>520</span>
                            </div>
                            <div class="tp-event-details-list d-flex align-items-center justify-content-between">
                                <h5><span><svg-location-two clr="currentColor" /></span> Location</h5>
                                <span>IAC Building, New York,</span>
                            </div>
                        </div>
                        <div class="tp-event-details-ticket">
                            <h4 class="tp-event-details-box-title">Purchase Ticket</h4>
                            <div class="tp-event-details-ticket-box mb-30">
                                <p><span>DEFAULT</span> (99974 seats remaining)</p>
                                <div
                                    class="tp-event-details-quantity d-flex align-items-center justify-content-between">
                                    <h5 class="tp-event-details-amount">$40.00</h5>
                                    <div class="tp-event-details-plus">
                                        <span class="tp-cart-minus">
                                            <svg-minus-two />
                                        </span>
                                        <input class="tp-cart-input" type="text" value="1">
                                        <span class="tp-cart-plus">
                                            <svg-plus />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="tp-event-details-price">
                                <div
                                    class="tp-event-details-price-Quantity d-flex justify-content-between align-items-center">
                                    <p>Total Quantity</p>
                                    <span>2</span>
                                </div>
                                <div
                                    class="tp-event-details-price-Quantity d-flex justify-content-between align-items-center">
                                    <p>Total Price</p>
                                    <span>$80.00</span>
                                </div>
                            </div>
                            <div class="tp-event-details-btn mb-30">
                                <a class="tp-btn-inner w-100 text-center" href="#">Buy ticket</a>
                            </div>
                            <div class="tp-event-details-social text-center">
                                <social-links-two/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Details Speakers -->
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-event-details-speakers-wrap mb-30">
                        <h3 class="tp-event-details-title">Our speakers</h3>
                    </div>
                </div>
                <div v-for="speaker in event_speakers_data" :key="speaker.id" class="col-xl-3 col-lg-4 col-md-6">
                    <div class="tp-event-details-item text-center mb-30">
                        <div class="tp-event-details-item-thumb">
                            <img :src="speaker.image" :alt="speaker.name">
                        </div>
                        <div class="tp-event-details-item-content">
                            <h4 class="tp-event-details-item-title">
                                <NuxtLink to="/my-account">{{ speaker.name }}</NuxtLink>
                            </h4>
                            <p>{{ speaker.title }}</p>
                            <div class="tp-event-details-item-social">
                                <a v-for="(s, i) in speaker.socials" :key="i" :href="s.link" target="_blank">
                                    <i :class="s.iconCls"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Event Details Speakers -->
        </div>
    </section>

    <!-- video popup start -->
     <modal-video />
    <!-- video popup end -->
</template>

<script setup lang="ts">
import type { IEventDT } from '@/types/event-d-t';
import { event_speakers_data } from "@/data/team-data";

defineProps<{ event: IEventDT }>();

const {playVideo} = useVideoPopup();
</script>
