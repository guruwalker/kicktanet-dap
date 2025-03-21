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
                <h2 class="s-52 w-700">Meet the Team</h2>
                <p class="p-lg">
                  Get to know the dedicated professionals driving the Digital
                  Inclusion Project. Our team is committed to bridging the
                  digital divide through innovation, research, and community
                  engagement.
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
                  <p class="color--grey">{{ member.role }}</p>
                  <p v-if="member.email">
                    <a :href="'mailto:' + member.email">{{ member.email }}</a>
                  </p>
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
