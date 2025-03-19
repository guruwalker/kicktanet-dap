<template>
    <div>
        <!-- header area start -->
        <header-nine />
        <!-- header area end -->

        <main>
            <slot />
        </main>

        <!-- footer area start -->
        <footer-six :dashboard-footer="true" />
        <!-- footer area end -->

        <!-- back to top area start -->
        <back-to-top />
        <!-- back to top area end -->
    </div>
</template>
