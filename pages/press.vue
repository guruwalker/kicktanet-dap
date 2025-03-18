<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

const newsItems = [
  {
    image: "https://picsum.photos/400/400?random=1",
    caption:
      "Digital inclusion initiative expands access to rural communities.",
  },
  {
    image: "https://picsum.photos/400/400?random=2",
    caption:
      "UK Digital Access Programme partners with Mandera County for training.",
  },
  {
    image: "https://picsum.photos/400/400?random=3",
    caption: "Community Digital Champions recognized for their contributions.",
  },
  {
    image: "https://picsum.photos/400/400?random=4",
    caption: "New digital hubs set to launch in Busia and Mandera counties.",
  },
  {
    image: "https://picsum.photos/400/400?random=5",
    caption:
      "British High Commission delegation visits digital training centers.",
  },
  {
    image: "https://picsum.photos/400/400?random=6",
    caption:
      "Kenya aims to reach 20 million digitally literate citizens by 2027.",
  },
];
</script>

<template>
  <section id="press-page" class="gr--whitesmoke pb-80 inner-page-hero">
    <div class="container">
      <!-- SECTION TITLE -->
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-9 text-center">
          <div class="section-title mb-80">
            <h2 class="s-52 w-700">News & Media</h2>
            <p class="p-lg">
              Stay updated with the latest stories and media coverage of our
              digital inclusion initiatives.
            </p>
          </div>
        </div>
      </div>

      <!-- NEWS ITEMS GRID -->
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        <div v-for="(news, index) in newsItems" :key="index" class="col">
          <div class="team-member mb-60">
            <!-- News Image -->
            <div class="team-member-photo r-14">
              <div class="hover-overlay">
                <img class="img-fluid" :src="news.image" alt="News Image" />
                <div class="item-overlay"></div>
              </div>
            </div>
            <!-- News Caption -->
            <div class="team-member-data text-center">
              <h6 class="s-20 color--black w-700">{{ news.caption }}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
