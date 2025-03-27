<script setup>
import Team from "~~/components/Data/Team";

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const teamMembers = ref(Team);
</script>

<template>
  <section
    id="team-2"
    class="gr--whitesmoke pb-40 inner-page-hero team-section"
  >
    <div class="container">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <div class="inner-page-title text-center">
              <h2 class="s-52 w-700">Component 1 - Impact</h2>
              <p class="p-lg">No content yet!
</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
