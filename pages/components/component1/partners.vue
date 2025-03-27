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
            <div class="inner-page-title">
              <h2 class="s-52 w-700">Component 1 - Partners</h2>
              <p class="p-lg">
                Training partners Supporting PWDs in Mandera and Busia
              </p>

              <ol class="simple-list pt-20">
                <li class="list-item">
                  <p>
                    1. Kenya Society for the Blind - Benson Kiptum -
                    benson.kiptum@ksblind.org
                  </p>
                </li>
                <li class="list-item">
                  <p class="mb-0">
                    2. Signs Media - Deaf - Luke Muleka - mulekaluke@yahoo.com
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
