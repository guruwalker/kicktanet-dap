<script setup lang="ts">
import { ref, computed } from "vue";

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Field Visits in Mandera & Busia | KICKTANET DAP",
  description:
    "Explore our field visits in Mandera and Busia as part of the KICKTANet Digital Access Program, bridging the digital divide with real impact.",
});

const visits = ref([
  {
    id: 1,
    name: "M&E Visit  for the Empowerment  project",
    slug: "mandera-visit-for-empowerment",
    date: "Wednesday 19, March 2025",
    author: "Prof. Jimmy Macharia",
    image: "/assets/images/visits-mandera/me-visit/one.jpg",
    title: "M&E Visit  for the Empowerment  project",
    description:
      "This was the first event to kickoff the project. Youths were engaged in Mandera County.",
    location: "Mandera County",
  },
  // {
  //   id: 2,
  //   name: "ICT Infrastructure Assessment",
  //   slug: "ict-infrastructure-assessment",
  //   date: "February 20, 2025",
  //   author: "Prof. Jimmy Macharia",
  //   image: "/assets/images/blog/post-2-img.jpg",
  //   title: "Evaluating Internet Access in Rural Areas",
  //   description:
  //     "An assessment of internet infrastructure in Mandera to identify gaps and recommend improvements for better connectivity.",
  //   location: "Mandera County",
  // },
  // {
  //   id: 3,
  //   name: "E-Government Services Workshop",
  //   slug: "e-government-services-workshop",
  //   date: "January 15, 2025",
  //   author: "Prof. Jimmy Macharia",
  //   image: "/assets/images/blog/post-3-img.jpg",
  //   title: "Enhancing Access to Online Government Services",
  //   description:
  //     "A workshop in Busia to help residents navigate and utilize digital government services effectively.",
  //   location: "Busia County",
  // },
]);

const filters = ["All", "Mandera County", "Busia County"];
const selectedFilter = ref("All");

const filteredVisits = computed(() => {
  return selectedFilter.value === "All"
    ? visits.value
    : visits.value.filter((visit) => visit.location === selectedFilter.value);
});
</script>
<template>
  <div>
    <section id="visits-page" class="gr--whitesmoke inner-page-hero division">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <div class="inner-page-title text-center">
              <h2 class="s-52 w-700">Field Visits</h2>
              <p class="p-lg">
                Explore our field visits in Mandera and Busia, bridging the
                digital divide with real impact.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Filter Section -->
      <div class="filter-wrapper text-center mt-4">
        <button
          v-for="filter in filters"
          :key="filter"
          class="filter-btn"
          :class="{ active: selectedFilter === filter }"
          @click="selectedFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <!-- Visits List -->
      <div class="posts-wrapper mt-4">
        <div v-if="filteredVisits.length" class="row">
          <div
            v-for="visit in filteredVisits"
            :key="visit.id"
            class="col-md-6 "
          >
            <NuxtLink
              class="blog-post visit-card animate__animated animate__fadeInUp clearfix"
              :to="`/visits/${visit.slug}`"
            >
              <div class="blog-post-img mb-35">
                <img
                  class="img-fluid r-16"
                  :src="visit.image"
                  :alt="visit.title"
                />
              </div>
              <div class="blog-post-txt">
                <h6 class="s-20 w-700">
                  {{ visit.title }}
                </h6>
                <p>{{ visit.description }}</p>
                <div class="blog-post-meta mt-20">
                  <ul class="post-meta-list ico-10">
                    <li>
                      <p class="p-sm w-500">{{ visit.author }}</p>
                    </li>
                    <li class="meta-list-divider">
                      <p><span class="flaticon-minus"></span></p>
                    </li>
                    <li>
                      <p class="p-sm">{{ visit.date }}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

        <!-- No Visits Found -->
        <div v-else class="text-center mt-5">
          <p class="p-lg text-muted">
            No visits found for the selected filter.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.posts-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
}

.filter-wrapper {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filter-btn {
  background: #eaeaea;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.filter-btn.active {
  background: #007bff;
  color: white;
}
</style>
