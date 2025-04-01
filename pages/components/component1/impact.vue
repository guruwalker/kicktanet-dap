<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 1 - Impact | KICKTANet DAP",
});

const images = [
  "/assets/images/visits-mandera/me-visit/one.jpg",
  "/assets/images/visits-mandera/me-visit/two.jpg",
  "/assets/images/visits-mandera/me-visit/three.jpg",
  "/assets/images/visits-mandera/me-visit/four.jpg",
  "/assets/images/visits-mandera/me-visit/five.jpg",
  "/assets/images/visits-mandera/me-visit/six.jpg",
  "/assets/images/visits-mandera/me-visit/seven.jpg",
  "/assets/images/visits-mandera/me-visit/eight.jpg",
  "/assets/images/visits-mandera/me-visit/nine.jpg",
  "/assets/images/visits-mandera/me-visit/ten.jpg",
  "/assets/images/visits-mandera/me-visit/eleven.jpg",
  "/assets/images/visits-mandera/me-visit/twelve.jpg",
  "/assets/images/visits-mandera/me-visit/thirteen.jpg",
  "/assets/images/visits-mandera/me-visit/fourteen.jpg",
  "/assets/images/visits-mandera/me-visit/fifteen.jpg",
  "/assets/images/visits-mandera/me-visit/sixteen.jpg",
  "/assets/images/visits-mandera/me-visit/seventeen.jpg",
  "/assets/images/visits-mandera/me-visit/eighteen.jpg",
  "/assets/images/visits-mandera/me-visit/nineteen.jpg",
  "/assets/images/visits-mandera/me-visit/twenty.jpg",
  "/assets/images/visits-mandera/me-visit/twenty-one.jpg",
  "/assets/images/visits-mandera/me-visit/twenty-two.jpg",
  "/assets/images/visits-mandera/me-visit/twenty-three.jpg",
  "/assets/images/visits-mandera/me-visit/twenty-four.jpg",
];
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #1- Providing foundational digital skills
        </p>
        <h4 class="s-28">Impact</h4>
      </div>

      <div class="blog-post-img py-50">
        <!-- <img class="img-fluid r-16" :src="images[0]" alt="blog-post-image" /> -->
      </div>
      <div class="single-post-txt">
        <div class="container-fluid">
          <div class="row">
            <div
              v-for="(image, index) in images.slice(1)"
              :key="index"
              class="col-md-6 py-2"
            >
              <img class="img-fluid r-12" :src="image" alt="press-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
