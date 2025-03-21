<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
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
  <div>
    <section id="single-post" class="pb-90 inner-page-hero blog-page-section container">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="post-content">
              <div class="single-post-title text-center">
                <span class="post-tag color--green-400">Mandera County</span>
                <h2 class="s-46 w-700">M&E Visit for the Empowerment project at Mandera County</h2>
                <div class="blog-post-meta mt-35">
                  <ul class="post-meta-list ico-10">
                    <li><p class="p-md w-500">By Prof Jimmy Macharia</p></li>
                    <li class="meta-list-divider">
                      <p><span class="flaticon-minus"></span></p>
                    </li>
                    <li><p class="p-md">Wednesday 19, March 2025</p></li>
                  </ul>
                </div>
              </div>
              <div class="blog-post-img py-50">
                <img class="img-fluid r-16" :src="images[0]" alt="blog-post-image" />
              </div>
              <div class="single-post-txt">
                <div class="container-fluid">
                  <div class="row">
                    <div v-for="(image, index) in images.slice(1)" :key="index" class="col-md-6 py-2">
                      <img class="img-fluid r-12" :src="image" alt="press-image" />
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col post-share-list">
                  <ul class="share-social-icons ico-20 text-center clearfix">
                    <li><a href="#" class="share-ico"><span class="flaticon-twitter"></span></a></li>
                    <li><a href="#" class="share-ico"><span class="flaticon-facebook"></span></a></li>
                    <li><a href="#" class="share-ico"><span class="flaticon-bookmark"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
