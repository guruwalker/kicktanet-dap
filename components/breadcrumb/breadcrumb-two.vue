<template>
    <section class="tp-breadcrumb__area pt-60 pb-60 p-relative z-index-1 fix">
        <!-- Background Image -->
        <div class="tp-breadcrumb__bg" :style="{ backgroundImage: 'url(/images/breadcrumb/breadcrumb-bg.jpg)' }">
        </div>

        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-12">
                    <div class="tp-breadcrumb__content">
                        <div class="tp-breadcrumb__list">
                            <span>
                                <NuxtLink to="/">
                                    <svg-home />
                                </NuxtLink>
                            </span>
                            <span v-if="pages">Pages</span>
                            <span :class="color">{{ subtitle }}</span>
                        </div>
                        <h3 class="tp-breadcrumb__title white">{{ title }}</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

// prop type 
type IProps = {
    subtitle: string;
    title: string;
    color?: string;
    pages?: boolean;
};

defineProps<IProps>()
</script>
