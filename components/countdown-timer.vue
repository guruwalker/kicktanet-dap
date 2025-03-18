<template>
  <ul v-if="!isExpired">
    <li>
      <span data-days>{{ days }}</span> Days
    </li>
    <li>
      <span data-hours>{{ hours }}</span> Hours
    </li>
    <li>
      <span data-minutes>{{ minutes }}</span> Mins
    </li>
    <li>
      <span data-seconds>{{ seconds }}</span> Secs
    </li>
  </ul>
  <p v-else>Time is up!</p>
</template>


<script setup lang="ts">
import { useTimer } from "vue-timer-hook";

interface TimerProps {
  expiryTimestamp: string;
}

// Props
const props = defineProps<TimerProps>();

// Timer logic
const endTime = new Date(props.expiryTimestamp);
const { seconds, minutes, hours, days, isExpired } = useTimer(Number(endTime));
</script>