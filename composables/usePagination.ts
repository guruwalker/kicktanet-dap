/* export function usePagination(initialTotalItems: number, itemsPerPage = 6) {
  console.log("usePagination",initialTotalItems);
  const totalItems = ref(initialTotalItems); // Make totalItems reactive
  const currentPage = ref(1);

  const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));

  const startItem = computed(() => (currentPage.value - 1) * itemsPerPage);
  const endItem = computed(() =>
    Math.min(currentPage.value * itemsPerPage, totalItems.value)
  );

  const updatePage = (page: number) => {
    currentPage.value = page;
  };

  const setTotalItems = (newTotal: number) => {
    totalItems.value = newTotal;

    // Ensure the current page is valid after updating total items
    if (currentPage.value > totalPages.value) {
      currentPage.value = Math.max(1, totalPages.value);
    }
  };

  return {
    currentPage,
    totalPages,
    startItem,
    endItem,
    updatePage,
    setTotalItems, // Expose the function
  };
}
 */

export function usePagination(totalItemsRef: Ref<number>, itemsPerPage = 6) {
  const totalItems = totalItemsRef; // Use the reactive ref directly
  const currentPage = ref(1);

  const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));

  const startItem = computed(() => (currentPage.value - 1) * itemsPerPage);
  const endItem = computed(() =>
    Math.min(currentPage.value * itemsPerPage, totalItems.value)
  );

  // const updatePage = (page: number) => {
  //   currentPage.value = page;
  // };
  const updatePage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page;
    }
  };

  watch(totalItems, () => {
    if (currentPage.value > totalPages.value) {
      currentPage.value = 1;
    }
  });
  

  return {
    currentPage,
    totalPages,
    startItem,
    endItem,
    updatePage,
  };
}
