<template>
    <section class="tp-about-team-area grey-bg p-relative pt-120 pb-90">
        <div class="tp-about-team-shape">
            <img src="/images/team/about-team/team-shape.png" alt="shape" />
        </div>
        <div class="container">
            <div class="row">
                <div v-for="(item, i) in team_university" :key="item.id" class="col-lg-3 col-sm-6">
                    <div class="tp-about-team-item p-relative mb-30 wow fadeInUp" :data-wow-delay="`${(i + 1) * 0.1}s`">
                        <div class="tp-about-team-thumb">
                            <img :src="item.image" :alt="item.name"/>
                        </div>
                        <div class="tp-about-team-content">
                            <h4 class="tp-about-team-title">
                                <NuxtLink to="/my-profile">{{ item.name }}</NuxtLink>
                            </h4>
                            <p>{{ item.title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { team_university } from "@/data/team-data";
</script>
