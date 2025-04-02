<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Knowledge Products | KICKTANet DAP",
  ogTitle: "Knowledge Products | KICKTANet DAP",
});

const products = ref([
  {
    id: 1,
    name: "KPI 2 Journal Article Framework",
    link: "/assets/documents/Component6-KPI2.pdf",
    description: "Journal article publication (1).",
  },
  {
    id: 2,
    name: "KPI 8 Policy Brief No 1",
    link: "/assets/documents/Component6-KPI8.pdf",
    description: "Policy Briefs (1).",
  },
]);
</script>

<template>
  <div>
    <section
      id="team-2"
      class="gr--whitesmoke pb-40 inner-page-hero team-section"
    >
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="container">
          <div class="row justify-content-center">
            <div class="col">
              <div class="inner-page-title text-center">
                <h2 class="s-40 w-700">Knowledge products</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- Documents list here -->
        <div class="row mt-4">
          <div v-for="product in products" :key="product.id" class="col-12">
            <NuxtLink
              target="_blank"
              :to="`/document-viewer?file=${encodeURIComponent(product.link)}`"
            >
              <p class="w-700 d-flex gap-2">
                {{ product.id }}. {{ product.name }} -
                <span class="card-text mb-3">{{ product.description }}</span>
                <vue-feather type="file" />
              </p>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
