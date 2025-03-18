<template>
    <section class="tp-campus-activity-area grey-bg pt-80 pb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-campus-activity-heading mb-70">
                        <h3 class="tp-campus-activity-title">
                            Build lifelong friendships with students <br />
                            who share your interests, passions, and perspectives
                        </h3>
                    </div>
                </div>

                <div v-for="(activity, index) in activities" :key="index" class="col-lg-4 col-md-6">
                    <div class="tp-campus-activity-content wow fadeInUp" :data-wow-delay="activity.delay">
                        <h4 class="tp-campus-activity-list-title">
                            <span>
                                <img :src="activity.icon" alt="Activity Icon" />
                            </span>
                            {{ activity.title }}
                        </h4>
                        <div class="tp-campus-activity-list">
                            <ul>
                                <li v-for="(item, itemIndex) in activity.items" :key="itemIndex">
                                    <a href="#">
                                        {{ item }}
                                        <span>
                                            <svg-up-arrow-two />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

interface Activity {
    id: number;
    title: string;
    icon: string;
    delay: string;
    items: string[];
}

const activities: Activity[] = [
    {
        id: 1,
        title: "Athletics & Fitness",
        icon: "/images/campus/campus/ball.svg",
        delay: ".3s",
        items: ["Fitness", "Athletics", "Pilates", "Boxing"],
    },
    {
        id: 2,
        title: "Student Clubs",
        icon: "/images/campus/campus/ball.svg",
        delay: ".5s",
        items: [
            "Special Interest Club",
            "Health And Wellness Club",
            "Art Club",
            "Music Club",
        ],
    },
    {
        id: 3,
        title: "Student Activities",
        icon: "/images/campus/campus/ball.svg",
        delay: ".7s",
        items: ["Yoga Classes", "Basketball", "Football", "Athletics"],
    },
];
</script>