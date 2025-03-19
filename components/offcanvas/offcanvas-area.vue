<template>
    <div :class="['offcanvas__area', offcanvas_cls, openOffCanvas ? 'offcanvas-opened' : '']">
        <div class="offcanvas__wrapper">
            <div class="offcanvas__close">
                <button @click="emitOffCanvas" class="offcanvas__close-btn offcanvas-close-btn">
                    <svg-close-two />
                </button>
            </div>
            <div class="offcanvas__content">
                <div class="offcanvas__top mb-90 d-flex justify-content-between align-items-center">
                    <div class="offcanvas__logo tp-header-logo">
                        <NuxtLink to="/">
                            <img src="/images/logo/logo-black.png" alt="logo" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="offcanvas-main">
                    <div class="offcanvas-content">
                        <h3 class="offcanvas-title">Hello There!</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, </p>
                    </div>

                    <!-- Mobile menu -->
                     <offcanvas-menu-two v-if="offcanvas_menu_2" />
                     <offcanvas-menu v-else />
                    <!-- Mobile menu -->

                    <div class="offcanvas-gallery">
                        <div class="row gx-2">
                            <div v-for="(item, index) in galleryData" :key="index" class="col-md-3 col-3">
                                <div class="offcanvas-gallery-img fix">
                                    <a :href="item.link" target="_blank">
                                        <img :src="item.src" :alt="`gallery-${index}`" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="offcanvas-contact">
                        <h3 class="offcanvas-title sm">Information</h3>
                        <ul>
                            <li><a href="tel:1245654">+ 4 20 7700 1007</a></li>
                            <li><a href="mailto:info@kictanet.or.ke">info@kictanet.or.ke</a></li>
                            <li><a href="#">Avenue de Roma 158b, Lisboa</a></li>
                        </ul>
                    </div>
                    <div class="offcanvas-social">
                        <h3 class="offcanvas-title sm">Follow Us</h3>
                        <ul>
                            <li>
                                <a href="#"><svg-social-instagram /></a>
                            </li>
                            <li>
                                <a href="#"><svg-social-dribble /></a>
                            </li>
                            <li>
                                <a href="#"><svg-social-behance /></a>
                            </li>
                            <li>
                                <a href="#"><svg-social-youtube-two /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Body Overlay -->
    <div @click="emitOffCanvas" :class="['body-overlay', openOffCanvas ? 'opened' : '']" />
    <!-- Body Overlay -->
</template>

<script setup lang="ts">

type IProps = {
    openOffCanvas: boolean;
    offcanvas_cls?: string;
    offcanvas_menu_2?: boolean;
}

const props = defineProps<IProps>()

const emit = defineEmits(['handleOffCanvas'])

const galleryData = [
    { link: 'https://www.instagram.com/', src: '/images/menu/offcanvas/offcanvas-1.jpg' },
    { link: 'https://www.instagram.com/', src: '/images/menu/offcanvas/offcanvas-2.jpg' },
    { link: 'https://www.instagram.com/', src: '/images/menu/offcanvas/offcanvas-3.jpg' },
    { link: 'https://www.instagram.com/', src: '/images/menu/offcanvas/offcanvas-4.jpg' }
]

const emitOffCanvas = () => {
    emit('handleOffCanvas')
}
</script>
