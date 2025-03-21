<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Our Partners | KICKTANET- Digital Inclusion Project",
  description:
    "Discover the organizations partnering with KICKTANET- Digital Inclusion Project to drive digital inclusion.",
});

const partners = [
  {
    id: 1,
    image: "/assets/images/partners/kicktanet-logo.png",
    name: "KICTANet",
    link: "/partners/kictanet",
    description:
      "A multi-stakeholder platform for policy and regulation dialogue in Kenya’s ICT sector.",
    website: "https://www.kictanet.or.ke",
    social: {
      twitter: "https://twitter.com/kictanet",
      linkedin: "https://www.linkedin.com/company/kictanet",
    },
  },
  {
    id: 2,
    image: "/assets/images/partners/uk-id-logo.png",
    name: "UK International Development",
    link: "/partners/ukdap",
    description:
      "Supporting digital inclusion initiatives in Kenya through strategic partnerships.",
    website: "https://www.gov.uk/guidance/digital-access-programme",
    social: {
      twitter: "https://twitter.com/UKinKenya",
      linkedin: "https://www.linkedin.com/company/uk-government",
    },
  },
  {
    id: 3,
    image: "/assets/images/logos/busia-logo.png",
    name: "Busia County Government",
    link: "/partners/busia",
    description:
      "Driving digital transformation and economic empowerment in Busia County.",
    website: "https://busiacounty.go.ke",
    social: {
      twitter: "https://twitter.com/busia_county",
      linkedin: "https://www.linkedin.com/company/busia-county",
    },
  },
  {
    id: 4,
    image: "/assets/images/partners/mandera-county-logo.jpeg",
    name: "Mandera County Government",
    link: "/partners/mandera",
    description:
      "Enhancing digital infrastructure and services for Mandera residents.",
    website: "https://mandera.go.ke",
    social: {
      twitter: "https://twitter.com/mandera_county",
      linkedin: "https://www.linkedin.com/company/mandera-county",
    },
  },
];
</script>

<template>
  <div>
    <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <div class="inner-page-title text-center">
              <h2 class="s-52 w-700">Our Partners</h2>
              <p class="p-lg">
                Collaborating with organizations to drive digital inclusion.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="posts-wrapper">
        <div class="row d-flex justify-center">
          <div
            v-for="partner in partners"
            :key="partner.id"
            class="col-md-4 col-lg-6"
          >
            <div class="partner-card animate__animated animate__fadeInUp">
              <div class="partner-img">
                <img
                  class="img-fluid"
                  :src="partner.image"
                  :alt="partner.name"
                />
              </div>
              <div class="partner-info text-center">
                <h6 class="s-20 w-700">{{ partner.name }}</h6>
                <p>{{ partner.description }}</p>

                <!-- Partner Links -->
                <div class="partner-links">
                  <a
                    :href="partner.website"
                    target="_blank"
                    class="partner-link"
                    >🌍 Website</a
                  >
                  <a
                    v-if="partner.social.twitter"
                    :href="partner.social.twitter"
                    target="_blank"
                    class="partner-link"
                  >
                    🐦 Twitter
                  </a>
                  <a
                    v-if="partner.social.linkedin"
                    :href="partner.social.linkedin"
                    target="_blank"
                    class="partner-link"
                  >
                    🔗 LinkedIn
                  </a>
                </div>

                <!-- <NuxtLink
                  :to="partner.link"
                  class="tra-link ico-20 color--theme"
                >
                  Read More... <span class="flaticon-next"></span>
                </NuxtLink> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.posts-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 20px;
}

.partner-card {
  background: #fff;
  border-radius: 20px; /* Rounded card */
  overflow: hidden;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin: 20px;
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
  height: 160px; /* Fixed height for consistency */
  border-radius: 15px;
  padding: 10px;
}

.partner-img img {
  max-width: 80%;
  max-height: 100%;
  object-fit: contain;
}

.partner-info {
  margin-top: 15px;
}

.partner-links {
  margin-top: 10px;
}

.partner-link {
  display: inline-block;
  margin: 5px;
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.partner-link:hover {
  color: #0056b3;
}
</style>
