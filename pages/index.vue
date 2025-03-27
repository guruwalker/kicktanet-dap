<script setup>
import TestimonialsData from "~~/components/Data/Testimonials";

useHead({
  bodyAttrs: {
    class: "navbar-light",
  },
});

const testimonials = ref(TestimonialsData);

const items = ref([
  {
    title: "Unlocking Digital Potential",
    description: "",
    image: "/assets/images/carousel/hero1.jpeg",
  },
  {
    title: "Education for Inclusion",
    description: "Teaching Digital Literacy in Underserved Communities.",
    image: "/assets/images/carousel/hero2.jpeg",
  },
  {
    title: "From Learners to Innovators",
    description: "Hands-on Training in Digital Tools & Coding.",
    image: "/assets/images/carousel/hero3.jpeg",
  },
  {
    title: "Creating Opportunities",
    description: "Digital Access for Work, Learning, and Growth.",
    image: "/assets/images/carousel/hero4.jpeg",
  },
  {
    title: "Collaboration for Change",
    description: "Stakeholders Uniting for Digital Inclusion.",
    image: "/assets/images/carousel/hero5.jpeg",
  },
  {
    description: "Bridging the Digital Gender Divide.",
    title: "Empowering Women in Tech",
    image: "/assets/images/carousel/hero6.jpeg",
  },
]);
</script>

<template>
  <div class="container">
    <!-- Hero -->
    <!-- <section id="hero-27" class="gr--whitesmoke hero-section">
      <div class="hero-overlay bg--fixed">
        <div class="container text-center">
          <div class="row justify-content-center">
            <div class="">
              <div class="hero-27-txt animate__animated animate__fadeInUp">
                <h2 class="s-50 w-700">
                  Strengthening Digital Communities in Kenya
                </h2>
                <p class="s-20">
                 Narrowing the Digital Divide by Promoting Digital Inclusion, Enhancing Digital Skills and Empowering Individuals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <section
      id="features-12"
      class="shape--bg shape--white-400 pt-100 features-section division"
    >
      <div class="container">
        <UCarousel
          v-slot="{ item }"
          fade
          dots
          auto-scroll
          loop
          wheel-gestures
          :items="items"
          class="w-full mx-auto relative"
        >
          <div class="relative w-full h-[50vh] md:h-[60vh] px-6">
            <!-- Image -->
            <img
              :src="item.image"
              class="w-full h-full object-cover rounded-lg"
            />

            <!-- Overlay Text -->
            <div
              class="absolute inset-0 flex flex-col justify-end p-6 text-white rounded-lg"
            >
              <h2 class="text-xl md:text-2xl font-bold text-white">
                {{ item.title }}
              </h2>
              <p class="text-sm md:text-base">{{ item.description }}</p>
            </div>
          </div>
        </UCarousel>
      </div>
    </section>

    <!-- Stats -->
    <SectionsDemo27Section13 />
    <!-- Partners -->
    <!-- <SectionsDemo27Section8 /> -->

    <!-- Project Objectives -->
    <SectionsDemo27Section5 />

    <section>
      <div class="container container-fluid">
        <div class="row justify-content-center">
          <div class="col">
            <div class="inner-page-title text-center">
              <h2 class="s-22">See the latest from our press</h2>
            </div>
          </div>
        </div>
        <div class="container row">
          <!-- IMAGES-1 -->
          <div class="col-md-5">
            <div class="text-end">
              <!-- IMAGE-1 -->
              <div class="about-2-img a-2-1 r-12">
                <img
                  class="img-fluid"
                  src="/assets/images/visits-mandera/me-visit/three.jpg"
                  alt="about-image"
                />
              </div>
              <!-- IMAGE-2 -->
              <div class="about-2-img a-2-2 r-12">
                <img
                  class="img-fluid"
                  src="/assets/images/visits-mandera/me-visit/two.jpg"
                  alt="about-image"
                />
              </div>
            </div>
          </div>
          <!-- END IMAGES-1 -->
          <!-- IMAGES-2 -->
          <div class="col-md-7">
            <!-- IMAGE-3 -->
            <div class="about-2-img a-2-3 r-12">
              <img
                class="img-fluid"
                src="/assets/images/visits-mandera/me-visit/nineteen.jpg"
                alt="about-image"
              />
            </div>
            <div class="row">
              <div class="col-md-5 col-lg-6">
                <div class="about-2-img a-2-4 r-12">
                  <img
                    class="img-fluid"
                    src="/assets/images/visits-mandera/me-visit/ten.jpg"
                    alt="about-image"
                  />
                </div>
              </div>
            </div>
            <!-- End row -->
          </div>
          <!-- END IMAGES-2 -->
        </div>
        <!-- End row -->
      </div>
    </section>

    <!-- Benefits for people -->
    <SectionsDemo27Section10 />

    <!-- How trainings are done -->
    <!-- <SectionsDemo27Section15 /> -->

    <!-- FAQs -->
    <SectionsDemo27Section18 />

    <!-- Testimonials -->
    <!-- SECTION TITLE -->
    <div class="row justify-content-center">
      <div class="col">
        <div class="inner-page-title text-center">
          <h2 class="s-32 w-700">Testimonials from Participants</h2>
          <p class="p-lg">
            Hear from those impacted by our work in digital inclusion.
          </p>
        </div>
      </div>
    </div>

    <!-- TESTIMONIALS WRAPPER -->
    <div class="reviews-2-wrapper rel mt-4">
      <div
        v-if="testimonials.length"
        class="row align-items-center row-cols-1 row-cols-md-2"
      >
        <div
          v-for="testimonial in testimonials"
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
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255); /* Dark overlay */
}
.text-content {
  position: absolute;
  z-index: 2;
}
</style>
