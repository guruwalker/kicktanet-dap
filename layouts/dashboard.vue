<template>
  <div>
    <!-- header area start -->
    <header-dashboard :inner="true" />
    <!-- header area end -->

    <main :class="dashboardLayout ? 'tp-dashboard-body-bg' : ''">
      <slot />
    </main>

    <!-- footer area start -->
    <main-nav-footer :dashboard-footer="dashboardLayout" />

    <!-- footer area end -->

    <!-- back to top area start -->
    <back-to-top />
    <!-- back to top area end -->
  </div>
</template>

<script setup lang="ts">
const layoutCustomProps = useAttrs();
const dashboardLayout = layoutCustomProps?.dashboardLayout ? true : false;
</script>
