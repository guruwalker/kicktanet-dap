<template>
    <div class="tp-filter-widget-content">
        <div class="tp-filter-widget-radio">
            <ul>
                <li v-for="item in filterSortBy" :key="item.value">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" :name="item.value" :id="item.value"
                            :class="route.query.sortBy === formatString(item.value) ? 'checked' : ''" readonly :checked="route.query.sortBy === formatString(item.value)" />
                        <label @click="handleSortBy(item.value)" class="form-check-label" :for="item.value">
                            {{ item.label }}
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const filterSortBy = [
    { value: "rating", label: "Trending" },
    { value: "low", label: "Price: low to high" },
    { value: "high", label: "Price: high to low" },
];

const router = useRouter();
const route = useRoute();

function handleSortBy(sortBy: string) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            sortBy: router.currentRoute.value.query.sortBy
                ? router.currentRoute.value.query.sortBy.includes(sortBy)
                    ? (router.currentRoute.value.query.sortBy as string)
                          .split(",")
                          .filter((item: string) => item !== sortBy)
                          .join(",")
                    : formatString(sortBy)
                    : formatString(sortBy)
        }
    });
}
</script>
