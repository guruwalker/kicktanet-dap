<template>
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed tpd-new-course-heading-title"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#panelsStayOpen-collapseSix"
          aria-expanded="false"
          aria-controls="panelsStayOpen-collapseSix"
        >
          Additional Data
        </button>
      </h2>
      <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse">
        <div class="accordion-body">
          <div class="tpd-new-course-box-1">
            <!-- What Will I Learn? -->
            <div class="tpd-input">
              <label>What Will I Learn?</label>
              <textarea
                v-model="additionalData.whatYouWillLearn"
                placeholder="Write here the course benefits (One per line)"
              />
            </div>
  
            <!-- Targeted Audience -->
            <div class="tpd-input">
              <label>Targeted Audience</label>
              <textarea
                v-model="additionalData.targetedAudience"
                placeholder="Specify the target audience that will benefit the most from the course."
              />
            </div>
  
            <!-- Course Duration -->
            <div class="tpd-new-course-box-duration d-flex align-items-end">
              <div class="tpd-input mr-20">
                <label class="font">Total Course Duration</label>
                <input
                  type="number"
                  v-model="additionalData.courseDurationHours"
                  placeholder="00"
                />
                <p>Hour</p>
              </div>
              <div class="tpd-input">
                <input
                  type="number"
                  v-model="additionalData.courseDurationMinutes"
                  placeholder="00"
                />
                <p>Minute</p>
              </div>
            </div>
  
            <!-- Materials Included -->
            <div class="tpd-input height-auto">
              <label>Materials Included</label>
              <textarea
                v-model="additionalData.materialsIncluded"
                placeholder="A list of assets you will be providing for the students in this course (One per line)"
              />
            </div>
  
            <!-- Requirements/Instructions -->
            <div class="tpd-input">
              <label>Requirements/Instructions</label>
              <textarea
                v-model="additionalData.requirements"
                placeholder="A list of assets you will be providing for the students in this course (One per line)"
              />
            </div>
  
            <!-- Course Tag -->
            <div class="tpd-new-course-select2">
              <div class="tpd-input">
                <label>Course Tag</label>
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
    </div>
  </template>
  
  <script setup lang="ts">
  import VSelect from 'vue-select';
  
  // Define the options for the multi-select
  const tagOptions = [
    { value: 'en', label: 'The Science Behind Drawing' },
    { value: 'fr', label: 'Art' },
    { value: 'de', label: 'Music' },
    { value: 'pt', label: 'Photography' }
  ];
  
  // Define the state for the form data
  const additionalData = reactive({
    whatYouWillLearn: '',
    targetedAudience: '',
    courseDurationHours: '',
    courseDurationMinutes: '',
    materialsIncluded: '',
    requirements: '',
    courseTags: [] as { value: string; label: string }[],
  });

  const selectedTags = ref([tagOptions[0]]);
  </script>
  