<script setup lang="ts">
const isOpen = ref([false, false]);
const route = useRoute(); // Detects the current route

const toggle = (index: number) => {
  isOpen.value[index] = !isOpen.value[index];
};

const handleScroll = () => {
  const menu = document.getElementById("main-menu");
  const header = document.getElementById("header");
  if (menu && header) {
    if (window.pageYOffset > 100) {
      menu.classList.add("scroll");
      header.classList.add("scroll");
    } else {
      menu.classList.remove("scroll");
      header.classList.remove("scroll");
    }
  }
};

// Attach scroll event on mount and remove it on unmount
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Function to check if a link is active
const isActive = (path: string) => {
  return route.path === path ? "active-link" : "";
};
</script>

<template>
  <div id="main-menu" class="wsmainfull menu clearfix">
    <div class="wsmainwp clearfix">
      <!-- HEADER BLACK LOGO -->
      <div class="desktoplogo">
        <NuxtLink to="/" class="logo-black"
          ><img src="/assets/images/kicktanet-logo.png" alt="logo"
        /></NuxtLink>
      </div>
      <!-- HEADER WHITE LOGO -->
      <div class="desktoplogo">
        <NuxtLink to="/" class="logo-white"
          ><img src="/assets/images/kicktanet-logo.png" alt="logo"
        /></NuxtLink>
      </div>

      <!-- MAIN MENU -->
      <nav class="wsmenu clearfix">
        <ul class="wsmenu-list nav-theme">
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/about" class="h-link" :class="isActive('/')">
              About
            </NuxtLink>
          </li>
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/counties" class="h-link" :class="isActive('/')">
              Counties
            </NuxtLink>
          </li>
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/news-and-press" class="h-link" :class="isActive('/')">
              News & Press
            </NuxtLink>
          </li>
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/visits" class="h-link" :class="isActive('/')">
              Visits
            </NuxtLink>
          </li>
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/team" class="h-link" :class="isActive('/')">
              Team
            </NuxtLink>
          </li>
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/testimonials" class="h-link" :class="isActive('/')">
              Testimonials
            </NuxtLink>
          </li>
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/partners" class="h-link" :class="isActive('/')">
              Partners
            </NuxtLink>
          </li>

          <!-- SIGN UP BUTTON -->
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink
              to="/login"
              class="btn r-04 btn--theme hover--tra-white last-link"
              >Sign in</NuxtLink
            >
          </li>
        </ul>
      </nav>
      <!-- END MAIN MENU -->
    </div>
  </div>
</template>

<style scoped lang="scss">
.active-link {
  font-weight: bold;
  display: inline-block; /* Ensures inline display */
  color: var(--active-link-color) !important;
}

/* Light mode */
:root {
  --active-link-color: #222;
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  :root {
    --active-link-color: #ddd; /* Lighter color for dark mode */
  }
}
</style>
