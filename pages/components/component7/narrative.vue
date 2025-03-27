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
              <h2 class="s-52 w-700">Component 7 - Narrative</h2>
              <p class="p-lg">AI component</p>

              <ol class="simple-list pt-20">
                <li class="list-item">
                  <p>
                    1. African Centre for Technology Studies (ACTS) - Samuel
                    Wanjau - S.Wanjau@acts-net.org
                  </p>
                </li>
                <li class="list-item">
                  <p class="mb-0">
                    2. KICTANet - George Musumba - gmusumba@kictanet.or.ke
                  </p>
                </li>
              </ol>

              <p class="p-lg">Overall Communications Support</p>

              <ol class="simple-list pt-20">
                <li class="list-item">
                  <p>KICTANet, David Indeje, dindeje@kictanet.or.ke</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
