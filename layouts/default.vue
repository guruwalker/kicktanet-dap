<script setup></script>

<template>
  <div
    id="page"
    class="page font--jakarta"
    style="display: flex; min-height: 100vh; overflow-x: hidden"
  >
    <NavigationSidebar />
    <div style="flex-grow: 1; min-height: 100vh; overflow-y: auto">
      <NavigationHeader />
      <slot />
      <NavigationFooter />
    </div>
  </div>
</template>

<style src="~/assets/css/color-scheme/default.scss" lang="scss"></style>
