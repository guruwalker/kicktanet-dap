<script setup lang="ts">
useSeoMeta({
  title: "Profile",
  ogTitle: "Profile",
  description: "View and update your personal profile.",
  ogDescription: "Manage your account details and preferences.",
});

definePageMeta({
  layout: "dashboard",
});

const { profileFormState, updateUser, getProfile } = useProfile();

const response = await getProfile();

const items = [
  {
    key: "account",
    label: "Account",
    description:
      "Make changes to your account here. Click save when you're done.",
  },
  {
    key: "security",
    label: "Security",
  },
];
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Profile</h1>
    </div>

    <UTabs
      :items="items"
      orientation="vertical"
      :ui="{ wrapper: 'flex items-start gap-4', list: { width: 'w-58' } }"
    >
      <template #item="{ item }">
        <UCard>
          <template #header>
            <p
              class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
            >
              {{ item.label }}
            </p>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {{ item.description }}
            </p>
          </template>

          <div v-if="item.key === 'account'" class="space-y-3">
            <FormsProfileForm />
          </div>
          <div v-else-if="item.key === 'security'" class="space-y-3">
            <!-- <FormsResetPasswordForm /> -->
            Please contact the admin for assistance
          </div>
        </UCard>
      </template>
    </UTabs>
  </div>
</template>
