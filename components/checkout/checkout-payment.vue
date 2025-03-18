<template>
    <div class="tp-checkout-payment">
        <div v-for="option in options" :key="option.id" class="tp-checkout-payment-item">
            <input type="radio" :id="option.id" name="payment" :value="option.id"
                :checked="selectedOption === option.id" @change="emitOptionChange(option.id)" />
            <label :for="option.id">
                {{ option.label }}
            </label>
            <div v-if="selectedOption === option.id" class="tp-checkout-payment-desc">
                <p>{{ option.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

type IProps = {
    options: { id: string; label: string; description: string }[];
    selectedOption: string;
}

// Define props
defineProps<IProps>();

// Emit event
const emit = defineEmits(['optionChange']);
const emitOptionChange = (optionId: string) => {
    emit('optionChange', optionId);
};
</script>