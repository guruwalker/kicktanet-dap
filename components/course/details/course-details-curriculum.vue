<template>
    <div class="tp-course-details-2-faq">
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div v-for="(module, moduleIndex) in curriculumData" :key="moduleIndex" class="accordion-item">
          <h2 class="accordion-header" :id="`heading-${moduleIndex}`">
            <button
              :class="[
                'accordion-button d-flex justify-content-between',
                { collapsed: moduleIndex !== 0 }
              ]"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse-${moduleIndex}`"
              :aria-expanded="moduleIndex === 0 ? 'true' : 'false'"
              :aria-controls="`collapse-${moduleIndex}`"
            >
              <span class="span">{{ module.moduleTitle }}</span>
              <span class="lesson">
                {{ module.totalLessons }} Lessons • {{ module.totalTime }}
              </span>
              <span class="accordion-btn"></span>
            </button>
          </h2>
          <div
            :id="`collapse-${moduleIndex}`"
            :class="['accordion-collapse collapse', { show: moduleIndex === 0 }]"
            :aria-labelledby="`heading-${moduleIndex}`"
          >
            <div class="accordion-body">
              <div
                v-for="(lesson, lessonIndex) in module.lessons"
                :key="lessonIndex"
                class="tp-course-details-2-faq-item d-flex justify-content-between"
              >
                <div class="left">
                  <span>
                    <svg-video-play-four v-if="lesson.type === 'video'" />
                    <svg-audio-player v-else-if="lesson.type === 'audio'" />
                    <svg-document v-else-if="lesson.type === 'reading'" />
                    <i>{{ capitalize(lesson.type) }}:</i> {{ lesson.title }}
                  </span>
                </div>
                <div class="right">
                  <span>
                    {{ lesson.duration }}
                    <a v-if="lesson.preview" href="#">
                      <svg-eye-open-two /> Preview
                    </a>
                    <svg-lock v-else />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">

  const curriculumData = ref([
    {
      moduleTitle: "Intro to Course and Histudy",
      lessons: [
        {
          type: "video",
          title: "Course Intro",
          duration: "20 min",
          preview: true,
        },
        {
          type: "video",
          title: "Greetings and introduction",
          duration: "20 min",
          preview: true,
        },
        {
          type: "audio",
          title: "Incididunt ut labore et dolore",
          duration: "20 min",
          preview: false,
        },
        {
          type: "reading",
          title: "Incididunt ut labore et dolore",
          duration: "20 min",
          preview: false,
        },
      ],
      totalLessons: 4,
      totalTime: "15m 10s",
    },
    {
      moduleTitle: "Intro to Course and Histudy",
      lessons: [
        {
          type: "video",
          title: "Course Intro",
          duration: "20 min",
          preview: true,
        },
        {
          type: "video",
          title: "Greetings and introduction",
          duration: "20 min",
          preview: true,
        },
        {
          type: "audio",
          title: "Incididunt ut labore et dolore",
          duration: "20 min",
          preview: false,
        },
        {
          type: "reading",
          title: "Incididunt ut labore et dolore",
          duration: "20 min",
          preview: false,
        },
      ],
      totalLessons: 7,
      totalTime: "20m 50s",
    },
    {
      moduleTitle: "Intro to Course and Histudy",
      lessons: [
        {
          type: "video",
          title: "Course Intro",
          duration: "20 min",
          preview: true,
        },
        {
          type: "video",
          title: "Greetings and introduction",
          duration: "20 min",
          preview: true,
        },
        {
          type: "audio",
          title: "Incididunt ut labore et dolore",
          duration: "20 min",
          preview: false,
        },
        {
          type: "reading",
          title: "Incididunt ut labore et dolore",
          duration: "20 min",
          preview: false,
        },
      ],
      totalLessons: 5,
      totalTime: "10m 10s",
    },
  ]);
  
  const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
  </script>
  