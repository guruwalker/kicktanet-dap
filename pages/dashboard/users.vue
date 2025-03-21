<script setup>
useSeoMeta({
  title: "Authenticated Users",
  ogTitle: "Authenticated Users",
  description: "Manage system users with access control.",
  ogDescription: "View and edit authenticated user accounts.",
});

definePageMeta({
  layout: 'dashboard'
})

const {
  users,
  getAllUsers,
  getSingleUser,
  deleteUser,
  userFormState,
  isEditingUser,
} = useUser();

const isDrawerOpen = ref(false);
const isDeleteModalOpen = ref(false);
const selectedUserId = ref(null);

// Fetch all users
await getAllUsers();

const useListView = ref(true);

// Define table columns
const columns = ref([
  // { key: "id", label: "User ID" },
  { key: "full_name", label: "Name" },
  { key: "username", label: "Username" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
  { key: "phone_number", label: "Phone" },
]);

// Open edit drawer
const openEditDrawer = async (id) => {
  isEditingUser.value = true;
  selectedUserId.value = id;
  isDrawerOpen.value = true;

  const { data } = await getSingleUser(id);
  if (data) {
    userFormState.value = { ...data };
  }
};

// Refresh user list
const refreshUsers = async () => {
  isDrawerOpen.value = false;
  await getAllUsers();
};

// Confirm delete modal
const confirmDelete = (id) => {
  selectedUserId.value = id;
  isDeleteModalOpen.value = true;
};

// Handle deletion
const handleDelete = async () => {
  if (selectedUserId.value) {
    await deleteUser(selectedUserId.value);
    await getAllUsers();
  }
  isDeleteModalOpen.value = false;
};
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-xl font-semibold">Users</h1>
    </div>

    <!-- View Toggle -->


    <!-- List View -->
    <UCard v-if="useListView">
      <SharedDatagrid :columns="columns" :rows="users">
      </SharedDatagrid>
    </UCard>

    <!-- Grid View -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <CardsUserCard v-for="user in users" :key="user.id" :user="user">
        <template #actions>
          <div class="flex justify-end space-x-2">
            <UButton
              color="primary"
              variant="solid"
              size="sm"
              icon="lucide-pencil"
              @click="openEditDrawer(user.id)"
            />
            <UButton
              color="red"
              variant="solid"
              size="sm"
              icon="lucide-trash"
              @click="confirmDelete(user.id)"
            />
          </div>
        </template>
      </CardsUserCard>
    </div>

    <!-- Edit Drawer -->
    <SharedDrawer v-model="isDrawerOpen" title="Edit User">
      <FormsUserForm @cancel="refreshUsers" />
    </SharedDrawer>

    <!-- Delete Confirmation Modal -->
    <SharedModal
      :show="isDeleteModalOpen"
      message="Are you sure you want to delete this user?"
      @confirm="handleDelete"
      @close="isDeleteModalOpen = false"
    />
  </div>
</template>
