<template>
    <div :class="`accordion-item ${faq.active ? 'expand' : ''}`" :key="faq.id">
        <h2 class="accordion-header">
            <button :class="`accordion-button ${faq.active ? 'faq-expend' : 'collapsed'}`" type="button"
                data-bs-toggle="collapse" :data-bs-target="`#flush-collapse${faq.id}`"
                :aria-expanded="faq.active ? 'true' : 'false'" :aria-controls="`flush-collapse${faq.id}`">
                {{ faq.question }}
                <span class="accordion-btn"></span>
            </button>
        </h2>
        <div :id="`flush-collapse${faq.id}`" :class="`accordion-collapse collapse ${faq.active ? 'show' : ''}`"
            :data-bs-parent="`#${parentId}`">
            <div class="accordion-body">
                {{ faq.answer }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Faq {
    id: number;
    active?: boolean;
    question: string;
    answer: string;
}

interface Props {
    faq: Faq;
    parentId: string;
}

const props = defineProps<Props>();
</script>