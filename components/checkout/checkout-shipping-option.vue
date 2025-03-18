<template>
    <li class="tp-order-info-list-shipping">
        <span>Shipping</span>
        <div class="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
            <span v-for="option in options" :key="option.id">
                <input :id="option.id" type="radio" name="shipping" :value="option.id"
                    :checked="selectedOption === option.id" @change="emitOptionChange(option.id)" />
                <label :for="option.id">
                    {{ option.label }}: <span>${{ option.price.toFixed(2) }}</span>
                </label>
            </span>
        </div>
    </li>
</template>

<script setup lang="ts">
type Props = {
    options: { id: string; label: string; price: number }[];
    selectedOption: string;
};

defineProps<Props>();

const emit = defineEmits(['optionChange']);
const emitOptionChange = (optionId: string) => {
    emit('optionChange', optionId);
};
</script>