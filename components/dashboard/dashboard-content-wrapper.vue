<template>
  <section class="tpd-main pb-75">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <!-- dashboard-menu-area-start -->
          <dashboard-student-sidebar-area v-if="studentSidebar" />
          <dashboard-instructor-sidebar-area v-else />
          <!-- dashboard-menu-area-end -->
        </div>
        <div class="col-lg-9">
          <!-- dashboard-content-area-start -->
          <div class="tpd-content-layout">
            <slot />
          </div>
          <!-- dashboard-content-area-end -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{ studentSidebar?: boolean }>();
</script>
