<template>
    <div>
        <!-- header area start -->
        <header-eight />
        <!-- header area end -->

        <main>
            <slot />
        </main>

        <!-- footer area start -->
        <footer-four :inner="true" />
        <!-- footer area end -->

        <!-- back to top area start -->
        <back-to-top />
        <!-- back to top area end -->
    </div>
</template>
