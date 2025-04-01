<script setup>
import Team from "~~/components/Data/Team";

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Knowledge Products | KICKTANet DAP",
  ogTitle: "Knowledge Products | KICKTANet DAP",
});

const teamMembers = ref(Team);
</script>

<template>
  <div>
    <section
      id="team-2"
      class="gr--whitesmoke pb-40 inner-page-hero team-section"
    >
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="container">
          <div class="row justify-content-center">
            <div class="col">
              <div class="inner-page-title text-center">
                <h2 class="s-40 w-700">Generating knowledge products</h2>
                <p class="p-lg">
                  Get to know the dedicated professionals driving the Digital
                  Access Project.<br />
                  They are committed to bridging the digital divide through
                  innovation, research, and community engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- TEAM MEMBERS WRAPPER -->
        <div class="team-members-wrapper">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <div
              class="col"
              v-for="(member, index) in teamMembers"
              :key="index"
            >
              <div
                class="team-member mb-50 animate__animated animate__fadeInUp"
              >
                <!-- Team Member Photo -->
                <div class="team-member-photo r-14">
                  <div class="hover-overlay">
                    <img
                      class="img-fluid"
                      :src="member.image"
                      alt="team-member-photo"
                    />
                    <div class="item-overlay"></div>
                  </div>
                </div>
                <!-- Team Member Data -->
                <div class="team-member-data">
                  <h6 class="s-20 w-700 color--theme">{{ member.name }}</h6>
                  <p class="color--grey my-3">{{ member.role }}</p>
                  <NuxtLink
                    v-if="member.email"
                    class="d-flex align-center gap-2"
                    :to="`mailto:{{ member.email }}`"
                  >
                    <vue-feather type="mail" />
                    <span>{{ member.email }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- TEAM MEMBERS WRAPPER -->
      </div>
      <!-- End container -->
    </section>
  </div>
</template>
