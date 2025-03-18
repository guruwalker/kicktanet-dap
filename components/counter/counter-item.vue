<template>
    <span ref="targetElement" :class="cls">{{ counted }}</span>
</template>

<script setup lang="ts">

interface CounterProps {
    min: number;
    max: number;
    cls?: string;
}

// Props
const props = defineProps<CounterProps>();
const { min, max, cls = "purecounter" } = props;

// State and refs
const counted = ref<number>(min);
const targetElement = ref<HTMLElement | null>(null);

const startCountup = () => {
    const intervalId = setInterval(() => {
        counted.value += Math.ceil(max / 20);
        if (counted.value >= max) {
            counted.value = max;
            clearInterval(intervalId);
        }
    }, 70);
};

onMounted(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                counted.value = min;
                startCountup();
            }
        });
    };

    const options: IntersectionObserverInit = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetElement.value) {
        observer.observe(targetElement.value);
    }

    onBeforeUnmount(() => {
        observer.disconnect();
        counted.value = min;
    });
});
</script>