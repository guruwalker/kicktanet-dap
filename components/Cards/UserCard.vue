<script setup>
defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <UCard class="p-4 shadow-md rounded-xl border border-gray-200">
    <!-- Card Content -->
    <div class="p-3 space-y-2">
      <!-- User Name & Role -->
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-bold text-gray-900 truncate">
          {{ user.name }}
        </h3>
        <UChip color="gray" variant="solid" size="sm">{{ user.role }}</UChip>
      </div>

      <!-- Email -->
      <p class="text-sm text-gray-600 truncate">📧 {{ user.email }}</p>

      <!-- Phone -->
      <p class="text-sm text-gray-600 truncate">📞 {{ user.phone || "N/A" }}</p>

      <!-- Status Badge -->
      <UBadge
        :color="user.status.toLowerCase() === 'active' ? 'green' : 'red'"
        class="mt-2"
      >
        {{ user.status }}
      </UBadge>

      <!-- Joined Date -->
      <p class="text-sm text-gray-500">Joined: {{ user.created_at }}</p>
    </div>

    <!-- Footer with Slot for Actions -->
    <template #footer>
      <slot name="actions"></slot>
    </template>
  </UCard>
</template>
