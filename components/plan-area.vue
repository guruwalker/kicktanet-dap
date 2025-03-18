
<template>
    <section class="plan-area tp-plan-4-wrap fix">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="tp-plan-4-section">
                        <span>Visit Barry!</span>
                        <h3 class="tp-plan-4-section-title">Plan Your Meeting With Us</h3>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="tp-plan-4-wrapper">
                        <div class="row">
                            <div v-for="item in planData" :key="item.id" class="col-md-4">
                                <div class="tp-plan-4-item" :class="{ active: activeId === item.id }"
                                    @mouseenter="setActiveId(item.id)" @click="navigate(item.link)">
                                    <div class="tp-plan-4-bg" :style="{ backgroundImage: `url(${item.image})` }"></div>
                                    <div class="tp-plan-4-content d-flex align-items-center justify-content-center">
                                        <div class="tp-plan-4-box text-center">
                                            <span>{{ item.id <= 9 ? `0${item.id}` : item.id }}</span>
                                            <h4 class="tp-plan-4-title" v-html="item.title"></h4>
                                            <p>{{ item.description }}</p>
                                        </div>
                                    </div>
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

const router = useRouter();
const activeId = ref(1);

const planData = [
    {
        id: 1,
        title: "Athletics",
        description: "Athletics",
        image: "/images/bg/plan/plan-4-bg-1.jpg",
        link: "/university-campus",
    },
    {
        id: 2,
        title: "Faculty and <br/> staff",
        description: "Meet our team",
        image: "/images/bg/plan/plan-4-bg-2.jpg",
        link: "/university-leadership",
    },
    {
        id: 3,
        title: "Contact Us",
        description: "Get in touch",
        image: "/images/bg/plan/plan-4-bg-3.jpg",
        link: "/contact",
    },
];

const setActiveId = (id: number) => {
    activeId.value = id;
};

const navigate = (link: string) => {
    router.push(link);
};
</script>
