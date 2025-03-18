<template>
   <div>
      <nuxt-layout name="layout-eight">

         <!-- breadcrumb area start -->
         <breadcrumb-one title="Degree Requirements" subtitle="Degree Requirements" />
         <!-- breadcrumb area end -->

         <!-- Course Requirements area start -->
         <section class="tp-course-requrement-area grey-bg pt-100 pb-80">
            <div class="container">
               <div class="row">
                  <div class="col-lg-9">
                     <div class="tp-course-requrement-wrapper">
                        <div class="tp-course-requrement-heading">
                           <h3 class="tp-course-requrement-title">Degree Requirements</h3>
                           <p>The B.Sc. Program in Computer Science & Engineering (CSE) is designed to produce skilled
                              graduates in the field to satisfy the growing demands of computer engineering graduates in
                              the home and abroad. It provides the students an opportunity to obtain the broad knowledge
                              of Computer Science, Computer Engineering with the freedom to tailor the program according
                              to the student's individual needs. Students are responsible for reading course
                              descriptions when choosing classes for their self-designed major. If they choose a class
                              that requires permissionbecause of prerequisites and/or is a course at another college
                              within Acadia University</p>
                           <p>any of the graduate programs, they must seek permission using the proper procedures.
                              Requesting permission is not a guarantee of being granted permission</p>
                        </div>
                        <div class="tp-course-requrement-heading-2">
                           <h3 class="tp-course-requrement-title">Major Requirements (32 units)</h3>
                           <div class="tp-course-requrement-bulet">
                              <h5 class="tp-course-requrement-bulet-title">Microeconomic Foundations (4 units)</h5>
                              <p>Students must take at least four units of coursework in this category. </p>
                              <div class="tp-course-requrement-bulet-content">
                                 <p><span><svg-hand-check /></span> CSE-112 – Software Engineering (Theory)</p>
                                 <p><span><svg-hand-check /></span> CSE-113 – Programming and Problem Solving (Theory &
                                    lab)</p>
                                 <p><span><svg-hand-check /></span> CSE-114 – Data Communication (Theory)</p>
                              </div>
                           </div>
                           <div class="tp-course-requrement-bulet">
                              <h5 class="tp-course-requrement-bulet-title">Microeconomic Foundations (4 units)</h5>
                              <p>Students must take at least four units of coursework in this category. </p>
                              <div class="tp-course-requrement-bulet-content">
                                 <p><span><svg-hand-check /></span> CSE-112 – Software Engineering (Theory)</p>
                                 <p><span><svg-hand-check /></span> CSE-113 – Programming and Problem Solving (Theory &
                                    lab)</p>
                                 <p><span><svg-hand-check /></span> CSE-114 – Data Communication (Theory)</p>
                              </div>
                           </div>
                           <h3 class="tp-course-requrement-title">Program Worksheets</h3>
                           <p>Here you can review useful information about Communications Studies:</p>
                           <div class="tp-course-requrement-bulet">
                              <div class="tp-course-requrement-bulet-content">
                                 <p><span><svg-work-sheet /></span> 2023 - 24 Computer Science Worksheet</p>
                                 <p><span><svg-work-sheet /></span> 2022 - 23 Computer Science Worksheet</p>
                                 <p><span><svg-work-sheet /></span> Program worksheet</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="col-lg-3">
                     <div class="tp-course-requrement-widget-box">
                        <div class="tp-course-requrement-widget mb-30">
                           <div class="tp-course-requrement-widget-content">
                              <NuxtLink to="/university-requirements">Degree Requirements</NuxtLink>
                              <NuxtLink to="/university-apply">How to Apply</NuxtLink>
                              <NuxtLink to="/university-leadership">Faculty & Staff</NuxtLink>
                              <NuxtLink to="/university-financial">Financial Add</NuxtLink>
                           </div>
                        </div>
                        <div class="tp-course-requrement-widget-btn mb-30">
                           <NuxtLink class="tp-btn btn-1 w-100 text-center" href="/university-request-info">
                              Request information
                           </NuxtLink>
                           <NuxtLink class="tp-btn btn-2 w-100 text-center" href="/university-apply">Apply Now</NuxtLink>
                        </div>
                        <div class="tp-course-requrement-widget-contact mb-30">
                           <h4 class="tp-course-requrement-widget-contact-title">Contact Us</h4>
                           <p>1810 Campus Way NEBothell,<br> WA 98011-8246</p>
                           <a href="mailto:acadia@gmail.com"><span><svg-email-one /></span> acadia@gmail.com</a>
                           <a href="tel:90762"><span><svg-phone /></span> +670 413 90 762</a>
                        </div>
                        <div class="tp-course-requrement-widget-faq">
                           <h4 class="tp-course-requrement-widget-faq-title">Do you have <br> more questions?</h4>
                           <p>Read our <NuxtLink to="/faq">FAQ</NuxtLink></p>
                           <div class="tp-course-requrement-widget-faq-thumb">
                              <img src="/images/history/undergraduate/course-contact-bg.png" alt="">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- Course Requirements area end -->

      </nuxt-layout>
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: false,
});
useSeoMeta({ title: "University Requirements - Acadia" });
</script>
