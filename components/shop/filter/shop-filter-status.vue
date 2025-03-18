
<template>
    <div class="tp-shop-widget-content">
      <div class="tp-shop-widget-checkbox">
        <ul class="filter-items filter-checkbox">
          <li 
            v-for="status in statusData" 
            :key="status.id" 
            class="filter-item checkbox"
          >
            <input 
              :id="status.id" 
              type="checkbox" 
              :checked="currentStatus === status.value"
              :class="{ active: currentStatus === status.value }" 
            />
            <label @click="handleFilter(status.value)" :for="status.id">{{ status.label }}</label>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  
  const router = useRouter();
  const route = useRoute();
  
  // Define the status filters
  const statusData = [
    { id: 'on_sale', value: 'on-sale', label: 'On sale' },
    { id: 'in_stock', value: 'in-stock', label: 'In Stock' },
  ];
  
  // Reactive property to track the current status
  const currentStatus = ref<string | null>(null);
  
  // Handle filter click
  const handleFilter = (status: string) => {
    if (currentStatus.value === status) {
      // Clear the filter if the same filter is clicked
      currentStatus.value = null;
      router.push('/shop-grid');
    } else {
      // Set the new filter and navigate
      currentStatus.value = status;
      router.push(`/shop-grid?status=${status}`);
    }
  };

  onMounted(() => {
    currentStatus.value = route.query.status as string || null;
  });
  </script>
  
  