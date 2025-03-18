<template>
    <section class="blog-area grey-bg pt-110 pb-95">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="tp-event-section text-center mb-60 wow fadeInUp" data-wow-delay=".2s">
                        <div class="tp-section">
                            <h5 class="tp-section-subtitle">BLOG UPDATES</h5>
                            <h3 class="tp-section-2-title">Lates News &
                                <span>
                                    Articles.
                                    <svg-shape-line-two />
                                </span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="blog in university_blogs" :key="blog.id" class="col-lg-6 wow fadeInLeft"
                    data-wow-delay=".2s">
                    <blog-item-one :blog="blog" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { university_blogs } from "@/data/blog-data";
</script>