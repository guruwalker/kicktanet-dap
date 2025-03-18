<template>
    <div class="tpd-course-area">
        <div class="tpd-setting-box withdraw">
            <div class="tpd-setting-withdraw-content tpd-redio-style">
                <h5 class="tpd-setting-withdraw-title">Select a withdraw method</h5>

                <!-- Tabs Navigation -->
                <ul class="nav nav-tabs" role="tablist">
                    <li v-for="item in navItemData" :key="item.id" class="nav-item" role="presentation">
                        <button class="nav-link" :class="{ active: activeTab === item.id }" :id="`${item.id}-tab`"
                            type="button" role="tab" :aria-controls="item.id" :aria-selected="activeTab === item.id"
                            @click="activeTab = item.id" :tabindex="activeTab === item.id ? 0 : -1">
                            <span class="tpd-setting-withdraw-content-box-title">{{ item.title }}</span>
                            <span class="tpd-setting-withdraw-content-box-sub">{{ item.subTitle }}</span>
                            <span class="tpd-redio-style-span"></span>
                        </button>
                    </li>
                </ul>

                <!-- Tab Content -->
                <div class="tab-content">
                    <div v-for="tab in tabContentData" :key="tab.id" class="tab-pane fade"
                        :class="{ 'show active': activeTab === tab.id }" :id="tab.id" role="tabpanel"
                        :aria-labelledby="`${tab.id}-tab`">
                        <div class="tpd-setting-from">
                            <div class="row">
                                <div v-for="(field, index) in tab.formFields" :key="field.label"
                                    :class="`col-lg-${index % 2 === 0 ? '6' : '12'}`">
                                    <div class="tpd-input">
                                        <label>{{ field.label }}</label>
                                        <input type="text" :placeholder="field.placeholder" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="tpd-setting-cartificate-btn">
                                        <button>Save Withdrawal Account</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

// Active tab state
const activeTab = ref('home');

// Data for the nav items (tabs)
const navItemData = [
    { id: 'home', title: 'Bank Transfer', subTitle: 'Min withdraw $20.00' },
    { id: 'profile', title: 'E-Check', subTitle: 'Min withdraw $40.00' },
    { id: 'contact', title: 'PayPal', subTitle: 'Min withdraw $30.00' },
];

// Data for the tab content
const tabContentData = [
    {
        id: 'home',
        formFields: [
            { label: 'Account Name', placeholder: 'Account Name' },
            { label: 'Account Number', placeholder: 'ES19  1234  5678  9087  6543' },
            { label: 'Bank Name', placeholder: 'Bank of America' },
            { label: 'IBAN', placeholder: '1234  5678  9087  6543' },
            { label: 'BIC / SWIFT', placeholder: 'BIC / SWIFT' },
        ],
    },
    {
        id: 'profile',
        formFields: [
            { label: 'Account Name 2', placeholder: 'Account Name' },
            { label: 'Account Number', placeholder: 'ES19  1234  5678  9087  6543' },
            { label: 'Bank Name', placeholder: 'Bank of America' },
            { label: 'IBAN', placeholder: '1234  5678  9087  6543' },
            { label: 'BIC / SWIFT', placeholder: 'BIC / SWIFT' },
        ],
    },
    {
        id: 'contact',
        formFields: [
            { label: 'Account Name 3', placeholder: 'Account Name' },
            { label: 'Account Number', placeholder: 'ES19  1234  5678  9087  6543' },
            { label: 'Bank Name', placeholder: 'Bank of America' },
            { label: 'IBAN', placeholder: '1234  5678  9087  6543' },
            { label: 'BIC / SWIFT', placeholder: 'BIC / SWIFT' },
        ],
    },
];
</script>