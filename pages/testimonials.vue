<script setup>
import { ref, computed } from "vue";
import TestimonialsData from "~~/components/Data/Testimonials";

useSeoMeta({
  title: "Testimonials | KICKTANet DAP",
  ogTitle: "Testimonials | KICKTANet DAP",
});

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const testimonials = ref(TestimonialsData);
const filters = ["All", "Project Partner", "County Resident"];
const selectedFilter = ref("All");

const filteredTestimonials = computed(() => {
  if (selectedFilter.value === "All") {
    return testimonials.value;
  }
  return testimonials.value.filter(
    (t) => t.testimonial_type === selectedFilter.value
  );
});
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
              <h2 class="s-52 w-700">What People Say</h2>
              <p class="p-lg">
                Hear from those impacted by our work in digital inclusion.
              </p>
            </div>
          </div>
        </div>

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

        <!-- TESTIMONIALS WRAPPER -->
        <div class="reviews-2-wrapper rel mt-4">
          <div
            v-if="filteredTestimonials.length"
            class="row align-items-center row-cols-1 row-cols-md-2"
          >
            <div
              v-for="testimonial in filteredTestimonials"
              :key="testimonial.id"
              class="col d-flex flex-grow-1"
            >
              <div id="rw-2-2" class="review-2 bg--white-100 block-shadow r-08">
                <div class="review-ico ico-65">
                  <span class="flaticon-quote"></span>
                </div>
                <div class="review-txt">
                  <p>{{ testimonial.text }}</p>
                  <div class="author-data clearfix">
                    <div class="review-avatar">
                      <img :src="testimonial.avatar" alt="review-avatar" />
                    </div>
                    <div class="review-author">
                      <h6 class="s-18 w-700">{{ testimonial.author }}</h6>
                      <p class="p-sm">{{ testimonial.testimonial_type }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- NO TESTIMONIALS FOUND -->
          <div v-else class="text-center mt-5">
            <p class="p-lg text-muted">
              No testimonials found for the selected filter.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
