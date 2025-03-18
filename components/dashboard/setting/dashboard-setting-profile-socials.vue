<template>
    <div class="tpd-course-area">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="tpd-setting-box">
                        <h3 class="tpd-setting-social-title">Social Profile Link</h3>
                        <div class="tpd-setting-social-content">
                            <div v-for="(social, i) in socialData" :key="i"
                                class="tpd-setting-social-wrap d-flex align-items-center">
                                <div class="tpd-setting-social-icon d-flex align-items-center">
                                    <img :src="social.imgSrc" :alt="social.name"/>
                                    <h4>{{social.name}} <span> <svg-arrow-right-sm /> </span></h4>
                                </div>
                                <div class="tpd-setting-social-input">
                                    <div class="tpd-input">
                                        <input type="text" :placeholder="social.placeholder" />
                                    </div>
                                </div>
                            </div>
                            <div class="tpd-setting-btn">
                                <button>Update Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const socialData = [
    {
        name: "Facebook",
        imgSrc: "/images/dashboard/icon/facebook.png",
        placeholder: "https://facebook.com/username"
    },
    {
        name: "Twitter",
        imgSrc: "/images/dashboard/icon/twetter.png",
        placeholder: "https://twitter.com/username"
    },
    {
        name: "Linkedin",
        imgSrc: "/images/dashboard/icon/linkdin.png",
        placeholder: "https://linkedin.com/username"
    },
    {
        name: "Website",
        imgSrc: "/images/dashboard/icon/website.png",
        placeholder: "https://example.com/"
    },
    {
        name: "Github",
        imgSrc: "/images/dashboard/icon/git.png",
        placeholder: "https://github.com/username"
    }
];
</script>