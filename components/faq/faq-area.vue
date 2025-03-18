<template>
    <section class="tp-faq-area tp-faq-p pt-50 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-instructor-become-tab">
                        <!-- Navigation Tabs -->
                        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                            <li v-for="item in navItems" :key="item.id" class="nav-item" role="presentation">
                                <button class="nav-link" :class="{ active: item.active }" :id="`${item.id}-tab`"
                                    data-bs-toggle="tab" :data-bs-target="`#${item.id}`" type="button" role="tab"
                                    :aria-controls="item.id" :aria-selected="item.active"
                                    :tabindex="item.active ? 0 : -1">
                                    {{ item.label }}
                                </button>
                            </li>
                        </ul>

                        <!-- Tab Content -->
                        <div class="tab-content" id="myTabContent">
                            <div v-for="tab in tabContentData" :key="tab.id" class="tab-pane fade"
                                :class="{ 'show active': tab.id === 'home' }" :id="tab.id" role="tabpanel"
                                :aria-labelledby="tab.label">
                                <div class="row">
                                    <!-- Sidebar -->
                                    <div class="col-lg-4">
                                        <div class="tp-faq-wrap">
                                            <div class="tp-faq-search">
                                                <div class="tp-header-2-search">
                                                    <form action="#">
                                                        <input type="text" placeholder="Search..." />
                                                        <button class="tp-header-2-search-btn" type="submit">
                                                            <span>
                                                                <svg-search />
                                                            </span>
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div class="tp-faq-sidebar">
                                                <h4 class="tp-faq-sidebar-title">Related Topics</h4>
                                                <ul>
                                                    <li v-for="topic in tab.topics" :key="topic.id">
                                                        <nuxt-link :to="topic.href">{{ topic.text }}</nuxt-link>
                                                    </li>
                                                </ul>
                                                <div class="tp-faq-sidebar-btn">
                                                    <nuxt-link class="tp-btn-inner w-100 text-center" to="/contact">
                                                        Contact Us
                                                    </nuxt-link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- FAQ Section -->
                                    <div class="col-lg-8">
                                        <div class="tp-faq-box">
                                            <div class="tpd-accordion">
                                                <div class="accordion accordion-flush" :id="tab.id">
                                                    <FaqItem v-for="faq in tab.faqs" :key="faq.id" :faq="faq"
                                                        :parentId="tab.id" />
                                                </div>
                                            </div>
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

// Navigation Items
const navItems = [
    { id: "home", label: "Student", active: true },
    { id: "profile", label: "Instructor", active: false },
];

// Tab Content Data
const tabContentData = [
    {
        id: "home",
        label: "home-tab",
        title: "Home",
        topics: [
            { id: 1, text: "Account/Profile (1)", href: "/my-profile" },
            { id: 2, text: "Course Taking (2)", href: "/course-with-filter" },
            { id: 3, text: "Getting Started (1)", href: "#" },
            { id: 4, text: "Mobile (1)", href: "#" },
            { id: 5, text: "Purchase/Refunds (3)", href: "#" },
            { id: 6, text: "Troubleshooting (2)", href: "#" },
        ],
        faqs: [
            {
                id: 1,
                question: "What is Emeritus Education System?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                id: 2,
                active: true,
                question: "Can I get a refund for my Premium Membership payment?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                id: 3,
                question: "How does the Affiliate Program work?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                id: 4,
                question: "What is included in Standard membership plan?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                id: 5,
                question: "How to choose the right class for me?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
        ],
    },
    {
        id: "profile",
        label: "profile-tab",
        title: "Profile",
        topics: [
            { id: 1, text: "Account/Profile (1)", href: "#" },
            { id: 2, text: "Course Taking (2)", href: "#" },
            { id: 3, text: "Getting Started (1)", href: "#" },
            { id: 4, text: "Mobile (1)", href: "#" },
            { id: 5, text: "Purchase/Refunds (3)", href: "#" },
            { id: 6, text: "Troubleshooting (2)", href: "#" },
        ],
        faqs: [
            {
                id: 6,
                question: "What is Emeritus Education System?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                id: 7,
                active: true,
                question: "Can I get a refund for my Premium Membership payment?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                id: 8,
                question: "How does the Affiliate Program work?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                id: 9,
                question: "What is included in Standard membership plan?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
            {
                id: 10,
                question: "How to choose the right class for me?",
                answer:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            },
        ],
    },
];
</script>