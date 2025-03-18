<template>
   <section class="tp-course-filter-area tp-course-filter-bg tp-course-filter-space p-relative">
      <div class="container">
         <div class="row">
            <div class="col-lg-12">
               <div class="tp-breadcrumb__content-filter mb-50">
                  <div class="tp-breadcrumb__list">
                     <span><nuxt-link href="/"><svg-home /></nuxt-link></span>
                     <span class="color">All Courses</span>
                  </div>
                  <h3 class="tp-breadcrumb__title">All Courses</h3>
                  <p>We have the largest collection of <span>{{ state.allCourseData.length }}</span> courses</p>
               </div>
               <div class="tp-course-grid-wrap p-relative">
                  <div class="row">
                     <div class="col-lg-6">
                        <div class="tp-course-filter-top-left d-flex align-items-center">
                           <div class="tp-course-filter-top-tab tp-tab mb-20">
                              <ul class="nav nav-tabs" id="filtertab" role="tablist">
                                 <li class="nav-item" role="presentation">
                                    <button :class="`nav-link ${listActive ? '' : 'active'}`" id="home-tab"
                                       data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab"
                                       aria-controls="home" :aria-selected="listActive ? 'false' : 'true'" :tabindex="listActive ? '-1' : '0'">
                                       <svg-grid />
                                       Grid
                                    </button>
                                 </li>
                                <li class="nav-item" role="presentation">
                                    <button :class="`nav-link ${listActive ? 'active' : ''}`" id="profile-tab"
                                       data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab"
                                       aria-controls="profile" :aria-selected="listActive ? 'true' : 'false'"
                                       :tabindex="listActive ? '0' : '-1'">
                                       <svg-list />
                                       List
                                    </button>
                                 </li> 
                              </ul>
                           </div>
                           <div class="tp-course-filter-top-result mb-20">
                              <p>
                                 Showing 1–{{ state.filteredCoursesByRoute?.length }} of {{ state.allCourseData?.length }}
                                 results
                              </p>
                           </div>
                        </div>
                     </div>
                     <div class="col-lg-6">
                        <div
                           class="tp-course-filter-top-right categories d-flex align-items-center justify-content-start justify-content-lg-end">
                           <div class="tp-course-filter-top-right-search d-none d-lg-block mb-20">
                              <!-- filter search -->
                              <course-filter-search-term :path="'/course-with-tab'" />
                              <!-- filter search -->
                           </div>
                           <div class="tp-course-filter-select mb-20">
                              <select-course-sort-by/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup lang="ts">
import { useCourseFilter } from '@/pinia/use-course-filter';

type IProps = {
   listActive?: boolean
}
withDefaults(defineProps<IProps>(), {
   listActive: false
});

const state = useCourseFilter();
</script>