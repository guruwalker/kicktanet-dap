<template>
  <div class="brands-carousel-5">
    <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :slides-per-view="2"
      :loop="true"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :breakpoints="{
        400: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        900: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <div class="brand-logo">
          <img class="img-fluid theme-light" :src="image" alt="image.alt" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
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

<style scoped>
.brand-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto; /* Set a fixed width */
  background-color: white; /* Adds a consistent background for all images */
  border-radius: 8px;
  overflow: hidden;
}

.brand-logo img {
  object-fit: contain;
  padding: 10px;

}
</style>
