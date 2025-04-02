<template>
  <section id="partners-page" class="gr--whitesmoke inner-page-hero division">
    <div class="container">
      <div class="viewer-container">
        <div class="pdf-wrapper">
          <iframe
            :src="`${fileUrl}#toolbar=0&navpanes=0`"
            width="100%"
            height="600px"
            style="border: none"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});

useSeoMeta({
  title: "Document Viewer | KICKTANet DAP",
});

const route = useRoute();
const fileUrl = decodeURIComponent(route.query.file);

const isLoading = ref(true);
const loadError = ref(false);

// Watch for fileUrl changes and reset loading state
watchEffect(() => {
  if (fileUrl) {
    isLoading.value = false;
    loadError.value = false;
  }
});

// Error handling function for iframe load error
const handleLoadError = () => {
  loadError.value = true;
  isLoading.value = false;
};
</script>

<style scoped>
.viewer-container {
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #f0f0f0;
  overflow: auto; /* Ensure scrolling is allowed */
}

.pdf-wrapper {
  width: 100%;
  height: 100%;
}

iframe {
  width: 100%;
  height: 90vh; /* Set height relative to the viewport */
  border: none;
  object-fit: contain; /* Make the content fit inside the iframe */
  pointer-events: none; /* Prevent interaction with the iframe content */
}

iframe::-webkit-scrollbar {
  display: block; /* Show scrollbar */
}

/* Enable scrolling but prevent text selection */
iframe {
  pointer-events: auto; /* Re-enable pointer events for scrolling */
}

iframe * {
  user-select: none; /* Disable text selection */
  pointer-events: none; /* Prevent text selection inside the iframe */
}

/* Responsive Styles for Mobile Devices */
@media (max-width: 600px) {
  iframe {
    height: 75vh; /* Adjust the height for smaller screens */
  }
}

@media (max-width: 400px) {
  iframe {
    height: 80vh; /* Adjust further for very small screens */
  }
}

</style>
