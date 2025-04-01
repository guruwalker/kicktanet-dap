<script setup>
const faqs = [
  {
    question: "What is the KICKTANet Digital Access Project?",
    answer:
      "The project is aimed at bridging the digital divide by providing digital skills training, connectivity, and access to technology for underserved communities in Kenya.",
  },
  {
    question: "Who can participate in the project?",
    answer:
      "The project targets youth, small business owners, and other community members in Mandera and Busia Counties who seek to improve their digital literacy.",
  },
  {
    question: "What kind of training does the project offer?",
    answer: [
      "Basic and advanced digital skills training.",
      "Online safety and cybersecurity awareness.",
      "Entrepreneurial skills for leveraging digital tools.",
    ],
  },
  {
    question: "How is the project being implemented?",
    answer:
      "KICKTANet works in collaboration with local governments, NGOs, and tech industry partners to provide training, resources, and infrastructure support.",
  },
  {
    question: "How can I get involved?",
    answer:
      "You can participate as a trainee, volunteer, or partner. Contact us for more details on how to join or support the initiative.",
  },
  {
    question: "What impact does the project aim to achieve?",
    answer:
      "The project aims to enhance digital literacy, increase job opportunities, and empower small businesses by integrating technology into their operations.",
  },
];
</script>

<template>
  <section id="faqs-3" class="py-100 faqs-section">
    <div class="container">
      <!-- SECTION TITLE -->
      <div class="row justify-content-center">
        <div class="col-md-10 col-lg-9">
          <div class="section-title mb-70">
            <!-- Title -->
            <h2 class="s-30">Frequently Asked Questions</h2>
            <!-- Text -->
            <p class="s-21 color--grey">
              Answers to common questions about the KICKTANet Digital Access
              Project.
            </p>
          </div>
        </div>
      </div>
      <!-- FAQs-3 QUESTIONS -->
      <!-- FAQs-3 QUESTIONS -->
      <div class="faqs-3-questions">
        <div class="row">
          <!-- QUESTIONS HOLDER - Column 1 -->
          <div class="col-lg-6">
            <div class="questions-holder">
              <div
                v-for="(faq, index) in faqs.slice(
                  0,
                  Math.ceil(faqs.length / 2)
                )"
                :key="index"
                class="question mb-35 animate__animated animate__fadeInUp"
              >
                <h5 class="s-22 w-700">
                  <span>{{ index + 1 }}.</span> {{ faq.question }}
                </h5>
                <div v-if="Array.isArray(faq.answer)">
                  <ul class="simple-list color--grey">
                    <li
                      v-for="(item, i) in faq.answer"
                      :key="i"
                      class="list-item"
                    >
                      <p>{{ item }}</p>
                    </li>
                  </ul>
                </div>
                <p v-else class="color--grey">{{ faq.answer }}</p>
              </div>
            </div>
          </div>

          <!-- QUESTIONS HOLDER - Column 2 -->
          <div class="col-lg-6">
            <div class="questions-holder">
              <div
                v-for="(faq, index) in faqs.slice(
                  Math.ceil(faqs.length / 2),
                  faqs.length
                )"
                :key="index"
                class="question mb-35 animate__animated animate__fadeInUp"
              >
                <h5 class="s-22 w-700">
                  <span>{{ Math.ceil(faqs.length / 2) + index + 1 }}.</span>
                  {{ faq.question }}
                </h5>
                <div v-if="Array.isArray(faq.answer)">
                  <ul class="simple-list color--grey">
                    <li
                      v-for="(item, i) in faq.answer"
                      :key="i"
                      class="list-item"
                    >
                      <p>{{ item }}</p>
                    </li>
                  </ul>
                </div>
                <p v-else class="color--grey">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- MORE QUESTIONS LINK -->
      <div class="row">
        <div class="col">
          <div class="more-questions mt-40">
            <div class="more-questions-txt bg--white-400 r-100">
              <p class="p-lg">
                Have more questions?
                <NuxtLink to="/contacts" class="color--theme"
                  >Get in Touch</NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
