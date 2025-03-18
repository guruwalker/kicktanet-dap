<template>
   <div>
      <nuxt-layout name="layout-eleven">

         <!-- breadcrumb area start -->
         <breadcrumb-two title="Become an Instructor" subtitle="Become an Instructor" color="color" :pages="true" />
         <!-- breadcrumb area end -->

         <!-- become instructor area start -->
         <section class="tp-instructor-area tp-instructor-p pt-120">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="tp-instructor-title-wrap text-center mb-40 wow fadeInUp" data-wow-delay=".3s">
                        <h3 class="tp-instructor-main-title">
                           How to <br /> Become an Instructor
                        </h3>
                     </div>
                     <div class="tp-instructor-become-tab pb-80 wow fadeInUp" data-wow-delay=".5s">
                        <!-- Tabs -->
                        <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                           <li v-for="tab in tabItems" :key="tab.id" class="nav-item" role="presentation">
                              <button :class="`nav-link ${tab.ariaSelected ? 'active' : ''}`" data-bs-toggle="tab"
                                 :id="`${tab.id}-tab`" type="button" :data-bs-target="`#${tab.id}`" role="tab"
                                 :aria-controls="tab.ariaControls" :aria-selected="tab.ariaSelected">
                                 {{ tab.title }}
                              </button>
                           </li>
                        </ul>

                        <!-- Tab Content -->
                        <div class="tab-content" id="myTabContent">
                           <div v-for="tab in tabItems" :key="tab.id" class="tab-pane fade"
                              :class="{ 'show active': tab.ariaSelected }" :id="tab.id" role="tabpanel"
                              :aria-labelledby="`${tab.id}-tab`">
                              <div class="row">
                                 <div class="col-lg-7">
                                    <div class="tp-instructor-become-wrap">
                                       <h4 class="tp-instructor-become-title">{{ tab.content.title }}</h4>
                                       <span class="tp-instructor-become-subtitle">
                                          {{ tab.content.subtitle1 }}
                                       </span>
                                       <p v-html="tab.content.text1"></p>
                                       <span class="tp-instructor-become-subtitle">
                                          {{ tab.content.subtitle2 }}
                                       </span>
                                       <p>{{ tab.content.text2 }}</p>
                                    </div>
                                 </div>
                                 <div class="col-lg-5">
                                    <div class="tp-instructor-become-thumb text-start text-xl-end">
                                       <img :src="tab.image" :alt="tab.title" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- become instructor area end -->

         <!-- counter area start -->
         <counter-six />
         <!-- counter area end -->


         <!-- become instructor contact area start -->
         <section class="tp-instructor-apply-area pt-120 pb-120">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="tp-instructor-apply-box wow fadeInUp" data-wow-delay=".3s">
                        <div class="row">
                           <div class="col-lg-4">
                              <div class="tp-instructor-apply-thumb">
                                 <img src="/images/instructor/instructor-thumb-contact.png" alt="">
                              </div>
                           </div>
                           <div class="col-lg-8">
                              <div class="tp-instructor-apply-from">
                                 <!-- form start -->
                                 <form-instructor-contact />
                                 <!-- form end -->
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- become instructor contact area end -->
      </nuxt-layout>
   </div>
</template>

<script setup lang="ts">
definePageMeta({
   layout: false,
});
useSeoMeta({ title: "Become Instructor - Acadia" });

const tabItems = [
   {
      id: 'home',
      title: 'Become an Instructor',
      ariaControls: 'home',
      ariaSelected: true,
      content: {
         title: 'Become an Instructor',
         subtitle1: 'Plan your course',
         text1: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras <br> semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. <br> Liberoe convallis a cras semper atincidunt egetnval`,
         subtitle2: 'How we help you',
         text2: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egeeque convallis a cras semper auctor.`,
      },
      image: '/images/instructor/instructor-thumb.png'
   },
   {
      id: 'profile',
      title: 'Instructor Rules',
      ariaControls: 'profile',
      ariaSelected: false,
      content: {
         title: 'Instructor Rules',
         subtitle1: 'Plan your course',
         text1: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras <br> semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. <br> Liberoe convallis a cras semper atincidunt egetnval`,
         subtitle2: 'How we help you',
         text2: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egeeque convallis a cras semper auctor.`,
      },
      image: '/images/instructor/instructor-thumb.png'
   },
   {
      id: 'contact',
      title: 'Start with Courses',
      ariaControls: 'contact',
      ariaSelected: false,
      content: {
         title: 'Start with Courses',
         subtitle1: 'Plan your course',
         text1: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras <br> semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. <br> Liberoe convallis a cras semper atincidunt egetnval`,
         subtitle2: 'How we help you',
         text2: `Neque convallis a cras semper auctor. Libero id faucibus nisl tincidunt egetnvallis a cras semper auctonvallis a cras semper aucto. Neque convallis a cras semper auctor. Liberoe convallis a cras semper atincidunt egeeque convallis a cras semper auctor.`,
      },
      image: '/images/instructor/instructor-thumb.png'
   },
];


// Active tab state
const activeTab = ref('home');

// Methods
const setActiveTab = (id: string) => {
   activeTab.value = id;
};
</script>
