<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
useSeoMeta({ title: "Project Images  | KICTANet" });
</script>

<template>
  <div>
    <!-- banner area start -->
    <dashboard-banner :student-banner="true" />
    <!-- banner area end -->

    <dashboard-content-wrapper :student-sidebar="true">
      <!-- student enroll course area start -->
      <intranet-all-images />
      <!-- student enroll course area end -->
    </dashboard-content-wrapper>
  </div>
</template>
