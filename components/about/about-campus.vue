<template>
    <section class="tp-about-campus-area grey-bg p-relative pb-120">
        <div class="tp-about-campus-shape">
            <div class="shape-1">
                <img src="/images/campus/campuses-shape-1.jpg" alt="shape" />
            </div>
            <div class="shape-2">
                <img src="/images/campus/campuses-shape-2.jpg" alt="shape" />
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="tp-about-campus-tab wow fadeInUp" data-wow-delay=".3s">
                        <div class="tp-about-campus-heading">
                            <h4 class="tp-about-campus-title">Campuses</h4>
                            <p>
                                KICTANet University has five campuses, which are located in the
                                most exclusive areas of Moscow, Saint Petersburg and Tashkent.
                            </p>
                        </div>
                        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li v-for="item in navItems" :key="item.id" class="nav-item" role="presentation">
                                <button class="nav-link" :class="{ active: item.selected }" :id="item.id"
                                    data-bs-toggle="tab" :data-bs-target="item.target" type="button" role="tab"
                                    :aria-controls="item.ariaControls" :aria-selected="item.selected ? 'true' : 'false'"
                                    @click="selectTab(item.id)">
                                    {{ item.label }}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="tab-content wow fadeInUp" data-wow-delay=".5s" id="myTabContent">
                        <div v-for="tab in tabContentData" :key="tab.id" class="tab-pane fade"
                            :class="{ 'show active': tab.isActive }" :id="tab.id" role="tabpanel"
                            :aria-labelledby="tab.label">
                            <div class="tp-about-campus-box p-relative">
                                <div class="tp-about-campus-thumb">
                                    <img :src="tab.imgSrc" :alt="tab.label" />
                                </div>
                                <div class="tp-about-campus-content d-flex justify-content-between">
                                    <div class="tp-about-campus-location">
                                        <span>
                                            <svg-location />
                                        </span>
                                        <a href="#">{{ tab.location }}</a>
                                    </div>
                                    <div class="tp-about-campus-btn">
                                        <NuxtLink class="tp-btn" to="/university-campus">
                                            Find out More
                                        </NuxtLink>
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

// nav items
const navItems = [
    {
        id: "home-tab",
        target: "#home",
        label: "Gorki Campus",
        ariaControls: "home",
        selected: true,
    },
    {
        id: "profile-tab",
        target: "#profile",
        label: "Skolkovo Campus",
        ariaControls: "profile",
        selected: false,
    },
    {
        id: "contact-tab",
        target: "#contact",
        label: "Saint Petersburg Campus",
        ariaControls: "contact",
        selected: false,
    },
    {
        id: "Moscow-tab",
        target: "#Moscow",
        label: "Moscow Campus",
        ariaControls: "Moscow",
        selected: false,
    },
    {
        id: "Campus-tab",
        target: "#Campus",
        label: "Tashkent Campus",
        ariaControls: "Campus",
        selected: false,
    },
];
// tab content data
const tabContentData = [
    {
        id: "home",
        label: "home-tab",
        imgSrc: "/images/campus/campuses-thumb.jpg",
        location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
        isActive: true,
    },
    {
        id: "profile",
        label: "profile-tab",
        imgSrc: "/images/campus/campuses-thumb.jpg",
        location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
        isActive: false,
    },
    {
        id: "contact",
        label: "contact-tab",
        imgSrc: "/images/campus/campuses-thumb.jpg",
        location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
        isActive: false,
    },
    {
        id: "Moscow",
        label: "Moscow-tab",
        imgSrc: "/images/campus/campuses-thumb.jpg",
        location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
        isActive: false,
    },
    {
        id: "Campus",
        label: "Campus-tab",
        imgSrc: "/images/campus/campuses-thumb.jpg",
        location: "197345, Russia, Saint-Petersburg, Mebelnaya, 11A",
        isActive: false,
    },
];

function selectTab(selectedId: string) {
    navItems.forEach((item) => {
        item.selected = item.id === selectedId;
    });
    tabContentData.forEach((tab) => {
        tab.isActive = tab.label === selectedId;
    });
}
</script>
