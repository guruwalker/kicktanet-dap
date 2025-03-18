<template>
    <div class="tp-header-4-top d-none d-lg-block">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="tp-heder-info d-flex align-items-center">
                        <div class="tp-header-info-item">
                            <span><a href="#"><i class="fa-brands fa-facebook-f"></i></a>7500k Followers</span>
                        </div>
                        <div class="tp-header-info-item">
                            <div class="header-bottom__lang">
                                <header-top-lang/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="tp-header-4-top d-flex align-items-center justify-content-md-end">
                        <div class="tp-header-4-top-item">
                            <div class="tp-header-4-link">
                                <NuxtLink to="/event">Events</NuxtLink>
                                <NuxtLink to="/contact">Contact</NuxtLink>
                            </div>
                        </div>
                        <div class="tp-header-4-top-item">
                            <div class="tp-header-4-btn-top">
                                <NuxtLink to="/login">
                                    <span>
                                        <svg-user-three/>
                                    </span>
                                    log in as a student
                                    <i>
                                        <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1L4.5 4.5L8 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </i>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="tp-header-4-top-item">
                            <div class="tp-header-4-search">
                                <form action="#">
                                    <input type="text" placeholder="Search...">
                                    <span>
                                        <svg-search clr="white"/>
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
