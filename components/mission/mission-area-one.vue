<template>
    <section :class="`tp-our-mission-area ${top_cls}`" :style="{ backgroundColor: bgClr ? bgClr : '' }">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="tp-our-mission-thumb wow fadeInUp" data-wow-delay=".3s">
                        <img src="/images/our-mission/thumb-1.png" alt="">
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="tp-our-mission-wrapper wow fadeInUp" data-wow-delay=".5s">
                        <div class="tp-our-mission-heading">
                            <h3 class="tp-our-mission-title">Mission and values</h3>
                            <p>We prepare you to launch your career by providing a supportive, creative, <br>
                                and professional. Our mission is to prepare students to understand, contribute <br>
                                to, and succeed in a rapidly changing society,</p>
                        </div>


                        <div v-for="(item, i) in missionData" :key="item.id" :class="`tp-our-mission-item d-flex align-items-center justify-content-center justify-content-md-between ${i !== missionData.length - 1 ? 'mb-20' : ''}`">
                            <div class="tp-our-mission-item-content">
                                <h4 class="tp-our-mission-item-title">{{ item.title }}</h4>
                                <p v-html="item.description"></p>
                                <div class="tp-our-mission-item-btn">
                                    <a class="tp-btn-3" href="#">
                                        Learn More
                                        <i>
                                            <svg-arrow-right-two clr="white" />
                                        </i>
                                    </a>
                                </div>
                            </div>
                            <div class="tp-our-mission-item-thumb">
                                <div :class="`tp-our-mission-item-thumb-${item.id}`">
                                    <img :src="item.imgSrc" :alt="item.title"/>
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

type IProps = {
  top_cls?: string;
  bgClr?: string; 
};

withDefaults(defineProps<IProps>(), {
  top_cls: 'grey-bg pt-30',
});

const missionData = [
    {
        id: 1,
        title: "Creativity",
        description:
            "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
        imgSrc: '/images/our-mission/mission-item-1.jpg',
    },
    {
        id: 2,
        title: "Scholarship",
        description:
            "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
        imgSrc: '/images/our-mission/mission-item-2.jpg',
    },
    {
        id: 3,
        title: "Community",
        description:
            "Encouraging behaviours which <br/> encompass notions of originality, and <br/> problem-solving in all that we do.",
        imgSrc: '/images/our-mission/mission-item-3.jpg',
    },
];


</script>