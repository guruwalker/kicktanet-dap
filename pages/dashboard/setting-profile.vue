<template>
  <div>
    <!-- banner area start -->
    <dashboard-banner :student-banner="true" />
    <!-- banner area end -->

    <dashboard-content-wrapper :student-sidebar="true">
      <!-- setting profile area start -->
      <dashboard-setting-main :student-profile="true" />
      <!-- setting profile area end -->
    </dashboard-content-wrapper>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
useSeoMeta({ title: "Student Setting Profile  | KICTANet" });
</script>
