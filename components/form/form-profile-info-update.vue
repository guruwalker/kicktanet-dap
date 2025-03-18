<template>
    <form action="#">
        <div class="row">
            <div class="col-xxl-6 col-md-6">
                <div class="profile__input-box">
                    <div class="profile__input">
                        <input type="text" placeholder="Enter your username" value="Pranta">
                        <span>
                            <svg-user />
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-xxl-6 col-md-6">
                <div class="profile__input-box">
                    <div class="profile__input">
                        <input type="email" placeholder="Enter your email" value="example@mail.com">
                        <span>
                            <svg-email-three />
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-md-6">
                <div class="profile__input-box">
                    <div class="profile__input">
                        <input type="text" placeholder="Enter username" value="name">
                        <span>
                            <i class="fa-brands fa-facebook-f"></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-md-6">
                <div class="profile__input-box">
                    <div class="profile__input">
                        <input type="text" placeholder="Enter username" value="name">
                        <span><i class="fa-brands fa-twitter"></i></span>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-md-6">
                <div class="profile__input-box">
                    <div class="profile__input">
                        <input type="text" placeholder="Enter your number" value="0123 456 7889">
                        <span>
                            <svg-phone-two />
                        </span>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-md-6">
                <div class="profile__input-box">
                    <div class="profile__input">
                        <select class="nice-select wide">
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col-xxl-12">
                <div class="profile__input-box">
                    <div class="profile__input">
                        <input type="text" placeholder="Enter your address" value="3304 Randall Drive">
                        <span>
                            <svg-location-three />
                        </span>
                    </div>
                </div>
            </div>

            <div class="col-xxl-12">
                <div class="profile__input-box">
                    <div class="profile__input">
                        <textarea placeholder="Enter your bio">Hi there, this is my bio...</textarea>
                    </div>
                </div>
            </div>
            <div class="col-xxl-12">
                <div class="profile__btn">
                    <button type="submit" class="tp-btn">Update Profile</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">

</script>