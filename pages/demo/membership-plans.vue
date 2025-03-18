<template>
   <div>
      <nuxt-layout name="layout-eleven">

         <!-- breadcrumb area start -->
         <breadcrumb-two title="Membership plans" subtitle="Membership plans" color="color" />
         <!-- breadcrumb area end -->

         <!-- membership area start -->
         <section class="tp-membership-area pt-120 pb-60">
            <div class="container">
               <div class="row">
                  <div v-for="plan in membershipData" :key="plan.id" class="col-lg-4 col-md-6">
                     <div :class="['tp-pricing-5-item',plan.active ? 'active tp-pricing-inner-head' : '','mb-40 wow fadeInUp']" :data-wow-delay="plan.delay">
                        <div :class="['tp-pricing-5-head',plan.active ? '' : 'tp-pricing-inner-head']">
                           <div class="tp-pricing-5-head-text">
                              <h4 class="tp-pricing-5-head-title">{{ plan.title }}</h4>
                              <span>{{ plan.validity }}</span>
                           </div>
                           <h2 class="tp-pricing-5-price">
                              <span>$</span> {{ plan.price }} <b>/ Month</b>
                           </h2>
                        </div>
                        <div class="tp-pricing-5-list">
                           <ul>
                              <li v-for="(feature, index) in plan.features" :key="index"
                                 :class="{ inactive: !feature.active }">
                                 <span v-if="feature.active"><svg-check-two/></span>
                                 <span v-else><svg-un-check /></span>
                                 {{ feature.text }}
                              </li>
                           </ul>
                        </div>
                        <div class="tp-pricing-inner-btn">
                           <NuxtLink class="tp-btn-4" href="/contact">
                              {{ plan.btnText }}
                           </NuxtLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- membership area end -->

         <!-- banner area start -->
         <banner-one />
         <!-- banner area end -->

      </nuxt-layout>
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: false,
});
useSeoMeta({ title: "Membership Plans - Acadia" });


const membershipData = [
   {
      id: 1,
      title: 'Silver Membership',
      price: 24,
      validity: 'Valid for 2 months',
      features: [
         { text: 'Unlimited Classes', active: true },
         { text: 'Fitness Assessment', active: true },
         { text: 'Locker room with showers', active: true },
         { text: 'Guest Privileges', active: false },
         { text: 'Free parking', active: false },
      ],
      btnText: 'Join Course Plan',
      delay: '.3s',
      active: false
   },
   {
      id: 2,
      title: 'Gold Membership',
      price: 54,
      validity: 'Valid for 12 months',
      features: [
         { text: 'Unlimited Classes', active: true },
         { text: 'Fitness Assessment', active: true },
         { text: 'Locker room with showers', active: true },
         { text: 'Guest Privileges', active: true },
         { text: 'Free parking', active: false },
      ],
      btnText: 'Join Course Plan',
      delay: '.5s',
      active: true
   },
   {
      id: 3,
      title: 'Platinum Membership',
      price: 64,
      validity: 'Perfect for committed trainers',
      features: [
         { text: 'Unlimited Classes', active: true },
         { text: 'Fitness Assessment', active: true },
         { text: 'Locker room with showers', active: true },
         { text: 'Guest Privileges', active: true },
         { text: 'Free parking', active: true },
      ],
      btnText: 'Join Course Plan',
      delay: '.7s',
      active: false
   },
];
</script>
