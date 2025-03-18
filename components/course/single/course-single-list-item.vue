<template>
    <div class="tp-course-4-item d-flex wow fadeInUp">
        <div class="tp-course-4-thumb">
            <img :src="thumbnail" :alt="title"/>
        </div>
        <div class="tp-course-4-content">
            <div class="tp-course-4-rating">
                <a href="#"><i class="fa-solid fa-star"></i></a>
                <a href="#"><i class="fa-solid fa-star"></i></a>
                <a href="#"><i class="fa-solid fa-star"></i></a>
                <a href="#"><i class="fa-solid fa-star"></i></a>
                <a href="#"><i class="fa-solid fa-star"></i></a>
                <span>({{ total_rating }} reviews)</span>
            </div>
            <h4 class="tp-course-4-title">
                <NuxtLink :to="`/course-details/${id}`">
                    <div v-html="sanitizedTitle"></div>
                </NuxtLink>
            </h4>
            <div class="tp-course-4-info d-flex align-items-center">
                <div class="tp-course-4-info-item">
                    <span>
                        <span>
                            <svg-lessons />
                        </span>
                        {{ lessons }} Lessons
                    </span>
                </div>
                <div class="tp-course-4-info-item">
                    <span>
                        <span>
                            <svg-user-two />
                        </span>
                        {{ students }} Student
                    </span>
                </div>
            </div>
            <p>Spken english dolor sit amet consecterur</p>
            <div class="tp-course-4-avatar d-flex align-items-center justify-content-between">
                <div class="tp-course-4-avatar-info d-flex align-items-center">
                    <div v-if="author_img" class="tp-course-4-avatar-thumb">
                        <img :src="author_img" :alt="author_name"/>
                    </div>
                    <div class="tp-course-4-avatar-text">
                        <span>By </span>
                        <a href="#"> {{ author_name }}</a>
                    </div>
                </div>
                <div class="tp-course-4-ammount">
                    <span>
                        {{
                            discount === 0 || price === 0
                                ? "Free"
                                : discount
                                    ? formatPrice(discountPrice(price, discount))
                                    : formatPrice(price)
                        }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { discountPrice } from "@/utils/index";
import { formatPrice } from "@/lib/format-price";
import type { ICourseDT } from "@/types/course-d-t";

// Props definition
interface Props {
    course: ICourseDT;
    removeTag?: boolean;
}

const props = defineProps<Props>();

const {
    id,
    discount,
    price,
    lessons,
    students,
    thumbnail,
    author_name,
    author_img,
    title,
    total_rating,
} = props.course || {};

const sanitizedTitle = computed(() =>
    props.removeTag ? props.course.title.replace(/(<([^>]+)>)/gi, "") : props.course.title
);
</script>
