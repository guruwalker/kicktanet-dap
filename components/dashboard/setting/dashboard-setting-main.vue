<template>
    <div>

        <div class="row">
            <div class="col-12">
                <div class="tp-dashboard-tab mb-25">
                    <h2 class="tp-dashboard-tab-title">Settings</h2>
                    <div class="tp-dashboard-tab-list">
                        <ul>
                            <li v-for="tab in tabs" :key="tab" @click="activeTab = tab">
                                <a :class="`${tab === activeTab ? 'active' : ''} pointer`">
                                    {{ tab }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- content area start -->
        <dashboard-setting-profile-area v-if="activeTab === 'Profile'" :studentProfile="studentProfile" />
        <dashboard-setting-password v-else-if="activeTab === 'Password'" />
        <dashboard-setting-profile-withdraw v-else-if="activeTab === 'Withdraw'" />
        <dashboard-setting-profile-socials v-else-if="activeTab === 'Social Profile'" />
        <!-- content area end -->

    </div>
</template>

<script setup lang="ts">
type IProps = {
    studentProfile?: boolean;
}
withDefaults(defineProps<IProps>(), {
    studentProfile: false
});

const tabs = ['Profile', 'Password', 'Withdraw', 'Social Profile'];
const activeTab = ref(tabs[0]);

</script>