<template>
    <div>

        <!-- section area start -->
        <div class="section-area">
            <div class="row">
                <div class="col-lg-6">
                    <div class="tp-dashboard-section">
                        <h2 class="tp-dashboard-title">All Certificates</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- section area end -->

        <!-- certificate area start -->
        <div class="tpd-course-area">
            <div class="row">
                <div class="col-12">
                    <div class="tpd-certificate-table li-hover-none mb-25">
                        <ul>
                            <li v-for="certificate in certificateData" :key="certificate.id">
                                <div class="tpd-table-row">
                                    <div class="tpd-certificate-box d-flex justify-content-between align-items-center">
                                        <div class="tpd-certificate-info d-flex align-items-center">
                                            <div v-if="certificate.image" class="tpd-certificate-img mr-15">
                                                <img :src="certificate.image" alt="certificate" />
                                            </div>
                                            <h4 class="tpd-certificate-title">{{ certificate.title }}</h4>
                                        </div>
                                        <div class="tpd-cartificate-btn-box d-flex">
                                            <div class="tpd-certificate-badges">
                                                <button
                                                    :class="`tpd-certificate-badge ${certificate.isPublished ? 'active' : ''}`">
                                                    <span class="tpd-certificate-badge-text">
                                                        <span class="tpd-certificate-badge-file">
                                                            <svg-eye-open-three v-if="certificate.isPublished" />
                                                            <svg-dashboard-draft-two v-else />
                                                        </span>
                                                        {{ certificate.status }}
                                                    </span>
                                                    <span class="tpd-certificate-badge-publish">
                                                        <svg-eye-close-three v-if="certificate.isPublished" />
                                                        <svg-eye-close-two v-else />
                                                    </span>
                                                </button>
                                            </div>
                                            <div class="tpd-certificate-edit">
                                                <div class="tpd-action-inexact-btn">
                                                    <button>
                                                        <svg-pen-three />
                                                        <span class="tpd-action-tooltip">Edit</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="tpd-certificate-delete">
                                                <div class="tpd-action-inexact-btn">
                                                    <button class="border-bg">
                                                        <svg-dashboard-delete />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
        <!-- certificate area end -->
    </div>
</template>

<script setup lang="ts">

const certificateData = [
    {
        id: 1,
        title: "Design Basics Certificate",
        status: "Draft",
        isPublished: false,
        image: "/images/dashboard/bg/certificate.png",
    },
    {
        id: 2,
        title: "UI/UX Fundamentals",
        status: "Draft",
        isPublished: false,
        image: null,
    },
    {
        id: 3,
        title: "Web Development Advanced",
        status: "Published",
        isPublished: true,
        image: "/images/dashboard/bg/certificate.png",
    },
    {
        id: 4,
        title: "Graphic Design Mastery",
        status: "Published",
        isPublished: true,
        image: null,
    },
    {
        id: 5,
        title: "Digital Marketing Expert",
        status: "Draft",
        isPublished: false,
        image: null,
    },
];
</script>
