<template>
    <div class="tp-course-grid-categories d-flex">
        <div class="tp-course-grid-select">
            <p>SHORT BY</p>
            <select-course-sort-by/>
        </div>
        <div class="tp-course-grid-select">
            <p>SHORT BY CATEGORY</p>
            <ui-nice-select
                :options="[
                    { value: '', text: 'Select category' },
                    ...courseCategories.map((c) => (
                        { value: c.category, text: c.category }
                    ))
                ]"
                :default-current="0"
                cls="wide"
                placeholder="Default"
                @on-change="handleCategory"
                name="Category"
            />
        </div>
        <div class="tp-course-grid-select">
            <p>SHORT BY INSTRUCTOR</p>
            <ui-nice-select
                :options="[
                    { value: '', text: 'Select author' },
                    ...courseInstructors.map((i) => (
                        { value: i.instructor, text: i.instructor }
                    ))
                ]"
                :default-current="0"
                cls="wide"
                placeholder="Default"
                @on-change="handleInstructor"
                name="Instructor"
            />
        </div>
        <div class="tp-course-grid-select">
            <p>SHORT BY LANGUAGE</p>
            <ui-nice-select
                :options="[
                    { value: '', text: 'Select language' },
                    ...courseLanguages.map((l) => (
                        { value: l.language, text: l.language }
                    ))
                ]"
                :default-current="0"
                cls="wide"
                placeholder="Default"
                @on-change="handleLanguage"
                name="Language"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import { courseCategories, courseInstructors, courseLanguages } from "@/lib/get-course-fields";
import { useCourseFilter } from "@/pinia/use-course-filter";

const state = useCourseFilter();



const router = useRouter();
const route = useRoute();
function handleCategory(category: { value: string; text: string }) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            category: router.currentRoute.value.query.category
                ? router.currentRoute.value.query.category.includes(category.value)
                    ? (router.currentRoute.value.query.category as string)
                        .split(",")
                        .filter((item: string) => item !== category.value)
                        .join(",")
                    : formatString(category.value)
                : formatString(category.value)
        }
    });
}
function handleInstructor(instructor: { value: string; text: string }) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            instructor: router.currentRoute.value.query.instructor
                ? router.currentRoute.value.query.instructor.includes(instructor.value)
                    ? (router.currentRoute.value.query.instructor as string)
                          .split(",")
                          .filter((item: string) => item !== instructor.value)
                          .join(",")
                    : formatString(instructor.value)
                    : formatString(instructor.value)
        }
    });
}
function handleLanguage(lang: { value: string; text: string }) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            language: router.currentRoute.value.query.language
                ? router.currentRoute.value.query.language.includes(lang.value)
                    ? (router.currentRoute.value.query.language as string)
                          .split(",")
                          .filter((item: string) => item !== lang.value)
                          .join(",")
                    : formatString(lang.value)
                    : formatString(lang.value)
        }
    });
}
</script>