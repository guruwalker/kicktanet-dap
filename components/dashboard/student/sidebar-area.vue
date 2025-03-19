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
    </div>
  </div>
</template>
