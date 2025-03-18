<template>
    <div :class="`tp-${cls}-widget-content`">
        <div :class="`tp-${cls}-widget-checkbox`">
            <ul>
                <li v-for="(cate, i) in courseCategories" :key="i">
                    <div class="from-checkbox">
                        <input :id="cate.category" type="checkbox"
                            :class="route.query.category === formatString(cate.category) ? 'checked' : ''"
                            readonly />
                        <label @click.prevent="handleCategory(cate.category)" :for="cate.category">
                            {{ cate.category }} ({{ cate.courseCount }})
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { courseCategories } from "@/lib/get-course-fields";
import { useCourseFilter } from "@/pinia/use-course-filter";

type IProps = {
    cls?: string;
};

withDefaults(defineProps<IProps>(), {
    cls: "filter"
});

const state = useCourseFilter();

const router = useRouter();
const route = useRoute();
function handleCategory(category: string) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            category: router.currentRoute.value.query.category
                ? router.currentRoute.value.query.category.includes(category)
                    ? (router.currentRoute.value.query.category as string)
                        .split(",")
                        .filter((item: string) => item !== category)
                        .join(",")
                    : formatString(category)
                : formatString(category)
        }
    });
}
</script>