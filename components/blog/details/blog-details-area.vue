<template>
    <section class="tp-blog-details-p p-relative pt-80 pb-120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="tp-blog-details-wrap">
              <div class="tp-blog-stories-tag-wrap">
                <a href="#">Education</a>
              </div>
              <h3 class="tp-blog-details-title">{{ blog.title }}</h3>
              <div class="tp-blog-details-user d-flex justify-content-between">
                <div class="tp-blog-details-user-box">
                  <span>
                    <img v-if="blog.author_img" :src="blog.author_img" :alt="blog.author" />
                    {{ blog.author }}
                  </span>
                  <span>{{ blog.date }}</span>
                  <span>2 Comments</span>
                </div>
                <div class="tp-blog-details-user-social">
                  <div class="tp-postbox-details-social text-end">
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-solid fa-link"></i></a>
                  </div>
                </div>
              </div>
            </div>
  
            <div class="tp-blog-details-thumb mb-80">
              <img src="/images/blog/deatils/blog-details-bg.jpg" alt="details-bg" />
            </div>
          </div>
  
          <div class="col-lg-8">
            <div class="tp-postbox-wrapper">
              <div class="tp-postbox-details-text">
                <p class="tp-dropcap text-1">Q Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat. Fusce sodales augue a accumsan. Cras sollicitudin, ipsum eget blandit pulvinar. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu.</p>
                <p>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi consequat. Fusce sodales augue a accumsan.</p>
                <p class="text-2">I do not know why she surrendered - exhaustion, probably - but one afternoon in 1980 I was allowed. It was the remake of Jens Lyn with Max von Sydow, you could see the strings in the spaceships when they flew, and it was wonderful. Five friends in the cinema darkness. We only had money for four tickets, so we took turns sitting on each other laps.</p>
              </div>
  
              <div class="tp-postbox-details-thumb pb-60">
                <img src="/images/blog/deatils/blog-details-thumb-1.jpg" alt="details-thumb" />
              </div>
  
              <div class="tp-postbox-details-text pb-25">
                <p>You want to succeed, surround yourself with the right kind of people who will support and encourage you all the way. Be with people who have utmost conviction and patience. The battle is never lost until you’ve abandoned your vision. But what if you’re really exhausted physically, mentally, and most of all emotionally? Here are some sources of motivation to prompt.</p>
              </div>
  
              <div class="tp-postbox-details-text pb-35">
                <h4 class="tp-postbox-details-title">Contemporary art daily</h4>
                <p>Successful people do not see failures as failures. They see them as important learning lessons. Lessons that are capable of giving them insights to prevent such mistakes from happening again. By adopting this mindset of turning each failure into a learning lesson or opportunity.</p>
              </div>
  
              <!-- Blog Details Quote -->
              <blog-item-quote-one :blog="blog" />
              <!-- Blog Details Quote -->
  
              <div class="tp-postbox-details-text pb-35">
                <div class="tp-postbox-details-list">
                  <h4 class="tp-postbox-details-title">Procedere</h4>
                  <p>Successful people do not see failures as failures. They see them as important learning lessons. Lessons that are capable of giving them insights to prevent such mistakes from happening again. By adopting this mindset of turning each failure into a learning lesson or opportunity.</p>
                  <ul>
                    <li>Diversity investigation for royal been.</li>
                    <li>Create a structure where participants will add their information.</li>
                    <li>Efforts without a focus.</li>
                    <li>Many contradicting opinions a vision document.</li>
                    <li>A deliverable for workshop participants.</li>
                  </ul>
                </div>
              </div>
  
              <div class="tp-postbox-details-share mb-50">
                <div class="row align-items-center">
                  <div class="col-md-8">
                    <div class="tagcloud tp-postbox-details-tag">
                      <a href="#">Education</a>
                      <a href="#">Life Style</a>
                      <a href="#">Vue</a>
                      <a href="#">Application</a>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="tp-postbox-details-social text-start text-md-end">
                      <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                      <a href="#"><i class="fa-brands fa-twitter"></i></a>
                      <a href="#"><i class="fa-solid fa-link"></i></a>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Navigation -->
              <blog-details-navigation />
              <!-- Navigation -->

              <!-- Blog Details Author -->
              <blog-details-author :author="blog.author" />
              <!-- Blog Details Author -->
  
              <div class="tp-postbox-comment mb-100">
                <h3 class="tp-postbox-comment-title">2 Comments</h3>

                <!-- Blog Details Comments -->
                <blog-details-comment />
                <!-- Blog Details Comments -->
              </div>
  
              <div class="tp-postbox-comment-from">
                <h3 class="tp-postbox-comment-title">Leave a Reply</h3>
                <p class="tp-postbox-comment-p">
                  Your email address will not be published. Required fields are marked *
                </p>
                <!-- Blog Details Comment Form -->
                <form-blog-reply />
                <!-- Blog Details Comment Form -->
              </div>
            </div>
          </div>
  
          <div class="col-lg-4">
            <!-- blog sidebar area -->
            <blog-sidebar />
            <!-- blog sidebar area -->
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import type { IBlogDT } from '@/types/blog-d-t';
  defineProps<{ blog: IBlogDT }>();
  </script>
  