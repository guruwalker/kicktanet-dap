<template>
    <ul>
        <li v-for="comment in commentsData" :key="comment.id">
            <div class="tp-postbox-comment-box d-flex">
                <div class="tp-postbox-comment-info">
                    <div class="tp-postbox-comment-avater mr-20">
                        <img :src="comment.avatar" :alt="comment.name" />
                    </div>
                </div>
                <div class="tp-postbox-comment-text">
                    <div class="tp-postbox-comment-name">
                        <h5>{{ comment.name }}</h5>
                        <span class="post-meta">{{ comment.date }}</span>
                    </div>
                    <p>{{ comment.text }}</p>
                    <div class="tp-postbox-comment-reply">
                        <a href="#">
                            <svg-reply />
                            Reply
                        </a>
                    </div>
                </div>
            </div>

            <!-- Replies -->
            <ul v-if="comment.replies" class="children">
                <li v-for="reply in comment.replies" :key="reply.id">
                    <div class="tp-postbox-comment-box d-flex">
                        <div class="tp-postbox-comment-info">
                            <div class="tp-postbox-comment-avater mr-20">
                                <img :src="reply.avatar" :alt="reply.name" />
                            </div>
                        </div>
                        <div class="tp-postbox-comment-text">
                            <div class="tp-postbox-comment-name">
                                <h5>{{ reply.name }}</h5>
                                <span class="post-meta">{{ reply.date }}</span>
                            </div>
                            <p>{{ reply.text }}</p>
                            <div class="tp-postbox-comment-reply">
                                <a href="#">
                                    <svg-reply />
                                    Reply
                                </a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">

// Sample comments data
const commentsData = ref([
    {
        id: 1,
        name: "Chigusa Kisa",
        date: "July 21, 2020 at 7:22 pm",
        text: "I love the way the instructor goes about the course. So easy to follow, even though a little bit challenging as expected.",
        avatar: "/images/blog/deatils/user.png",
        replies: [
            {
                id: 2,
                name: "Nicolas Bryant",
                date: "July 21, 2020 at 7:22 pm",
                text: "I agree with you! The course is both challenging and engaging.",
                avatar: "/images/blog/deatils/user-2.png",
            },
        ],
    },
]);
</script>