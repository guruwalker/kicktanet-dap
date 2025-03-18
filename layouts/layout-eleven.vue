<template>
    <div>
        <!-- header area start -->
        <header-two :inner="true" :transparent="isTransparent" />
        <!-- header area end -->

        <main>
            <slot />
        </main>

        <!-- footer area start -->
        <footer-six :bg-clr="bgClr" />
        <!-- footer area end -->

        <!-- back to top area start -->
        <back-to-top />
        <!-- back to top area end -->
    </div>
</template>

<script setup lang="ts">
const layoutCustomProps = useAttrs();
const isTransparent = layoutCustomProps?.isTransparent ? true : false;
const bgClr:string = layoutCustomProps?.bgClr ? String(layoutCustomProps.bgClr) : '';
</script>