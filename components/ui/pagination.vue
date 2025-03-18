<template>
    <nav>
        <vue-awesome-paginate :total-items="totalItems" :items-per-page="itemsPerPage" :max-pages-shown="maxPagesShown"
            v-model="localValue" active-page-class="current" @pageChange="onPageChange"
            :class="`${isCenter ? 'd-flex justify-content-center' : ''}`"
            :back-button-class="`${isPrevDisabled ? 'disabled' : ''}`"
            :next-button-class="`${isNextDisabled ? 'disabled' : ''}`">
            <template #prev-button>
                <svg-arrow-prev-three />
            </template>
            <template #next-button>
                <svg-arrow-next-three />
            </template>
        </vue-awesome-paginate>
    </nav>
</template>

<script setup lang="ts">

const props = withDefaults(
    defineProps<{
        totalItems: number;
        itemsPerPage: number;
        maxPagesShown: number;
        modelValue: number;
        isCenter?: boolean;
    }>(),
    {
        itemsPerPage: 10,
        maxPagesShown: 5,
        modelValue: 1,
        isCenter: true,
    }
)

const emit = defineEmits(["update:modelValue", "pageChange"]);

// Create a local proxy for modelValue to handle v-model
const localValue = computed({
    get: () => props.modelValue,
    set: (value: number) => {
        emit("update:modelValue", value);
    },
});

const onPageChange = (page: number) => {
    emit("pageChange", page);
};


// Determine if the "Previous" button should be disabled
const isPrevDisabled = computed(() => localValue.value === 1);

// Determine if the "Next" button should be disabled
const isNextDisabled = computed(() => {
    const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
    return localValue.value === totalPages;
});
</script>
