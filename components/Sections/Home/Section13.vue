<script setup lang="ts">
import { ref } from "vue";

interface Statistic {
  label: string;
  end: number;
  duration: number;
  suffix: string;
}

const statistics = ref<Statistic[]>([
  // { label: "Counties", end: 2, duration: 4000, suffix: "" },
  { label: "Citizens Impacted", end: 450, duration: 4000, suffix: "K+" },
  {
    label: "Community Champions Engaged",
    end: 8000,
    duration: 4000,
    suffix: "+",
  },
  { label: "Implementing Partners", end: 10, duration: 4000, suffix: "+" },
]);
</script>
<template>
  <div id="statistic-1" class="py-100 statistic-section division">
    <div class="container">
      <!-- STATISTIC-1 WRAPPER -->
      <div class="statistic-1-wrapper">
        <div class="d-flex flex-wrap justify-content-center">
          <div
            v-for="(stat, index) in statistics"
            :key="index"
            class="col animate__animated animate__fadeInUp"
            style="flex: 1 1 300px; max-width: 300px; margin: 10px"
          >
            <div class="statistic-block">
              <!-- Digit -->
              <div class="statistic-block-digit text-center">
                <h2 class="s-46 statistic-number">
                  <span class="count-element d-flex">
                    <ElementsCounterUp
                      :start="0"
                      :end="stat.end"
                      :duration="stat.duration"
                    />
                  </span>
                  {{ stat.suffix }}
                </h2>
              </div>
              <!-- Text -->
              <div class="statistic-block-txt color--grey">
                <p class="p-md">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr class="divider" />
</template>

<!-- <style scoped>
.statistic-section .statistic-block {
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fff;
}
</style> -->
