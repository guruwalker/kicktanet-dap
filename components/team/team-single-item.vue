<template>
    <div class="tp-leadership-item mb-55">
        <div :class="['tp-leadership-thumb', instructor ? 'instructor' : '', 'p-relative']">
            <img :src="item.image" :alt="item.name"/>
            <div class="tp-leadership-hover-box d-flex justify-content-between align-items-center">
                <div class="tp-leadership-social">
                    <a v-for="social in item.socials" :key="social.id" :href="social.link" target="_blank">
                        <i :class="social.iconCls"></i>
                    </a>
                </div>
                <div class="tp-leadership-btn">
                    <nuxt-link to="/my-profile">
                        Details
                        <span>
                            <svg-up-arrow-two />
                        </span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        <div class="tp-leadership-content">
            <span>{{ item.title }}</span>
            <h4 class="tp-leadership-title">
                <nuxt-link to="/my-profile">{{ item.name }}</nuxt-link>
            </h4>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ITeamDT } from '@/types/team-d-t';


interface Props {
    item: ITeamDT;
    instructor?: boolean;
}

defineProps<Props>();
</script>
