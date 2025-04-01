<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Busia County | KICKTANet DAP",
});
</script>

<template>
  <div>
    <section id="single-post" class="pb-90 inner-page-hero blog-page-section">
      <div class="container">
        <div class="row justify-content-center">
          <!-- SINGLE POST CONTENT -->
          <div class="col-xl-10">
            <div class="post-content">
              <!--  SINGLE POST TITLE -->
              <div class="single-post-title text-center">
                <!-- Post Tag -->
                <span class="post-tag color--green-400">FCDO</span>
                <!-- Title -->
                <h2 class="s-46 w-700">
                  UK - Foreign, Commonwealth Development Office (FCDO)
                </h2>
              </div>
              <!-- END SINGLE POST TITLE -->
              <!-- SINGLE POST IMAGE -->
              <div class="blog-post-img py-50 d-flex justify-center">
                <img
                  class="img-fluid r-16"
                  src="/assets/images/partners/uk-id-logo.png"
                  alt="blog-post-image"
                />
              </div>
              <!-- SINGLE POST TEXT -->
              <div class="single-post-txt">
                <!-- Text -->
                <p>
                  The Prosperity Fund cross-HMG 'Digital Access Programme' is a
                  FCDO-led partnership with DCMS. It aims to catalyse more
                  inclusive, affordable, safe and secure digital access for
                  excluded and underserved communities in Kenya, Nigeria, South
                  Africa, Brazil and Indonesia.
                </p>
                <!-- Text -->
                <p>
                  Increased digital inclusion in the programme countries will
                  form the basis for more thriving digital ecosystems that
                  generate high-skilled jobs, opportunities for local digital
                  entrepreneurship focused on country-specific development
                  challenges, as well as potential partnerships with
                  international and UK business aimed at mutual prosperity.
                </p>
                <p>
                  The Digital Access programme will also focus on learning about
                  sustainable models and enablers for digital inclusion. The
                  learnings will be shared with key stakeholders and other
                  partner countries, thereby amplifying the impact of the
                  programme.
                </p>
              </div>
              <div class="row">
                <div class="txt-block-tra-link mt-25">
                  <NuxtLink
                    to="https://devtracker.fcdo.gov.uk/programme/GB-1-204963/summary"
                    target="_blank"
                    class="tra-link ico-20 color--theme"
                  >
                    Read more <span class="flaticon-next"></span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
