<template>
    <div>
        <!-- header area start -->
        <header-four />
        <!-- header area end -->

        <main>
            <slot />
        </main>

        <!-- footer area start -->
         <footer-one :style_2="true" />
        <!-- footer area end -->

        <!-- back to top area start -->
        <back-to-top />
        <!-- back to top area end -->
    </div>
</template>
