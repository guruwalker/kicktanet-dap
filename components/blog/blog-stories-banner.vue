<template>
    <section class="tp-blog-stories-area fix p-relative pt-120 pb-60">
        <div class="tp-blog-stories-bg" style="background-image: url(/images/blog/blog-stories/blog-stories-bg.png);">
        </div>
        <div class="container">
            <div class="row align-items-center">
                <div class="col-sm-12">
                    <div class="tp-breadcrumb__content">
                        <div class="tp-breadcrumb__list">
                            <span><nuxt-link href="/"><svg-home /></nuxt-link></span>
                            <span class="color">Blog & Stories</span>
                        </div>
                        <h3 class="tp-breadcrumb__title">Blog & Stories</h3>
                        <p class="tp-blog-stories-p">Discover articles and tutorials to help you build better.</p>
                        <div class="tp-blog-stories-btn-box mb-60">
                            <a class="active" href="#">Art & Design</a>
                            <a href="#">Business</a>
                            <a href="#">Data Science</a>
                            <a href="#">Data Science</a>
                            <a href="#">Finance</a>
                            <a href="#">Lifestyle</a>
                            <a href="#">Marketing</a>
                            <span class="tp-search-open-btn">
                                <svg-search />
                            </span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="tp-blog-stories-banner-wrap p-relative">
                        <div class="tp-blog-stories-banner-thumb p-relative">
                            <img src="/images/blog/blog-stories/blog-stories-banner.jpg" alt="">
                        </div>
                        <div class="tp-blog-stories-banner-content">
                            <a class="tp-blog-stories-banner-sub" href="#">Art & Design</a>
                            <h3 class="tp-blog-stories-banner-title">
                                <nuxt-link href="/blog-details/1">The Importance of Intrinsic <br> Motivation for Students</nuxt-link>
                            </h3>
                            <div class="tp-blog-stories-banner-user d-flex align-items-center">
                                <div class="tp-blog-stories-user-thumb">
                                    <img src="/images/blog/blog-stories/blog-stories-user.jpg" alt="">
                                </div>
                                <div class="tp-blog-stories-user-content">
                                    <h6>Oliver Knight</h6>
                                    <span>July 14, 2024</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

</script>