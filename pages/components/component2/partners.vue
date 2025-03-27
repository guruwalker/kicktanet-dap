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
              <h2 class="s-52 w-700">Component 2 - Partners</h2>
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

              <p class="p-lg">
                Cascading partners training communities in Mandera and Busia;
              </p>

              <ol class="simple-list pt-20">
                <li class="list-item">
                  <p>
                    1. Gencad - Mandera County - ABDIRASHID ALI -
                    abdirashid@gencad.org
                  </p>
                </li>
                <li class="list-item">
                  <p class="mb-0">
                    2. African Centre For Women, Information and Communications
                    Technology (ACWICT) - Busia County, Budalangi - Funyula -
                    Marachi - Constantine O Obuya - cobuya_1@acwict.org
                  </p>
                </li>

                <li class="list-item">
                  <p class="mb-0">
                    3. Akukuranut Development Trust (ADT) - Busia County, Teso
                    South, Teso Central - Judith Atyang - adtbusia24@gmail.com
                  </p>
                </li>
                <li class="list-item">
                  <p class="mb-0">
                    4. Technology For Growth - Busia County, Nambale, Teso North
                    - Josephine Kavindu - kavindu@technology4growth.org
                  </p>
                </li>

                <li class="list-item">
                  <p class="mb-0">
                    5. KICTANet - Busia County, Matayos - Thomas Wanzala -
                    wanzallah@gmail.com
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
