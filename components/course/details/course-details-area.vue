<template>
  <section class="tp-course-details-2-area pt-50 pb-80">
         <div class="container">
            <div class="row">
               <div class="col-lg-8">
                  <div class="tp-course-details-2-main-inner pr-70">
                     <div class="tp-course-details-2-nav d-flex align-items-center">
                        <course-details-nav />
                     </div>

                     <div class="tp-course-details-2-content">
                        <div id="info">
                           <course-details-info />
                        </div>

                        <div id="curriculum" class="pt-70">
                           <h4 class="tp-course-details-2-main-title">Course Curriculum</h4>
                           <course-details-curriculum />
                        </div>

                        <div id="instructors" class="pt-100">
                           <h4 class="tp-course-details-2-main-title">Your Instructors</h4>
                           <course-details-instructor />
                        </div>

                        <div id="reviews">
                           <h4 class="tp-course-details-2-main-title">Ratings & Reviews</h4>
                           <course-details-rating-reviews />
                        </div>

                        <h4 class="tp-course-details-2-main-title">Featured review</h4>
                        <course-details-featured-reviews />

                        <h4 class="tp-course-details-2-main-title">Write a Review</h4>
                        <div class="tp-course-details-2-comment-box pr-25">
                           <span>What is it like to Course?</span>
                           <course-details-review-form />
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4">
                  <!-- right sidebar box -->
                  <course-details-right-side :course="course" />
                  <!-- right sidebar box -->
               </div>
            </div>
         </div>
      </section>

    <!-- video popup start -->
    <modal-video />
    <!-- video popup end -->
</template>

<script setup lang="ts">
import type { ICourseDT } from '@/types/course-d-t';

interface Props {
    course: ICourseDT;
}

defineProps<Props>();
</script>