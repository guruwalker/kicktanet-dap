<template>
  <div
    :class="['nice-select', className, { open }]"
    tabindex="0"
    @click.prevent="toggleOpen"
    role="button"
  >
    <span class="current">{{ current?.text || placeholder }}</span>
    <ul class="list" role="menubar" @click.prevent="$event.stopPropagation()">
      <li
        v-for="(item, index) in options"
        :class="['option', { 'selected focus': item.value === current?.value },{'disabled': index === 0}]"
        :key="`option-${index}`"
        @click.prevent="currentHandler(item, index)"
        role="menuitem"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">

// Define props
const props = defineProps({
  options: {
    type: Array as () => { value: string; text: string }[],
    required: true,
  },
  defaultCurrent: {
    type: Number,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  className: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
});

// Define emits
const emit = defineEmits(['onChange']);

// Reactive state
const open = ref(false);
const current = ref(props.options[props.defaultCurrent] || null);

// Methods
const toggleOpen = () => {
  open.value = !open.value;
};

const onClose = () => {
  open.value = false;
};

const currentHandler = (item: { value: string; text: string }, index: number) => {
  current.value = props.options[index];
  emit('onChange', item);
  onClose();
};

// Watch for defaultCurrent changes
watch(
  () => props.defaultCurrent,
  (newVal) => {
    current.value = props.options[newVal] || null;
  }
);
</script>
