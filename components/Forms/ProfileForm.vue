<script setup>
const { updateUser, profileFormState } = useProfile();

const emit = defineEmits(["save", "cancel"]);

const userRole = useHashedCookie("aa05f44d53a34");

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
  <UForm @submit.prevent="handleSubmit" :state="profileFormState">
    <UFormGroup class="py-3" label="Full name" name="full_name">
      <UInput v-model="profileFormState.full_name" />
    </UFormGroup>

    <UFormGroup class="py-3" label="Username" name="username">
      <UInput v-model="profileFormState.username" disabled />
    </UFormGroup>

    <UFormGroup class="py-3" label="Email" name="email">
      <UInput v-model="profileFormState.email" disabled />
    </UFormGroup>

    <UFormGroup class="py-3" label="Phone Number" name="phone_number">
      <UInput v-model="profileFormState.phone_number" disabled />
    </UFormGroup>

    <UFormGroup class="py-3" label="Account ID" name="account_id">
      <UInput v-model="profileFormState.account_id" disabled />
    </UFormGroup>

    <UFormGroup
      class="py-3"
      label="Family ID"
      name="family_id"
      v-if="userRole === 'patient'"
    >
      <UInput v-model="profileFormState.family_id" disabled />
    </UFormGroup>
    <!--
    <UFormGroup class="py-3" label="Image" name="image_url">
      <UInput v-model="profileFormState.image_url" />
    </UFormGroup> -->

    <div class="flex justify-end space-x-2">
      <UButton color="gray" @click="$emit('cancel')">Cancel</UButton>
      <UButton color="primary" type="submit">Save</UButton>
    </div>
  </UForm>
</template>
