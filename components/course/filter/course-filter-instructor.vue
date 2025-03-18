<template>
    <div :class="`tp-${cls}-widget-content`">
        <div :class="`tp-${cls}-widget-checkbox`">
            <ul>
                <li v-for="(instructor, i) in courseInstructors" :key="i">
                    <div cl:class="from-checkbox">
                        <input :id="instructor.instructor" type="checkbox"
                            :class="route.query.instructor === formatString(instructor.instructor) ? 'checked' : ''" readonly />
                        <label @click="handleInstructor(instructor.instructor)"
                            :for="instructor.instructor">{{ instructor.instructor }} ({{ instructor.authorCounts }})</label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { courseInstructors } from "@/lib/get-course-fields";

type IProps = {
    cls?: string;
}

withDefaults(defineProps<IProps>(), {
    cls: "filter"
});


const router = useRouter();
const route = useRoute();
function handleInstructor(instructor: string) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            instructor: router.currentRoute.value.query.instructor
                ? router.currentRoute.value.query.instructor.includes(instructor)
                    ? (router.currentRoute.value.query.instructor as string)
                          .split(",")
                          .filter((item: string) => item !== instructor)
                          .join(",")
                    : formatString(instructor)
                    : formatString(instructor)
        }
    });
}
/* function handleInstructor(instructor: string) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            instructor: router.currentRoute.value.query.instructor
                ? router.currentRoute.value.query.instructor.includes(instructor)
                    ? (router.currentRoute.value.query.instructor as string)
                          .split(",")
                          .filter((item: string) => item !== instructor.toLowerCase().replace("&", "").split(" ").join("-"))
                          .join(",")
                    : `${router.currentRoute.value.query.instructor},${instructor.toLowerCase().replace("&", "").split(" ").join("-")}`
                : instructor.toLowerCase().replace("&", "").split(" ").join("-")
        }
    });
} */
</script>