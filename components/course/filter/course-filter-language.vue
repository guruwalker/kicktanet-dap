<template>
    <div :class="`tp-${cls}-widget-content`">
        <div :class="`tp-${cls}-widget-${checkbox ? 'checkbox' : 'radio'}`">
            <ul>
                <li v-for="(lang, i) in courseLanguages" :key="i">
                    <div :class="`${checkbox ? 'from-checkbox' : 'form-check'}`">
                        <input
                            :class="`${checkbox ? '' : 'form-check-input'} ${route.query.language === formatString(lang.language) ? 'checked' : ''}`"
                            :type="checkbox ? 'checkbox' : 'radio'" :name="lang.language" :id="lang.language"
                            readonly />
                        <label @click="handleLanguage(lang.language)"
                            :class="`${checkbox ? '' : 'form-check-label'}`" :for="lang.language">
                            {{ lang.language }} ({{ lang.languageCounts }})
                        </label>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { courseLanguages } from "@/lib/get-course-fields";

type IProps = {
    cls?: string;
    checkbox?: boolean;
}

withDefaults(defineProps<IProps>(), {
    cls: "filter",
    checkbox: false
});

const router = useRouter();
const route = useRoute();

function handleLanguage(lang: string) {
    router.push({
        query: {
            ...router.currentRoute.value.query,
            language: router.currentRoute.value.query.language
                ? router.currentRoute.value.query.language.includes(lang)
                    ? (router.currentRoute.value.query.language as string)
                          .split(",")
                          .filter((item: string) => item !== lang)
                          .join(",")
                    : formatString(lang)
                    : formatString(lang)
        }
    });
}
</script>