<script setup>
import ImpactStories from "~~/components/Data/ProjectImpactStories";

useSeoMeta({
  title: "Project Impact Stories | KICKTANet DAP",
  ogTitle: "Project Impact Stories | KICKTANet DAP",
});

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const stories = ref(ImpactStories);
</script>

<template>
  <div>
    <section
      id="reviews-2"
      class="gr--whitesmoke inner-page-hero reviews-section"
    >
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="row justify-content-center">
          <div class="col">
            <div class="inner-page-title text-center">
              <h2 class="s-42 w-700">What People Say</h2>
              <p class="p-lg">
                Hear from those impacted by our work in digital inclusion.
              </p>
            </div>
          </div>
        </div>

        <!-- Stories WRAPPER -->
        <div class="reviews-2-wrapper rel mt-4">
          <div class="row align-items-center row-cols-1 row-cols-md-2">
            <div
              v-for="story in stories"
              :key="story.id"
              class="col d-flex flex-grow-1"
            >
              <div id="rw-2-2" class="review-2 bg--white-100 block-shadow r-08">
                <div class="review-ico ico-65">
                  <span class="flaticon-quote"></span>
                </div>
                <div class="review-txt">
                  <p>{{ story.text }}</p>
                  <div class="author-data clearfix">
                    <div class="review-avatar">
                      <img :src="story.avatar" alt="review-avatar" />
                    </div>
                    <div class="review-author">
                      <h6 class="s-18 w-700">{{ story.author }}</h6>
                      <p class="p-sm">{{ story.role }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
