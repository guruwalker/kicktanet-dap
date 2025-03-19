<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
useSeoMeta({ title: "New Upload  | KICTANet" });
</script>

<template>
  <div>
    <!-- banner area start -->
    <dashboard-banner :student-banner="true" />
    <!-- banner area end -->

    <dashboard-content-wrapper :student-sidebar="true">
      <!-- my quiz area start -->
      <!-- <dashboard-instructor-quiz-list-area /> -->
       <intranet-new-upload />
      <!-- my quiz area end -->
    </dashboard-content-wrapper>
  </div>
</template>
