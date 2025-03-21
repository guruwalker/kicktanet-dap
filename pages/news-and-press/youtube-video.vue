<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const videoUrl = "https://www.youtube.com/embed/yeD41Kfxl68"; // Replace with actual video ID
</script>

<template>
  <div>
    <section
      id="single-post"
      class="pb-90 inner-page-hero blog-page-section container"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="post-content">
              <div class="single-post-title text-center">
                <span class="post-tag color--green-400">General</span>
                <h2 class="s-46 w-700">
                  Project Campaign Video
                </h2>
                <div class="blog-post-meta mt-35">
                  <ul class="post-meta-list ico-10">
                    <li><p class="p-md">Wednesday 19, March 2025</p></li>
                  </ul>
                </div>
              </div>

              <!-- YouTube Video Section -->
              <div class="video-container py-50">
                <iframe
                  width="100%"
                  height="450"
                  :src="videoUrl"
                  frameborder="0"
                  allowfullscreen
                  class="r-16"
                ></iframe>
              </div>

              <div class="row">
                <div class="col post-share-list">
                  <ul class="share-social-icons ico-20 text-center clearfix">
                    <li>
                      <a href="#" class="share-ico"
                        ><span class="flaticon-twitter"></span
                      ></a>
                    </li>
                    <li>
                      <a href="#" class="share-ico"
                        ><span class="flaticon-facebook"></span
                      ></a>
                    </li>
                    <li>
                      <a href="#" class="share-ico"
                        ><span class="flaticon-bookmark"></span
                      ></a>
                    </li>
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
