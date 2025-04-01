<script setup>
const { updateUser, profileFormState } = useProfile();
const emit = defineEmits(["save", "cancel"]);

const handleSubmit = async () => {
  let response;

  if (profileFormState.value.id) {
    response = await updateUser(
      profileFormState.value.id,
      profileFormState.value
    );
  }
  if (response.success) {
    emit("save", response.data);
  }
  emit("cancel");
};
</script>

<template>
  <!-- <UForm @submit.prevent="handleSubmit" :state="profileFormState">
    <UFormGroup class="py-3" label="Full name" name="full_name">
      <UInput v-model="profileFormState.full_name" />
    </UFormGroup>

    <UFormGroup class="py-3" label="Email" name="email">
      <UInput v-model="profileFormState.email" />
    </UFormGroup>

    <UFormGroup class="py-3" label="Phone Number" name="phone_number">
      <UInput v-model="profileFormState.phone_number" />
    </UFormGroup>

    <div class="flex justify-end space-x-2">
      <UButton color="gray" @click="$emit('cancel')">Cancel</UButton>
      <UButton color="primary" type="submit">Save</UButton>
    </div>
  </UForm> -->
  <div>
    <p>
      Please contact the admin for assistance
    </p>
  </div>
</template>
