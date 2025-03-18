<template>
    <flat-pickr
      id="datetime-picker"
      class="form-control input active"
      placeholder="Choose Year"
      :config="config"
      v-model="selectedDate"
    />
  </template>
  
  <script setup lang="ts">
  import FlatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.min.css';
  
  // Props and Emits
  const props = defineProps<{
    date: Date;
  }>();
  const emit = defineEmits<{
    (event: 'update:date', date: Date): void;
  }>();
  
  // Data and Configurations
  const selectedDate = ref(props.date);
  const config = {
    dateFormat: 'Y-m-d',
    enableTime: false,
    defaultDate: new Date(),
    closeOnSelect: true,
  };
  
  // Watcher to emit updates when the date changes
  watch(selectedDate, (newDate) => {
    emit('update:date', newDate);
  });
  </script>
  