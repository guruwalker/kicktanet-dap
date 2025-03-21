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
      <SwiperSlide>
        <div class="brand-logo">
          <img
            class="img-fluid theme-light"
            src="/assets/images/partners/kicktanet-logo.png"
            alt="brand-logo"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="brand-logo">
          <img
            class="img-fluid theme-light"
            src="/assets/images/partners/uk-id-logo.png"
            alt="brand-logo"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="brand-logo">
          <img
            class="img-fluid theme-light"
            src="/assets/images/logos/busia-logo.png"
            alt="brand-logo"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div class="brand-logo">
          <img
            class="img-fluid theme-light"
            src="/assets/images/partners/mandera-county-logo.jpeg"
            alt="brand-logo"
          />x
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.brand-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px; /* Set a fixed width */
  height: 180px; /* Set a fixed height */
}

.brand-logo img {
  max-width: 185px; /* Make the image fill the container */
  max-height: 200px;
  object-fit: contain; /* Ensures logos fit without being cropped */
}
</style>
