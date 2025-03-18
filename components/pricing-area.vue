<template>
    <section class="pricing-area pt-115 pb-80">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="tp-section-5 text-center mb-65">
                        <h5 class="tp-section-5-subtitle mb-10">Pricing plan</h5>
                        <h3 class="tp-section-5-title">Membership Plans</h3>
                        <p>We keep it simple. No catch. Just outrageously good prices</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div v-for="plan in pricingPlans" :key="plan.id" class="col-lg-4 col-md-6">
                    <div class="tp-pricing-5-item mb-40 wow fadeInUp"
                        :class="{ active: plan.title === 'Gold Membership' }" :data-wow-delay="`.${plan.id}s`">
                        <div class="tp-pricing-5-head">
                            <div class="tp-pricing-5-head-text">
                                <h4 class="tp-pricing-5-head-title">{{ plan.title }}</h4>
                                <span>{{ plan.validity }}</span>
                            </div>
                            <h2 class="tp-pricing-5-price">
                                <span>$</span> {{ plan.price }}
                                <b>{{ plan.frequency }}</b>
                            </h2>
                        </div>
                        <div class="tp-pricing-5-list">
                            <ul>
                                <li v-for="(benefit, index) in plan.benefits" :key="`benefit-${index}`">
                                    <span>
                                        <svg-check-two />
                                    </span>
                                    {{ benefit }}
                                </li>
                                <li v-for="(benefit, index) in plan.inactiveBenefits" :key="`inactive-${index}`"
                                    class="inactive">
                                    <span>
                                        <svg-un-check />
                                    </span>
                                    {{ benefit }}
                                </li>
                            </ul>
                        </div>
                        <div class="tp-pricing-5-btn">
                            <a class="tp-btn-4" href="#">Join Course Plan</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const pricingPlans = [
    {
        id: 1,
        title: "Silver Membership",
        validity: "Valid for 2 months",
        price: 24, // per month
        frequency: "/ Month",
        benefits: [
            "Unlimited Classes",
            "Fitness Assessment",
            "Locker room with showers",
        ],
        inactiveBenefits: ["Guest Privileges", "Free parking"],
    },
    {
        id: 2,
        title: "Gold Membership",
        validity: "Valid for 12 months",
        price: 54, // per month
        frequency: "/ Month",
        benefits: [
            "Unlimited Classes",
            "Fitness Assessment",
            "Locker room with showers",
            "Guest Privileges",
        ],
        inactiveBenefits: ["Free parking"],
    },
    {
        id: 3,
        title: "Platinum Membership",
        validity: "Perfect for committed trainers",
        price: 64, // per month
        frequency: "/ Month",
        benefits: [
            "Unlimited Classes",
            "Fitness Assessment",
            "Locker room with showers",
        ],
        inactiveBenefits: ["Guest Privileges", "Free parking"],
    },
];
</script>