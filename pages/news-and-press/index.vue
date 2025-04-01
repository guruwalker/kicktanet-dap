<script setup lang="ts">
import { ref, computed } from "vue";

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "News & Press | KICKTANET DAP",
  description:
    "Stay updated with the latest news, media coverage, and project highlights from the KICKTANet Digital Access Program.",
});

// Define the available filters (All + 8 components)
const filters = [
  "All",
  "Component 1",
  "Component 2",
  "Component 3",
  "Component 4",
  "Component 5",
  "Component 6",
  "Component 7",
  "Component 8",
];

// Selected filter state
const selectedFilter = ref("All");

const newsPress = ref([
  {
    id: 1,
    title: "M&E Visit for the Empowerment project",
    slug: "mandera-visit-for-empowerment",
    date: "Wednesday 19, March 2025",
    image: "/assets/images/visits-mandera/me-visit/one.jpg",
    component: "component1",
  },
  {
    id: 2,
    title: "Youtube Video",
    slug: "youtube-video",
    date: "Wednesday 19, March 2025",
    image: "/assets/images/blog/post-4-img.jpg",
    component: "component1",
  },
  // {
  //   id: 3,
  //   title: "Digital Divide Panel Discussion",
  //   slug: "digital-divide-panel",
  //   date: "Monday 24, March 2025",
  //   image: "/assets/images/blog/post-5-img.jpg",
  //   component: "component2",
  // },
  // {
  //   id: 4,
  //   title: "Workshop on Digital Literacy",
  //   slug: "digital-literacy-workshop",
  //   date: "Friday 28, March 2025",
  //   image: "/assets/images/blog/post-6-img.jpg",
  //   component: "component3",
  // },
]);

// Filtered newsPress computed property
const filteredNewsPress = computed(() => {
  if (selectedFilter.value === "All") return newsPress.value;

  const componentKey = selectedFilter.value.toLowerCase().replace(" ", "");
  return newsPress.value.filter(news => news.component === componentKey);
});

</script>

<template>
  <div>
    <section
      id="news-press-page"
      class="gr--whitesmoke inner-page-hero division"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <div class="inner-page-title text-center">
              <h2 class="s-52 w-700">News & Press</h2>
              <p class="p-lg">
                Stay updated with the latest news, media coverage, and key
                highlights from our project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <!-- FILTER SECTION -->
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

        <!-- News & Press List -->
        <div class="posts-wrapper mt-4">
          <div v-if="filteredNewsPress.length" class="row">
            <div
              v-for="news in filteredNewsPress"
              :key="news.id"
              class="col-md-4"
            >
              <NuxtLink class="news-card" :to="`/news-and-press/${news.slug}`">
                <div class="news-card-img mb-35">
                  <img
                    class="img-fluid r-16"
                    :src="news.image"
                    :alt="news.title"
                  />
                </div>
                <div class="news-card-txt text-center">
                  <h6 class="s-20 w-700">{{ news.title }}</h6>
                  <p class="text-muted">{{ news.date }}</p>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- No News Found -->
          <div v-else class="text-center mt-5">
            <p class="p-lg text-muted">
              No uploads for this component yet!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.posts-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.news-card {
  display: block;
  text-decoration: none;
  transition: transform 0.3s;
}

.news-card:hover {
  transform: scale(1.03);
}

.news-card-img img {
  border-radius: 10px;
  width: 100%;
  height: auto;
  object-fit: cover;
}

.news-card-txt {
  margin-top: 10px;
}

.filter-wrapper {
  display: flex;
  flex-wrap: wrap;
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
