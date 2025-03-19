<template>
  <div>
    <!-- banner area start -->
    <dashboard-banner :student-banner="true" />
    <!-- banner area end -->

    <dashboard-content-wrapper :student-sidebar="true">
      <!-- order area start -->
      <dashboard-student-order-area />
      <!-- order area end -->
    </dashboard-content-wrapper>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
useSeoMeta({ title: "Student Order  | KICTANet" });
</script>
