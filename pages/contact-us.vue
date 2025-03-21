<script setup>
useHead({
  bodyAttrs: {
    class: "navbar-dark navbar-dark-2",
  },
});
</script>
<template>
  <div>
    <section
      id="contacts-1"
      class="pb-50 inner-page-hero contacts-section division"
    >
      <div class="container">
        <!-- SECTION TITLE -->
        <div class="container">
          <div class="row justify-content-center">
            <div class="col">
              <div class="inner-page-title text-center">
                <h2 class="s-52 w-700">Get in Touch</h2>
                <p class="p-lg">Reach out to us for inquiries or support.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CONTACT FORM -->
        <div class="row justify-content-center">
          <div class="col-md-11 col-lg-10 col-xl-8">
            <div class="form-holder">
              <form name="contactform" class="row contact-form">
                <!-- Contact Form Input -->
                <div class="col-md-12">
                  <p class="p-lg">Your Name:</p>
                  <span>Please enter your real name: </span>
                  <input
                    type="text"
                    name="name"
                    class="form-control name"
                    placeholder="Your Name*"
                  />
                </div>
                <div class="col-md-12">
                  <p class="p-lg">Your Email Address:</p>
                  <span
                    >Please carefully check your email address for
                    accuracy</span
                  >
                  <input
                    type="text"
                    name="email"
                    class="form-control email"
                    placeholder="Email Address*"
                  />
                </div>
                <div class="col-md-12">
                  <p class="p-lg">Explain your question in details:</p>
                  <textarea
                    class="form-control message"
                    name="message"
                    rows="6"
                    placeholder="I have a question about..."
                  ></textarea>
                </div>
                <!-- Contact Form Button -->
                <div class="col-md-12 mt-15 form-btn text-right">
                  <UButton type="submit"> Submit Request </UButton>
                </div>
                <div class="contact-form-notice">
                  <p class="p-sm">
                    We are committed to your privacy. For more information,
                    check out our
                    <NuxtLink
                      target="_blank"
                      to="https://www.kictanet.or.ke/privacy-notice/"
                      >Privacy Policy</NuxtLink
                    >.
                  </p>
                </div>
                <!-- Contact Form Message -->
                <div class="col-lg-12 contact-form-msg">
                  <span class="loading"></span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- END CONTACT FORM -->
      </div>
      <!-- End container -->
    </section>
    <hr class="divider" />
  </div>
</template>
