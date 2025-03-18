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

const phases = [
  {
    id: 1,
    title: "Component 1",
    description:
      "Identification of digital inclusion gaps in Mandera and Busia counties.",
    link: "/phases/component-1",
    status: "Completed",
  },
  {
    id: 2,
    title: "Component 2",
    description:
      "Capacity building of Community Digital Champions (CDCs) for digital literacy training.",
    link: "/phases/component-2",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Component 3",
    description:
      "Deployment of digital infrastructure and setup of community hubs.",
    link: "/phases/component-3",
    status: "Not Started",
  },
  {
    id: 4,
    title: "Component 4",
    description:
      "Implementation of digital literacy training programs across targeted groups.",
    link: "/phases/component-4",
    status: "Not Started",
  },
  {
    id: 5,
    title: "Component 5",
    description:
      "Engagement with local government and policymakers for support.",
    link: "/phases/component-5",
    status: "Not Started",
  },
  {
    id: 6,
    title: "Component 6",
    description:
      "Monitoring, evaluation, and tracking of digital literacy progress.",
    link: "/phases/component-6",
    status: "Not Started",
  },
  {
    id: 7,
    title: "Component 7",
    description:
      "Showcasing success stories and digital transformation impact.",
    link: "/phases/component-7",
    status: "Not Started",
  },
  {
    id: 8,
    title: "Component 8",
    description:
      "Sustainability planning and long-term strategy for digital inclusion.",
    link: "/phases/component-7",
    status: "Not Started",
  },
];
</script>

<template>
  <div id="main-menu" class="wsmainfull menu clearfix">
    <div class="wsmainwp clearfix">
      <!-- HEADER BLACK LOGO -->
      <div class="desktoplogo">
        <NuxtLink to="/" class="logo-black"
          ><img src="/assets/images/usiu-logo.png" alt="logo"
        /></NuxtLink>
      </div>
      <!-- HEADER WHITE LOGO -->
      <div class="desktoplogo">
        <NuxtLink to="/" class="logo-white"
          ><img src="/assets/images/usiu-logo.png" alt="logo"
        /></NuxtLink>
      </div>

      <!-- MAIN MENU -->
      <nav class="wsmenu clearfix">
        <ul class="wsmenu-list nav-theme">
          <!-- Home -->
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/" class="h-link">Home</NuxtLink>
          </li>

          <!-- About -->
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/about" class="h-link">About</NuxtLink>
          </li>

          <!-- Phases (Mega Menu) -->
          <li aria-haspopup="true" class="has-submenu">
            <NuxtLink to="/phases" class="h-link">Phases</NuxtLink>
            <ul class="sub-menu">
              <li v-for="phase in phases" :key="phase.slug">
                <NuxtLink :to="`${phase.link}`">{{
                  phase.title
                }}</NuxtLink>
              </li>
            </ul>
          </li>

          <!-- Mandera County Visit -->
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/mandera-visit" class="h-link"
              >Mandera County Visit</NuxtLink
            >
          </li>

          <!-- Press & Partners -->
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/press" class="h-link">Press</NuxtLink>
          </li>
          <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/partners" class="h-link">Partners</NuxtLink>
          </li>

          <!-- FAQs -->
          <!-- <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/faqs" class="h-link">FAQs</NuxtLink>
          </li> -->

          <!-- Contact -->
          <!-- <li class="nl-simple" aria-haspopup="true">
            <NuxtLink to="/contact" class="h-link">Contact</NuxtLink>
          </li> -->

          <!-- Authentication Links -->
          <li
            class="nl-simple reg-fst-link mobile-last-link"
            aria-haspopup="true"
          >
            <NuxtLink to="/login" class="h-link">Sign In</NuxtLink>
          </li>
          <!-- <li class="nl-simple" aria-haspopup="true">
            <NuxtLink
              to="/signup"
              class="btn r-04 btn--theme hover--tra-white last-link"
            >
              Sign Up
            </NuxtLink>
          </li> -->
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
