<template>
    <header class="header-area">
        <div class="tp-header-2 tp-header-new-course">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-2">
                        <div class="tp-header-2-right d-flex align-items-center">
                            <div class="logo tp-header-logo">
                                <nuxt-link href="/">
                                    <img src="/images/logo/logo-black.png" alt="logo">
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-10">
                        <div class="tp-header-new-course-right d-flex justify-content-end">
                            <div class="tp-header-new-course-option d-none d-sm-block">
                                <a class="draft" href="#">Save as Draft</a>
                                <a class="preview" href="#">Preview</a>
                                <a class="pulish" href="#">Publish</a>
                            </div>
                            <span>
                                <nuxt-link href="/dashboard/instructor-dashboard"><svg-close-three/></nuxt-link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>