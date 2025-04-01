<script setup lang="ts">
import { ref } from "vue";

useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Component 3 - Partners | KICKTANet DAP",
});


const partners = ref([
  {
    id: 1,
    name: "KICTANet",
    logo: "/assets/images/partners/kicktanet-logo.png",
    contactPerson: "David Indeje",
    emails: ["dindeje@kictanet.or.ke"],
  },
]);
</script>

<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="text-left">
        <p class="s-20 w-700">
          COMPONENT #3- Develop awareness campaigns and content using various
          communication channels
        </p>
        <h4 class="s-22">Implementing partners</h4>
      </div>

      <div class="grid-wrapper">
        <div v-for="partner in partners" :key="partner.id" class="partner-card">
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
    </div>
  </section>
</template>

<style scoped>
.grid-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  margin-top: 40px;
  justify-content: space-between;
}

.partner-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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

.partner-info h6 {
  margin-bottom: 10px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.contact-item {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  margin-top: 5px;
}

.icon {
  width: 20px;
  height: 20px;
  color: #007bff;
}
</style>
