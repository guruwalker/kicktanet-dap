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
/* Make the page a flex container */
.page {
  display: flex;
  height: 100vh; /* Full height */
}

/* Main content expands fully when sidebar is collapsed */
.main-content {
  flex-grow: 1;
  transition: margin-left 0.3s ease-in-out;
}
.sidebar.collapsed + .main-content {
}
</style>
