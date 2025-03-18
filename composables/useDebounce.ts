/**
 * A composable to debounce a value.
 * @param value The input value to debounce.
 * @param delay The debounce delay in milliseconds.
 * @returns The debounced value as a ref.
 */

export default function useDebounce<T>(value: Ref<T>, delay: number) {
  const debouncedValue = ref(value.value); // Create a new ref to hold the debounced value

  let timeout: ReturnType<typeof setTimeout>;

  watch(
      value,
      (newValue) => {
          clearTimeout(timeout); // Clear the previous timeout
          timeout = setTimeout(() => {
              debouncedValue.value = newValue; // Update the debounced value
          }, delay);
      },
      { immediate: true } // Run the watcher immediately for initial sync
  );

  return debouncedValue; // Return the debounced value
}
