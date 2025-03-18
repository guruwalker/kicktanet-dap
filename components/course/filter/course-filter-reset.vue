<template>
    <div class="container mt-100 mb-100">
        <div class="text-center">
            <h3>No Course Found</h3>
            <p>Please try with different keywords</p>
            <button @click="resetFilter()" class='tp-btn-inner'>Reset Filter</button>
        </div>
    </div>
</template>

<script setup lang="ts">

const props = withDefaults(defineProps<{ path?: string }>(),{
    path:"/course-with-filter"
})
const router = useRouter();

function resetFilter() {
    router.push(props.path);
}
</script>