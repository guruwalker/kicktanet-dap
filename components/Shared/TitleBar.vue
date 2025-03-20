<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  searchQuery: {
    type: String,
    required: false,
  },
  useListView: {
    type: Boolean,
    required: true,
  },
  addButtonLabel: {
    type: String,
    default: "Add",
  },
});

defineEmits(["update:searchQuery", "update:useListView", "add"]);
</script>

<template>
  <div class="mb-4">
    <!-- Title & Add Button -->
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">{{ title }}</h1>
      <UButton color="primary" @click="$emit('add')">
        <Icon name="lucide-plus" class="w-5 h-5 mr-2" />

        {{ addButtonLabel }}
      </UButton>
    </div>

    <!-- Search & View Toggle Buttons -->
    <div class="flex justify-between items-center">
      <div class="w-96">
        <UInput
          :model-value="searchQuery"
          @update:model-value="$emit('update:searchQuery', $event)"
          placeholder="Search..."
          class="w-full"
        />
      </div>

      <div class="flex space-x-2">
        <UButton
          :color="useListView ? 'gray' : 'primary'"
          variant="solid"
          @click="$emit('update:useListView', false)"
        >
          <Icon name="lucide-grid" class="w-5 h-5 mr-2" />
          Grid
        </UButton>

        <UButton
          :color="useListView ? 'primary' : 'gray'"
          variant="solid"
          @click="$emit('update:useListView', true)"
        >
          <Icon name="lucide-list" class="w-5 h-5 mr-2" />
          List
        </UButton>
      </div>
    </div>
  </div>
</template>
