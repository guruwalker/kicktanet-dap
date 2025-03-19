<script setup lang="ts">
import { studentDashboardMenuData } from "@/data/dashboard-menu-data";
</script>

<template>
  <div class="tpd-user-sidebar">
    <div class="tp-user-wrap">
      <div class="tp-user-menu">
        <nav>
          <ul>
            <li
              v-for="(menuSection, i) in studentDashboardMenuData"
              :key="i"
              class="tp-user-menu-section"
            >
              <p class="tp-user-menu-title" :class="{ 'space-gap': i !== 0 }">
                {{ menuSection.section }}
              </p>
              <ul>
                <li v-for="(item, index) in menuSection.items" :key="index">
                  <NuxtLink :to="item.href">
                    <span v-html="item.icon"></span>
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div class="tp-user-banner d-flex align-items-center">
        <div class="tp-user-banner-text">
          <h4 class="tp-user-banner-title">Online Education</h4>
          <div class="tp-user-banner-btn">
            <NuxtLink
              class="tp-btn-course"
              href="/dashboard/instructor-my-course"
              >View Course</NuxtLink
            >
          </div>
        </div>
        <div class="tp-user-banner-shape">
          <img
            src="/images/dashboard/icon/menu/menu-shape.png"
            alt="user-banner"
          />
        </div>
      </div>
    </div>
  </div>
</template>
