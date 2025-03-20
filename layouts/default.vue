<script setup></script>

<template>
  <div id="page" class="page font--jakarta">
    <NavigationSidebar />
    <div class="main-content">
      <NavigationHeader />
      <slot />
      <NavigationFooter />
    </div>
  </div>
</template>
<style scoped>
.page {
  display: flex;
  min-height: 100vh; /* Use min-height instead of height */
  overflow-x: hidden; /* Prevents horizontal scroll issues */
}

/* Ensures the main content can expand */
.main-content {
  flex-grow: 1;
  min-height: 100vh; /* Allows content to determine height */
  overflow-y: auto; /* Enables scrolling inside main content */
}

</style>
