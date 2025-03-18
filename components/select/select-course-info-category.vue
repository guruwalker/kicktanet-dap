<template>
   <v-select
      :options="options"
      :multiple="true"
      placeholder="Search Course Category. ex. Design, Development, Business"
      class="tpd-select2 multi"
    />
</template>

<script setup lang="ts">
import vSelect from 'vue-select';

import 'vue-select/dist/vue-select.css';

const options = [
    { value: "en", label: "The Science Behind Drawing" },
    { value: "fr", label: "Art" },
    { value: "de", label: "Music" },
    { value: "pt", label: "Photography" }
]
</script>