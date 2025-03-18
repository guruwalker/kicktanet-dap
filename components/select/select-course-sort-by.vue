<template>
  <ui-nice-select
    :options="[
      { value: '', text: 'Filter Sort' },
      ...filterSortBy.map((item) => ({ value: item.value, text: item.label })),
    ]"
    name="Sort by"
    :default-current="0"
    @on-change="handleSortBy"
    :class="`wide`"
  />
</template>

<script setup lang="ts">

const filterSortBy = [
  { value: "rating", label: "Trending" },
  { value: "low", label: "Price: low to high" },
  { value: "high", label: "Price: high to low" },
];

const router = useRouter();

function handleSortBy(sortBy: { value: string; text: string }) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            sortBy: router.currentRoute.value.query.sortBy
                ? router.currentRoute.value.query.sortBy.includes(sortBy.value)
                    ? (router.currentRoute.value.query.sortBy as string)
                          .split(",")
                          .filter((item: string) => item !== sortBy.value)
                          .join(",")
                    : formatString(sortBy.value)
                    : formatString(sortBy.value)
        }
    });
}
</script>
