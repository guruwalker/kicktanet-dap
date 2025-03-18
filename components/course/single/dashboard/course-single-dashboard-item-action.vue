<template>
    <div ref="actionButtonRef" :class="['tpd-action-inexact-btn', { active: openActionId === courseId }]">
        <button class="click" @click="toggleAction(courseId)">
            <svg-dashboard-dots />
        </button>
        <div class="tpd-action-click-tooltip" v-if="openActionId === courseId">
            <button>
                <span>
                    <svg-dashboard-duplicate />
                </span>
                Duplicate
            </button>
            <button>
                <span>
                    <svg-dashboard-draft />
                </span>
                Move to Draft
            </button>
            <button>
                <span>
                    <svg-dashboard-delete />
                </span>
                Delete
            </button>
        </div>
    </div>
</template>



<script setup lang="ts">

interface Props {
    courseId: number;
}

defineProps<Props>();

const openActionId = ref<number | null>(null);

const toggleAction = (id: number) => {
    openActionId.value = openActionId.value === id ? null : id;
};

const closeAction = () => {
    openActionId.value = null;
};

const actionButtonRef = useClickOutside(closeAction);

console.log("actionButtonRef", actionButtonRef);
</script>