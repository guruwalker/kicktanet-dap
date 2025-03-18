<template>
  <div class="tpd-dashboard-calender-box">
    <FullCalendar :options='calendarOptions' />

  </div>
</template>

<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

function handleDateClick(arg: any) {
  alert('date click! ' + arg.dateStr)
}

const calendarOptions = {
  plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
  initialView: 'dayGridMonth',
  // weekends: false,
  // events: [
  //   { title: 'Meeting', start: new Date() }
  // ],
  headerToolbar: {
    left: 'prev,next today', // Add today button for quick navigation
    center: 'title', // Center title
    right: 'dayGridMonth,timeGridWeek,timeGridDay', // Specify views for the right section
  },
  initialDate: new Date(), // Set the initial date
  navLinks: true, // Can click day/week names to navigate views
  editable: true, // Allow editing of events
  selectable: true, // Allow selection of dates
  height: "600px", // Set the height of the calendar
  expandRows: true, // Expand rows to fit content
  slotMinTime: "08:00", // Minimum time slot for the time grid
  slotMaxTime: "20:00", // Maximum time slot for the time grid
  dateClick: handleDateClick,
}
</script>
