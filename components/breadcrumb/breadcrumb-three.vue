<template>
    <div class="tp-breadcrumb__area pt-15 pb-15 p-relative z-index-1 fix">
        <div class="tp-breadcrumb__bg" style="background-image: url(/images/breadcrumb/breadcrumb-bg.jpg)"></div>
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
                            <span>{{title}}</span>
                            <span>{{ subtitle }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type IProps = {
    title: string;
    subtitle: string;
}
defineProps<IProps>();
</script>
