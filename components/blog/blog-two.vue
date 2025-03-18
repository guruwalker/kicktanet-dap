<template>
    <section class="tp-blog-6-ptb pt-120 pb-100">
        <div class="container custom-container-1300">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="tp-team-6-heading mb-60 wow fadeInUp" data-wow-delay=".4s">
                        <h5 class="tp-section-3-subtitle color-9">Our Blog</h5>
                        <h3 class="tp-section-3-title color-9">Most Popular
                            <span>Post.
                                <svg-shape-line-five />
                            </span>
                        </h3>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="tp-course-6-btn text-lg-end mb-60">
                        <div class="tp-hero-6-btn">
                            <NuxtLink class="tp-btn-inner" href="/blog-stories">See All Articles
                                <span>
                                    <svg-arrow-right-four />
                                </span>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">

                <div v-for="blog in blog_online_academy_data" :key="blog.id" class="col-lg-4 col-md-6">
                    <div class="tp-blog-6-item">
                        <div class="tp-blog-stories-item p-relative mb-50">
                            <div class="tp-blog-stories-thumb">
                                <NuxtLink :to="`/blog-details/${blog.id}`">
                                    <img :src="blog.img" :alt="blog.title" />
                                </NuxtLink>
                            </div>
                            <div class="tp-blog-stories-content">
                                <div class="tp-blog-stories-tag-wrap d-flex">
                                    <a href="#">{{ blog.tag }}</a>
                                    <span>{{ blog.date }}</span>
                                </div>
                                <h4 class="tp-blog-stories-title">
                                    <NuxtLink :to="`/blog-details/${blog.id}`">{{ blog.title }}</NuxtLink>
                                </h4>
                                <div class="tp-blog-stories-user-box d-flex align-items-center">
                                    <div class="tp-blog-stories-user-thumb">
                                        <img :src="blog.author_img" :alt="blog.author" />
                                    </div>
                                    <span>{{ blog.author }}</span>
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
import { blog_online_academy_data } from '@/data/blog-data';
</script>
