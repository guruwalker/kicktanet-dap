<template>
  <div>
    <!-- header area start -->
    <main-nav-header />
    <!-- header area end -->

    <main>
      <slot />
    </main>

    <!-- footer area start -->
    <main-nav-footer />
    <!-- footer area end -->

    <!-- back to top area start -->
    <back-to-top />
    <!-- back to top area end -->
  </div>
</template>
