<template>
   <form id="contact-form">
      <div class="tp-contact-input-form request">
         <h4 class="tp-application-from-title">Personal Information</h4>
         <div class="row">
            <div class="col-xl-6 col-lg-6">
               <div class="tp-contact-input schedule p-relative">
                  <label>First name</label>
                  <input type="text">
               </div>
            </div>
            <div class="col-xl-6 col-lg-6">
               <div class="tp-contact-input schedule p-relative">
                  <label>Last name</label>
                  <input type="text">
               </div>
            </div>
            <div class="col-xl-6 col-lg-6">
               <div class="tp-contact-input schedule p-relative">
                  <label>Email address</label>
                  <input type="email">
               </div>
            </div>
            <div class="col-xl-6 col-lg-6">
               <div class="tp-contact-input schedule p-relative">
                  <label>Date of birth</label>
                  <ui-date-picker :date="selectedDate" @update:date="updateDate" />
                  <span class="icon"><svg-calender /></span>
               </div>
            </div>
         </div>
      </div>
      <div class="tp-contact-input-form request">
         <h4 class="tp-application-from-title">Address Information</h4>
         <div class="row">
            <div class="col-xl-6 col-lg-6">
               <div class="tp-contact-input schedule p-relative">
                  <label>Country</label>
                  <div class="tp-application-select">
                     <select class="nice-select wide">
                        <option value="Csc">Bangladesh</option>
                        <option value="usa">USA</option>
                        <option value="Eee">Afghanistan</option>
                        <option value="Ee">Canada</option>
                     </select>
                  </div>
               </div>
            </div>
            <div class="col-xl-6 col-lg-6">
               <div class="tp-contact-input schedule p-relative">
                  <label>Postal Code </label>
                  <input type="text">
               </div>
            </div>
            <div class="col-xl-12 col-lg-12">
               <div class="tp-contact-input schedule p-relative">
                  <label>Address</label>
                  <input type="text">
               </div>
            </div>
         </div>
      </div>
      <div class="tp-contact-input-form">
         <h4 class="tp-application-from-title">Other</h4>
         <div class="row">
            <div class="col-xl-6 col-lg-6">
               <div class="tp-contact-input schedule p-relative">
                  <label> Academic Level </label>
                  <div class="tp-application-select">
                     <select class="nice-select wide">
                        <option value="Csc">Bachelor’s Degrees</option>
                        <option value="usa">Master’s Degrees</option>
                        <option value="Eee">Undergraduate Degrees</option>
                     </select>
                  </div>
               </div>
            </div>
            <div class="col-xl-6 col-lg-6">
               <div class="tp-contact-input schedule p-relative">
                  <label> Mobile Number </label>
                  <input type="text">
               </div>
            </div>
            <div class="col-xl-12">
               <div class="tp-contact-input-remeber schedule request">
                  <input id="remeber" type="checkbox">
                  <label for="remeber">I authorize The Estuidar University to contact me via email about academic
                     programs and services.</label>
               </div>
            </div>
            <div class="tp-schedule-btn">
               <button class="tp-btn">Submit Request <span><svg-arrow-next-two clr="#FEFEFE"/></span></button>
               <p class="ajax-response"></p>
            </div>
         </div>
      </div>
   </form>
</template>

<script setup lang="ts">
const selectedDate = ref<Date>(new Date());

const updateDate = (newDate: Date) => {
   selectedDate.value = newDate;
};

</script>