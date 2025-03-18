<template>
    <section class="tp-apply-requirement-area tp-apply-requirement-bg pt-110 pb-120">
        <div class="container">
            <div class="row">
                <!-- Requirements Section -->
                <div class="col-lg-8">
                    <div class="tp-apply-requirement-box">
                        <h3 class="tp-apply-process-title">The Application Process</h3>
                        <span>You will need:</span>
                        <div class="tp-apply-requirement-bullet mb-55">
                            <p v-for="(requirement, index) in requirements" :key="index">
                                <span>
                                    <svg-hand-check />
                                </span>
                                <i v-html="requirement"></i>
                            </p>
                        </div>
                        <div class="tp-apply-requirement-btn">
                            <NuxtLink class="tp-btn" to="/university-campus">
                                Request a campus tour
                            </NuxtLink>
                        </div>
                    </div>
                </div>

                <!-- Deadlines Section -->
                <div class="col-lg-4">
                    <div class="tp-apply-dedline-box">
                        <h4 class="tp-apply-dedline-wrap-title">Application Deadlines</h4>
                        <div class="tp-apply-dedline-wrapper">
                            <div v-for="(deadline, index) in deadlinesData" :key="index" :class="[
                                'tp-apply-dedline-wrap d-flex align-items-center justify-content-between',
                                { 'b-none': index === deadlinesData.length - 1 },
                            ]">
                                <div class="tp-apply-dedline-content">
                                    <span>{{ deadline.category }}</span>
                                    <p>{{ deadline.date }}</p>
                                </div>
                                <div class="tp-apply-dedline-date">
                                    <p>{{ deadline.decision }}</p>
                                </div>
                            </div>
                            <div class="tp-apply-btn">
                                <NuxtLink class="tp-btn" to="/university-financial">
                                    Visit Financial Aid
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

// Requirements array
const requirements = ref([
    "You can be admitted at any time during the academic year.",
    `If English is not your first language, you will need to demonstrate English <br> language proficiency equivalent to with a minimum of 5.5 in each <br> band and 6.0 in speaking.`,
    `Contact information for one teacher (or two, maximum) who will complete <br> the Teacher Evaluation form.`,
    "Open to students 18 years and over at course commencement.",
    "Spiritual Formation Program Requirements",
]);

// Deadlines data
const deadlinesData = ref([
    {
        category: "General",
        date: "October 15",
        decision: "Early decision |",
    },
    {
        category: "On Campus",
        date: "November 1",
        decision: "Early decision ||",
    },
    {
        category: "Online/Hybrid",
        date: "January 15",
        decision: "Regular Decision",
    },
    {
        category: "Current Continuing",
        date: "March 1",
        decision: "All continuing",
    },
]);
</script>