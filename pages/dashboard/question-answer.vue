<template>
  <div>
    <!-- banner area start -->
    <dashboard-banner :student-banner="true" />
    <!-- banner area end -->

    <dashboard-content-wrapper :student-sidebar="true">
      <!-- question answer area start -->
      <dashboard-student-question-answer-area />
      <!-- question answer area end -->
    </dashboard-content-wrapper>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
useSeoMeta({ title: "Student Question Answer  | KICTANet" });
</script>
