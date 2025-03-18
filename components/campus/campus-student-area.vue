<template>
  <section class="tp-campus-student-area grey-bg">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div
            id="down"
            class="tp-campus-student-box pb-100 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div class="tp-campus-student-heading text-center">
              <h3 class="tp-campus-student-title">Student Life</h3>
              <p>
                Life at Acadia University is enriching, exciting, and energizing
              </p>
            </div>

            <!-- Tab Content -->
            <div class="tp-campus-student-content">
              <div class="tab-content" id="myTabContent">
                <div
                  v-for="tab in tabContentData"
                  :key="tab.id"
                  class="tab-pane fade"
                  :class="{ 'show active': tab.active }"
                  :id="tab.id"
                  role="tabpanel"
                  :aria-labelledby="`${tab.id}-tab`"
                >
                  <div class="tp-campus-student-wrap p-relative">
                    <div class="tp-campus-student-thumb">
                      <img :src="tab.imgSrc" :alt="tab.title" />
                    </div>
                    <div class="tp-campus-student-item">
                      <h4 class="tp-campus-student-item-title">
                        {{ tab.title }}
                      </h4>
                      <p>{{ tab.description }}</p>
                      <div class="tp-campus-student-item-thumb">
                        <img :src="tab.thumbImgSrc" :alt="tab.title" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab Navigation -->
            <div class="tp-campus-student-list">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li
                  v-for="nav in navData"
                  :key="nav.id"
                  class="nav-item"
                  role="presentation"
                >
                  <button
                    class="nav-link"
                    :class="{ active: nav.isActive }"
                    :id="`${nav.id}-tab`"
                    data-bs-toggle="tab"
                    :data-bs-target="`#${nav.id}`"
                    type="button"
                    role="tab"
                    :aria-controls="nav.ariaControls"
                    :aria-selected="nav.isActive"
                    :tabindex="nav.isActive ? 0 : -1"
                  >
                    {{ nav.title }}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const navData = ref([
  {
    id: "home",
    title: "Housing & Dining",
    ariaControls: "home",
    isActive: true,
  },
  {
    id: "profile",
    title: "Student Clubs",
    ariaControls: "profile",
    isActive: false,
  },
  {
    id: "contact",
    title: "Arts & Culture",
    ariaControls: "contact",
    isActive: false,
  },
  {
    id: "Moscow",
    title: "Moscow Campus",
    ariaControls: "Moscow",
    isActive: false,
  },
]);

const tabContentData = ref([
  {
    id: "home",
    active: true,
    imgSrc: "/images/campus/campus/campus-student-2.jpg",
    title: "Housing & Dining",
    description:
      "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    thumbImgSrc: "/images/campus/campus/campus-student.jpg",
  },
  {
    id: "profile",
    imgSrc: "/images/campus/campus/campus-student-3.jpg",
    title: "Student Clubs",
    description:
      "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    thumbImgSrc: "/images/campus/campus/campus-student.jpg",
  },
  {
    id: "contact",
    imgSrc: "/images/campus/campus/campus-student-4.jpg",
    title: "Arts & Culture",
    description:
      "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    thumbImgSrc: "/images/campus/campus/campus-student.jpg",
  },
  {
    id: "Moscow",
    imgSrc: "/images/campus/campus/campus-student-5.jpg",
    title: "Moscow Campus",
    description:
      "Student Housing provides a home for eligible undergraduate and graduate students, including couples and families.",
    thumbImgSrc: "/images/campus/campus/campus-student.jpg",
  },
]);
</script>
