<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Digital Inclusion in Mandera & Busia | KICKTANET- Digital Inclusion Project",
  description:
    "Discover how the KICKTANet Digital Inclusion Project is bridging the digital divide in Mandera and Busia by providing digital skills, services, and infrastructure.",
});

const counties = [
  {
    id: 1,
    image: "/assets/images/logos/mandera-logo.jpeg",
    title: "Mandera",
    link: "/counties/mandera",
    visitLink: '/visits',
    description:
      "Mandera faces high digital exclusion due to its arid conditions and limited connectivity. This project focuses on providing digital skills, government e-services, and affordable internet to enhance economic opportunities.",
  },
  {
    id: 2,
    image: "/assets/images/logos/busia-logo.png",
    title: "Busia",
    link: "/counties/busia",
    visitLink: '/visits',
    description:
      "Busia, a food-insecure region, struggles with digital access. The initiative supports women, youth, and small-scale traders in adopting digital technologies for economic empowerment.",
  },
];
</script>

<template>
  <div>
    <section id="counties-page" class="gr--whitesmoke inner-page-hero division">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <div class="inner-page-title text-center">
              <h2 class="s-52 w-700">Digital Inclusion in Mandera & Busia</h2>
              <p class="p-lg">
                Empowering communities through digital skills, infrastructure,
                and access to government e-services.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="posts-wrapper">
        <div class="row d-flex justify-center">
          <div
            v-for="county in counties"
            :key="county.id"
            class="col-md-6 col-lg-4"
          >
            <div
              class="blog-post mb-40 animate__animated animate__fadeInUp clearfix"
            >
              <div class="blog-post-img mb-35">
                <img
                  class="img-fluid r-16"
                  :src="county.image"
                  :alt="county.title"
                />
              </div>
              <div class="blog-post-txt">
                <h6 class="s-20 w-700">
                  <NuxtLink :to="county.link">{{ county.title }}</NuxtLink>
                </h6>
                <p>{{ county.description }}</p>
              </div>
            </div>
            <div class="txt-block-tra-link mt-25">
              <NuxtLink :to="county.visitLink" class="tra-link ico-20 color--theme">
                Activity in this county... <span class="flaticon-next"></span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
