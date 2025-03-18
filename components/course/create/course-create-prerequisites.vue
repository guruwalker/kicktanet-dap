<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button collapsed tpd-new-course-heading-title"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseSeven"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseSeven"
      >
        Course Prerequisites
      </button>
    </h2>
    <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse">
      <div class="accordion-body">
        <div class="tpd-new-course-select2">
          <div class="tpd-input">
            <label>Select course</label>
            <v-select
              :options="tagOptions"
              multiple
              v-model="selectedTags"
              label="label"
              track-by="value"
              class="tpd-select2 multi"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VSelect from "vue-select";

// Define the options for the multi-select
const tagOptions = [
  { value: "en", label: "The Science Behind Drawing" },
  { value: "fr", label: "Art" },
  { value: "de", label: "Music" },
  { value: "pt", label: "Photography" },
  { value: "bo", label: "Business" },
];

const selectedTags = ref([tagOptions[0]]);
</script>
