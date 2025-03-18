<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="searchTerm" type="text" placeholder="Search for Courses..." />
        <button :class="btnCls" type="submit">
            <span>
                <svg-search :clr="svgClr" />
            </span>
        </button>
    </form>
</template>

<script setup lang="ts">

type IProps = {
    btnCls?: string;
    svgClr?: string;
    path?: string;
}

const props = withDefaults(defineProps<IProps>(), {
    btnCls: "tp-course-filter-top-right-search-btn",
    svgClr: "#8B8B8B",
    path: "/course-with-filter",
})


// Local state for the search term
const searchTerm = ref('');

// Debounce the search term
// const debounceValue = useDebounce(searchTerm, 800);

// Pinia store for course filter
// const courseFilterStore = useCourseFilter();

// Watch for debounced value changes and update the store
// watch(
//     debounceValue,
//     (newValue) => {
//         courseFilterStore.courseFilterState.searchTerm = newValue || '';
//     },
//     { immediate: true }
// );
const router = useRouter();
function handleSubmit(event: Event) {
    event.preventDefault();
    // Perform search logic here
    // console.log('Search term:', searchTerm.value);
    router.push({ path: props.path, query: { searchTerm: searchTerm.value } });
}
</script>