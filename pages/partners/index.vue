<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Our Partners | KICKTANET DAP",
  description:
    "Discover the organizations partnering with KICKTANET- Digital Access Project to drive Digital Access.",
});

const fundingPartners = [
  {
    id: 1,
    image: "/assets/images/partners/uk-id-logo.png",
    name: "FCDO",
    description:
      "Supporting Digital Access initiatives in Kenya through strategic partnerships.",
    website:
      "https://www.gov.uk/government/organisations/department-for-international-development",
  },
];

const managingPartners = [
  {
    id: 1,
    image: "/assets/images/partners/kicktanet-logo.png",
    name: "KICTANet",
    description:
      "A multi-stakeholder platform for policy and regulation dialogue in Kenya’s ICT sector.",
    website: "https://www.kictanet.or.ke",
  },
];

const implementingPartners = [
  {
    id: 1,
    image: "/assets/images/logos/busia-logo.png",
    name: "Busia County Government",
    description:
      "Driving digital transformation and economic empowerment in Busia County.",
    website: "https://busiacounty.go.ke",
  },
  {
    id: 2,
    image: "/assets/images/partners/mandera-county-logo.jpeg",
    name: "Mandera County Government",
    description:
      "Enhancing digital infrastructure and services for Mandera residents.",
    website: "https://mandera.go.ke",
  },
  {
    id: 3,
    name: "SoteHub",
    image: "/assets/images/partners/sotehub-logo.png",
    description:
      "SoteHub is a leading Entrepreneur Support Organization (ESO) based in Mombasa, Kenya, focusing on business incubation and acceleration in sectors like agriculture, blue economy, climate, and digital spaces.",
    website: "https://sotehub.com",
  },
  {
    id: 4,
    name: "EldoHub",
    image: "/assets/images/partners/eldohub-logo.png",
    description:
      "EldoHub is an education, innovation, and technology organization targeting youth and women in Kenya, offering programs in STEM education, job matching, digital apprenticeships, and entrepreneurship training.",
    website: "https://eldohub.co.ke",
  },
  {
    id: 5,
    name: "Plusfarm",
    image: "/assets/images/partners/plusfarm-logo.jpeg",
    description:
      "Plusfarm is a leading agribusiness consulting company in Kenya and East Africa, providing expert guidance to farm owners by integrating cutting-edge agricultural technology with a client-centric approach.",
    website: "https://plusfarmkenya.co.ke",
  },
  {
    id: 6,
    name: "Kilimo Hakika",
    image: "/assets/images/partners/kilimo-hakika-logo.jpeg",
    description:
      "Kilimo Hakika is dedicated to promoting sustainable agriculture practices and improving farmers' livelihoods in Kenya.",
    website: "https://ke.linkedin.com/in/kilimo-hakika-ltd-78850b326",
  },
  {
    id: 7,
    name: "Gencad",
    image: "/assets/images/partners/gencad-logo.png",
    description:
      "Generation for Change and Development (GENCAD) is involved in initiatives aimed at enhancing Digital Access and community development in Mandera County.",
    website: "https://gencad.org/",
  },
  {
    id: 8,
    name: "African Centre For Women, Information and Communications Technology (ACWICT)",
    image: "/assets/images/partners/acwict-logo.png",
    description:
      "ACWICT is a Kenyan-based organization that promotes women's access to and participation in the information and communications technology sector.",
    website: "https://acwict.org/",
  },
  {
    id: 9,
    name: "Akukuranut Development Trust (ADT)",
    image: "/assets/images/partners/adtrust-logo.jpeg",
    description:
      "Akukuranut Development Trust focuses on community development projects aimed at improving livelihoods in Busia County.",
    website: "",
  },
  {
    id: 10,
    name: "Technology For Growth",
    image: "/assets/images/partners/t4g-logo.jpg",
    description:
      "Technology For Growth (TECH4G) is involved in initiatives aimed at leveraging technology to drive economic growth and development in Busia County.",
    website: "https://technology4growth.org/",
  },
  {
    id: 11,
    name: "Signs Media  TV",
    image: "/assets/images/partners/default-logo.jpg",
    description: "",
    website: "#",
  },
  {
    id: 12,
    name: "Kenya Society for the Blind",
    image: "/assets/images/partners/ksb-logo.png",
    description: "",
    website: "https://www.ksblind.org/",
  },
];
</script>

<template>
  <div class="">
    <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col">
            <div class="inner-page-title text-center">
              <h2 class="s-52 w-700">Our Partners</h2>
              <p class="p-lg">
                Collaborating with organizations to drive Digital Access.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <h3 class="s-22 w-700">Funding Partners</h3>

        <div class="row d-flex justify-center">
          <div
            v-for="partner in fundingPartners"
            :key="partner.id"
            class="col-md-6 col-lg-6"
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
                </div>

                <div class="txt-block-tra-link mt-25">
                  <NuxtLink
                    to="/partners/fcdo"
                    class="tra-link ico-20 color--theme"
                  >
                    Read more <span class="flaticon-next"></span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="s-22 w-700">Managing Partners</h3>

        <div class="row d-flex justify-center">
          <div
            v-for="partner in managingPartners"
            :key="partner.id"
            class="col-md-6 col-lg-6"
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
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3 class="s-22 w-700">Implementing Partners</h3>

        <div class="row d-flex justify-center">
          <div
            v-for="partner in implementingPartners"
            :key="partner.id"
            class="col-md-6 col-lg-6"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
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
