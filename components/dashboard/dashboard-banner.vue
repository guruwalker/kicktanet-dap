<template>
  <section class="tp-dashboard-banner-wrap">
    <div class="tp-dashboard-banner-shape">
      <img src="/images/dashboard/bg/dashboard-bg-shape-1.jpg" alt="shape" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            class="tp-dashboard-banner-bg mt-30"
            :style="{
              backgroundImage: `url(/images/dashboard/bg/dashboard-bg-1.jpg)`,
            }"
          >
            <div class="tp-instructor-wrap d-flex justify-content-between">
              <div class="tp-instructor-info d-flex">
                <div class="tp-instructor-avatar">
                  <img
                    :src="
                      studentBanner
                        ? '/images/dashboard/profile/dashboard-profile-2.jpg'
                        : '/images/dashboard/profile/dashboard-profile.jpg'
                    "
                    alt="profile"
                  />
                </div>
              </div>
              <div class="tp-instructor-course-btn">
                <NuxtLink class="tp-btn-add-course" to="/create-new-course">
                  <i class="fa-regular fa-plus"></i> New Upload
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type IProps = {
  studentBanner?: boolean;
};
// Props
defineProps<IProps>();
</script>
