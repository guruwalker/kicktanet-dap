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
              <h2 class="s-52 w-700">Component 2 - Narrative</h2>
              <p class="p-lg">
                Partners - Intermediate and advanced skills and opportunities to
                the communities
              </p>

              <ol class="simple-list pt-20">
                <li class="list-item">
                  <p>
                    1. SoteHub - David Ogiga - david@sotehub.com,
                    alvin@sotehub.com
                  </p>
                </li>
                <li class="list-item">
                  <p class="mb-0">
                    2. EldoHub - Magdalene Chepkemoi - magdalene
                    mchepkemoi@eldohub.co.ke
                  </p>
                </li>

                <li class="list-item">
                  <p class="mb-0">
                    3. Plusfarm - Stepehen Moses - smoses@plusfarmkenya.co.ke
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
