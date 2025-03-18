<template>
    <section class="tp-contact-info-area tp-contact-p pb-90">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="tp-contact-info-wrapper text-center">
                        <h3 class="tp-contact-main-title">Let us know how we can help</h3>
                    </div>
                    <div class="row">
                        <div v-for="(info,i) in contactInfoData" :key="i" class="col-lg-4 col-md-6">
                            <div class="tp-contact-info-item mb-30">
                                <div class="tp-contact-info-icon">
                                    <span v-html="info.icon"></span>
                                </div>
                                <h4 class="tp-contact-info-title">{{ info.title }}</h4>
                                <p>{{ info.description }}</p>
                                <a :href="info.href">{{ info.linkText }}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const contactInfoData = [
    {
        icon: `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.6 1H15.4C16.28 1 17 1.72 17 2.6V12.2C17 13.08 16.28 13.8 15.4 13.8H2.6C1.72 13.8 1 13.08 1 12.2V2.6C1 1.72 1.72 1 2.6 1Z" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17 2.6001L9 8.2001L1 2.6001" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>`,
        title: 'Feedbacks',
        description: 'Speak to our Friendly team.',
        linkText: 'Support@gmail.com',
        href: 'mailto:Support@gmail.com'
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M10.291 3.86696C10.9924 4.00354 11.637 4.34592 12.1424 4.85028C12.6477 5.35463 12.9907 5.99801 13.1276 6.69808M10.291 1C11.7483 1.16158 13.1072 1.81291 14.1446 2.84704C15.182 3.88118 15.8363 5.23665 16 6.69091M15.2819 12.4105V14.5607C15.2827 14.7603 15.2417 14.9579 15.1616 15.1408C15.0815 15.3237 14.964 15.4879 14.8166 15.6228C14.6692 15.7578 14.4952 15.8605 14.3058 15.9244C14.1163 15.9884 13.9156 16.0121 13.7164 15.9942C11.5067 15.7545 9.38404 15.0009 7.5191 13.7938C5.78402 12.6934 4.31297 11.2251 3.21043 9.49336C1.99681 7.62353 1.24154 5.49467 1.00583 3.27923C0.987883 3.08103 1.01148 2.88127 1.07513 2.69267C1.13877 2.50407 1.24106 2.33076 1.37549 2.18378C1.50992 2.0368 1.67353 1.91937 1.85592 1.83896C2.03831 1.75855 2.23548 1.71693 2.43487 1.71674H4.58921C4.93771 1.71332 5.27557 1.83649 5.53981 2.06331C5.80406 2.29012 5.97665 2.6051 6.02543 2.94953C6.11636 3.63765 6.28499 4.31329 6.52811 4.96357C6.62472 5.22011 6.64564 5.49891 6.58836 5.76695C6.53109 6.03498 6.39803 6.28101 6.20496 6.47589L5.29296 7.38614C6.31523 9.18053 7.8038 10.6663 9.60163 11.6866L10.5136 10.7763C10.7089 10.5836 10.9554 10.4508 11.2239 10.3936C11.4925 10.3365 11.7718 10.3574 12.0288 10.4538C12.6804 10.6964 13.3573 10.8648 14.0467 10.9555C14.3956 11.0046 14.7142 11.18 14.9419 11.4483C15.1696 11.7165 15.2906 12.059 15.2819 12.4105Z" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`,
        title: 'Call Us',
        description: 'Mon-Fri from 8am to 5pm',
        linkText: '+1(555) 000-0000',
        href: 'tel:+15550000000'
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clip-path="url(#clip0_6207_333)">
                    <path d="M14 6.6665C14 11.3332 8 15.3332 8 15.3332C8 15.3332 2 11.3332 2 6.6665C2 5.07521 2.63214 3.54908 3.75736 2.42386C4.88258 1.29864 6.4087 0.666504 8 0.666504C9.5913 0.666504 11.1174 1.29864 12.2426 2.42386C13.3679 3.54908 14 5.07521 14 6.6665Z" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M8 8.6665C9.10457 8.6665 10 7.77107 10 6.6665C10 5.56193 9.10457 4.6665 8 4.6665C6.89543 4.6665 6 5.56193 6 6.6665C6 7.77107 6.89543 8.6665 8 8.6665Z" stroke="#57595F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                    <clipPath id="clip0_6207_333">
                    <rect width="16" height="16" fill="white"/>
                    </clipPath>
                </defs>
            </svg>`,
        title: 'Visit Us',
        description: 'Visit our office HQ.',
        linkText: '77 Robinson Road #33-01',
        href: '#'
    }
];
</script>