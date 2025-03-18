<template>
    <div :class="`tp-${cls}-widget-content`">
        <div :class="`tp-${cls}-widget-radio`">
            <ul>
                <li v-for="(price, i) in priceFilter" :key="i">
                    <div class="form-check text-capitalize">
                        <input class="form-check-input" type="radio" :name="price" :id="price"
                            :class="route.query.price === formatString(price) ? 'checked' : ''" readonly />
                        <label @click="handlePrice(price)" class="form-check-label" :for="price">
                            {{ price }} ({{ price === 'all' ? state.allCourseData.length : price === 'free' ?
                                state.allCourseData?.filter((course) => course.price === 0).length :
                                state.allCourseData?.filter((course) => course.price > 0).length}})
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCourseFilter } from "@/pinia/use-course-filter";

const state = useCourseFilter();

type IProps = {
    cls?:string;
}
withDefaults(defineProps<IProps>(), {
    cls: "filter"
});
const priceFilter: Array<"all" | "free" | "paid"> = ['all', 'free', 'paid'];

const router = useRouter();
const route = useRoute();

function handlePrice(price: string) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            price: router.currentRoute.value.query.price
                ? router.currentRoute.value.query.price.includes(price)
                    ? (router.currentRoute.value.query.price as string)
                          .split(",")
                          .filter((item: string) => item !== price)
                          .join(",")
                    : formatString(price)
                    : formatString(price)
        }
    });
}
</script>