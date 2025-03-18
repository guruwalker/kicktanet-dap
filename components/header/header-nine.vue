<template>
    <header class="header-area">
        <div class="tp-header-2 tp-header-new-course">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-2">
                        <div class="tp-header-2-right d-flex align-items-center">
                            <div class="logo tp-header-logo">
                                <NuxtLink to="/">
                                    <img src="/images/logo/logo-black.png" alt="logo">
                                </NuxtLink>
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
                                <NuxtLink to="/dashboard/instructor-dashboard"><svg-close-three/></NuxtLink>
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
