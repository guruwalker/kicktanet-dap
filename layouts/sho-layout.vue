<template>
    <div>
        <!-- header area start -->
        <header-six :inner="true" />
        <!-- header area end -->

        <main>
            <slot />
        </main>

        <!-- footer area start -->
         <footer-five/>
        <!-- footer area end -->

        <!-- back to top area start -->
        <back-to-top />
        <!-- back to top area end -->
    </div>
</template>
