<template>
    <li>
        <div class="tpd-table-row">
            <div class="tpd-instructor-qa-student">
                <div class="tpd-reviews-profile d-flex align-items-center">
                    <div class="tpd-reviews-thumb">
                        <img :src="item.student.profileImg" :alt="item.student.name" />
                    </div>
                    <div class="tpd-reviews-text">
                        <h4 class="tpd-reviews-thumb-title">{{ item.student.name }}</h4>
                        <span class="tpd-common-date">{{ item.student.date }}</span>
                    </div>
                </div>
            </div>
            <div class="tpd-instructor-qa-question">
                <h4 class="tpd-common-text">{{ item.question }}</h4>
                <div class="tpd-course-wrap">
                    <span class="tpd-course-name">Course:</span>
                    <span class="tpd-course-title">{{ item.course }}</span>
                </div>
            </div>
            <div class="tpd-instructor-qa-reply">
                <h4 class="tpd-common-text">{{ item.replies }}</h4>
            </div>
            <div class="tpd-instructor-qa-status">
                <div :class="`tpd-status${item.status === 'complete' ? '-complete' : ''}`">
                    <button><svg-check-two /></button>
                </div>
            </div>
            <div class="tpd-instructor-qa-btn">
                <a class="tpd-border-btn" href="#">Details</a>
            </div>
            <div class="tpd-instructor-qa-action" ref="actionButtonRef">
                <div :class="`tpd-action-inexact-btn ${openActionId === item.id ? 'active' : ''}`">
                    <button class="click" @click="toggleAction(item.id)">
                        <svg-dashboard-dots />
                    </button>
                    <div class="tpd-action-click-tooltip" v-if="openActionId === item.id">
                        <button>
                            <span>
                                <svg-email-four />
                            </span>
                            Mark as Unread
                        </button>
                        <button>
                            <span>
                                <svg-dashboard-delete />
                            </span>
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script setup lang="ts">

type IProps = {
    item: {
        id: number;
        student: {
            name: string;
            date: string;
            profileImg: string;
        };
        question: string;
        course: string;
        replies: number;
        status: string;
    }
}
defineProps<IProps>();

const openActionId = ref<number | null>(null);

const toggleAction = (id: number) => {
    openActionId.value = openActionId.value === id ? null : id;
};

const closeAction = () => {
    openActionId.value = null;
};

const actionButtonRef = useClickOutside(closeAction);
</script>