<script setup lang="ts">
import { ref, computed } from "vue";

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "News & Press | KICKTANET- Digital Inclusion Project",
  description:
    "Stay updated with the latest news, media coverage, and project highlights from the KICKTANet Digital Inclusion Project.",
});

const newsPress = ref([
  {
    id: 1,
    title: "M&E Visit  for the Empowerment  project",
    slug: "mandera-visit-for-empowerment",
    date: "Wednesday 19, March 2025",
    image: "/assets/images/visits-mandera/me-visit/one.jpg",
  },
  {
    id: 1,
    title: "Youtube Video",
    slug: "youtube-video",
    date: "Wednesday 19, March 2025",
    image: "/assets/images/blog/post-4-img.jpg",
  },
  // {
  //   id: 2,
  //   title: "Digital Skills Training Expands to Busia",
  //   slug: "digital-skills-busia",
  //   date: "February 25, 2025",
  //   image: "/assets/images/press/busia-training.jpg",
]);
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

      <!-- News & Press List -->
      <div class="posts-wrapper mt-4">
        <div v-if="newsPress.length" class="row">
          <div v-for="news in newsPress" :key="news.id" class="col-md-4">
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
            No news articles available at the moment.
          </p>
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
</style>
