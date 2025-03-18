<template>
    <section class="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix">
      <div
        class="tp-breadcrumb__bg overlay"
        :style="{ backgroundImage: 'url(/images/breadcrumb/campus-breadcrumb.jpg)' }"
      ></div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-12">
            <div class="tp-breadcrumb__content">
              <div class="tp-breadcrumb__list inner-after">
                <span class="white">
                  <nuxt-link to="/">
                    <svg-home />
                  </nuxt-link>
                </span>
                <span v-if="admission" class="white">Admission</span>
                <span class="white">{{ subtitle }}</span>
              </div>
              <h3 class="tp-breadcrumb__title color">
                {{ title }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  defineProps<{title: string, subtitle: string, admission?: boolean}>()
  </script>
  