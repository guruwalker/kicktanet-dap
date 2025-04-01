<script setup lang="ts">
import { ref } from "vue";

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});
const implementingPartners = ref([
  {
    id: 1,
    name: "KICTANet",
    description: "Overall CDC training",
    logo: "/assets/images/partners/kicktanet-logo.png",
    contactPerson: "Harriet Ratemo",
    emails: ["hratemo@kictanet.or.ke"],
  },
]);

const cascadingPartners = ref([
  {
    title:
      "Cascading partners for Citizen training to communities in Mandera and Busia",
    partners: [
      {
        name: "Gencad",
        county: "Mandera County",
        contactPerson: "ABDIRASHID ALI",
        emails: ["abdirashid@gencad.org"],
        logo: "/assets/images/partners/gencad-logo.png",
      },
      {
        name: "African Centre For Women, Information and Communications Technology (ACWICT)",
        county: "Busia County, Budalangi - Funyula - Marachi",
        contactPerson: "Constantine O Obuya",
        emails: ["cobuya_1@acwict.org"],
        logo: "/assets/images/partners/acwict-logo.png",
      },
      {
        name: "Akukuranut Development Trust (ADT)",
        county: "Busia County, Teso South, Teso Central",
        contactPerson: "Judith Atyang",
        emails: ["adtbusia24@gmail.com"],
        logo: "/assets/images/partners/adtrust-logo.jpeg",
      },
      {
        name: "Technology For Growth",
        county: "Busia County, Nambale, Teso North",
        contactPerson: "Josephine Kavindu",
        emails: ["kavindu@technology4growth.org"],
        logo: "/assets/images/partners/t4g-logo.jpg",
      },
      {
        name: "KICTANet",
        county: "Busia County, Matayos",
        contactPerson: "Thomas Wanzala",
        emails: ["wanzallah@gmail.com"],
        logo: "/assets/images/partners/kicktanet-logo.png",
      },
    ],
  },
]);

const trainingPartners = ref([
  {
    title: "Training partners Supporting PWDs in Mandera and Busia",
    partners: [
      {
        name: "Kenya Society for the Blind",
        contactPerson: "Benson Kiptum",
        emails: ["benson.kiptum@ksblind.org"],
        logo: "/assets/images/partners/ksb-logo.png",
      },
      {
        name: "Signs Media - Deaf",
        contactPerson: "Luke Muleka",
        logo: "/assets/images/partners/default-logo.png",
        emails: ["mulekaluke@yahoo.com"],
      },
    ],
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #1- Providing foundational digital skills
        </p>
        <h4 class="s-28">Implementing Partners</h4>
      </div>

      <!-- Implementing Partners -->
      <div class="grid-wrapper">
        <div
          v-for="partner in implementingPartners"
          :key="partner.id"
          class="partner-card"
        >
          <div class="partner-img">
            <img v-if="partner.logo" :src="partner.logo" :alt="partner.name" />
          </div>
          <div class="partner-info">
            <h6 class="s-20 w-700">{{ partner.name }}</h6>
            <div class="contact-info">
              <div v-if="partner.contactPerson" class="contact-item">
                <vue-feather type="user" />
                <span>{{ partner.contactPerson }}</span>
              </div>
              <div
                v-for="email in partner.emails"
                :key="email"
                class="contact-item"
              >
                <vue-feather type="mail" />
                <span>{{ email }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Cascading Partners -->
      <div
        v-for="category in cascadingPartners"
        :key="category.title"
        class="mt-10"
      >
        <h4 class="s-22 pt-50">{{ category.title }}</h4>
        <div class="grid-wrapper">
          <div
            v-for="partner in category.partners"
            :key="partner.name"
            class="partner-card"
          >
            <div class="partner-img">
              <img
                v-if="partner.logo"
                :src="partner.logo"
                :alt="partner.name"
              />
            </div>
            <div class="partner-info">
              <h6 class="s-20 w-700">
                {{ partner.name }} - {{ partner.county }}
              </h6>
              <div class="contact-info">
                <div v-if="partner.contactPerson" class="contact-item">
                  <vue-feather type="user" />
                  <span>{{ partner.contactPerson }}</span>
                </div>
                <div
                  v-for="email in partner.emails"
                  :key="email"
                  class="contact-item"
                >
                  <vue-feather type="mail" />
                  <span>{{ email }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Training Partners -->
      <div
        v-for="category in trainingPartners"
        :key="category.title"
        class="mt-10"
      >
        <h4 class="s-22 pt-50">{{ category.title }}</h4>
        <div class="grid-wrapper">
          <div
            v-for="partner in category.partners"
            :key="partner.name"
            class="partner-card"
          >
            <div class="partner-img">
              <img
                v-if="partner.logo"
                :src="partner.logo"
                :alt="partner.name"
              />
            </div>
            <div class="partner-info">
              <h6 class="s-20 w-700">{{ partner.name }}</h6>
              <div class="contact-info">
                <div v-if="partner.contactPerson" class="contact-item">
                  <vue-feather type="user" />
                  <span>{{ partner.contactPerson }}</span>
                </div>
                <div
                  v-for="email in partner.emails"
                  :key="email"
                  class="contact-item"
                >
                  <vue-feather type="mail" />
                  <span>{{ email }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;
  justify-content: center; /* Center items horizontally */
}
.partner-card {
  flex: 1 1 350px; /* Allow cards to grow and shrink with a minimum width of 350px */
  max-width: 100%; /* Prevent cards from growing too large */
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}
.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}
.partner-img {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
  height: 160px;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 10px;
}
.partner-img img {
  max-width: 80%;
  max-height: 100%;
  object-fit: contain;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
