<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed tpd-new-course-heading-title" type="button"
                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseEight">
                Certificate Template
            </button>
        </h2>
        <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="tpd-new-course-instructor">
                    <div class="row">
                        <div v-for="certificate in certificateData" :key="certificate.id" class="col-lg-4 col-sm-6">
                            <div class="tpd-new-course-cartificate mb-30">
                                <img :src="certificate.imgSrc" :alt="`certificate-${certificate.id}`" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const certificateData = [
    { id: 1, imgSrc: "/images/dashboard/cartificate/cartificate-1.png" },
    { id: 2, imgSrc: "/images/dashboard/cartificate/cartificate-2.png" },
    { id: 3, imgSrc: "/images/dashboard/cartificate/cartificate-3.png" },
    { id: 4, imgSrc: "/images/dashboard/cartificate/cartificate-4.png" },
    { id: 5, imgSrc: "/images/dashboard/cartificate/cartificate-5.png" }
];
</script>