<template>
    <div class="tpd-course-area">
        <div class="row">
            <div class="col-12">
                <div class="tpd-setting-box profile">
                    <div class="tp-dashboard-banner-bg profile mb-100"
                        :style="{ backgroundImage: `url(/images/dashboard/bg/dashboard-bg-1.jpg)` }">
                        <div class="tp-instructor-wrap d-flex justify-content-between">
                            <div class="tp-instructor-info d-flex">
                                <div class="tp-instructor-avatar p-relative profile">
                                    <img :src="studentProfile ? '/images/dashboard/profile/dashboard-profile-2.jpg' : '/images/dashboard/profile/dashboard-profile.jpg'" alt="profile-img" />
                                    <span><svg-camera-one /></span>
                                </div>
                            </div>
                            <div class="tp-instructor-course-btn profile">
                                <a class="tp-btn-add-course profile" href="#"><span><svg-camera-two /></span> 
                                    Edit Cover Photo
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="tpd-setting-from">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="tpd-input">
                                    <label>First Name</label>
                                    <input type="text" placeholder="Hasan" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="tpd-input">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Caster" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="tpd-input">
                                    <label>User Name</label>
                                    <input type="text" placeholder="Instructor" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="tpd-input">
                                    <label>Phone Number</label>
                                    <input type="text" placeholder="(+44) 433 962 004" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="tpd-input">
                                    <label>Skill/Occupation</label>
                                    <input type="text" placeholder="Full Stack Developer" />
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="tpd-input">
                                    <label>Display name publicly as</label>
                                    <input type="text" placeholder="Instructor" />
                                </div>
                            </div>
                            <div class="col-lg-12">
                                <div class="tpd-input">
                                    <label>About me</label>
                                    <textarea
                                        placeholder="I'm the Front-End Developer for London, OR. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences."></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tpd-setting-cartificate">
                        <h5 class="tpd-setting-cartificate-title">Certificate Signature</h5>
                        <div class="tpd-setting-cartificate-upload d-flex align-items-center">
                            <div class="tpd-setting-cartificate-thumb">
                                <img src="/images/dashboard/bg/certificate-2.png" alt="certificate-img" />
                            </div>
                            <div class="tpd-setting-cartificate-content">
                                <p>Size: 700x430 pixels</p>
                                <span class="upload-btn">
                                    <input id="tpd-setting-cartificate-input" type="file" accept="image/png, image/jpeg" />
                                    <label htmlFor="tpd-setting-cartificate-input">
                                        <span><svg-upload-one /></span>
                                        Upload Image
                                    </label>
                                </span>
                            </div>
                        </div>
                        <div class="tpd-setting-cartificate-btn">
                            <button>Save Changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type IProps = {
    studentProfile?: boolean;
}
defineProps<IProps>();
</script>