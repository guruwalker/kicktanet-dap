<template>
  <section class="tp-shop-service-area pb-90">
    <div class="container">
      <div class="row">
        <div v-for="item in shopServices" :key="item.id" class="col-lg-4">
          <div
            class="tp-shop-service-item d-flex justify-content-between align-items-center mb-30"
            style="
              background-image: url(/images/shop/product/shop-service-shape.jpg);
            "
          >
            <div class="tp-shop-service-content">
              <h4 class="tp-shop-service-title" v-html="item.title"></h4>
              <p>{{ item.description }}</p>
            </div>
            <div class="tp-shop-service-thumb">
              <img :src="item.image" alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const shopServices = [
  {
    id: 1,
    title: "Efficient <br> Book Delivery",
    description: "Fast & Efficient Service",
    image: "/images/shop/author/shop-icon-1.png",
  },
  {
    id: 2,
    title: "Free Shipping For <br> Book Lovers",
    description: "Shop Books Now",
    image: "/images/shop/author/shop-icon-2.png",
  },
  {
    id: 3,
    title: "Return with Confidence",
    description: "Within 20 Days Return",
    image: "/images/shop/author/shop-icon-3.png",
  },
];
</script>
