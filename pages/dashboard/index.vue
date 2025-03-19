<template>
  <div>
    <!-- banner area start -->
    <dashboard-banner :student-banner="true" />
    <!-- banner area end -->

    <dashboard-content-wrapper :student-sidebar="true">
      <!-- fact area start -->
      <dashboard-instructor-dashboard-fact-area />
      <!-- fact area end -->
    </dashboard-content-wrapper>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
useSeoMeta({ title: "Student Dashboard  | KICTANet" });
</script>
