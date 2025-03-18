<template>
    <div v-if="showAnnouncement" class="tp-announcement-area p-relative" style="background-image: url(/images/shop/shop-bg.png);">
         <div class="container">
            <div class="row">
               <div class="col-lg-12">
                  <div class="tp-announcement-wrap text-center">
                     <div class="tp-announcement-content d-flex justify-content-center">
                        <p>Price of $15 (<span>35% off</span>) for a limited time only, back up to $39 soon.</p>
                        <nuxt-link class="tp-announcement-btn" href="/shop-grid">Shop Now</nuxt-link>
                     </div>
                     <div class="tp-announcement-close">
                        <button class="hide-button" @click="showAnnouncement = false">
                           <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 1L1 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M1 1L9 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>

<script setup lang="ts">
const showAnnouncement = ref(true);
</script>