<template>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button
        class="accordion-button tpd-new-course-heading-title"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-expanded="true"
        aria-controls="panelsStayOpen-collapseOne"
      >
        New Upload
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseOne"
      class="accordion-collapse collapse show"
    >
      <div class="accordion-body">
        <div class="tpd-new-course-box-1">
          <div class="tpd-input">
            <label>Title</label>
            <input type="text" placeholder="Title" />
          </div>
        </div>
        <div class="tpd-new-course-box-3">
          <div class="tpd-new-course-categories">
            <div class="tpd-input course-file">
              <label>Image/Video/Document</label>
              <div
                class="tpd-new-course-file-content text-center"
                style="
                  background-image: url(/images/dashboard/bg/select-file.png);
                "
              >
                <div class="tpd-new-course-file-thumb mb-15">
                  <img
                    src="/images/dashboard/bg/select-file-icon.png"
                    alt="file-icon"
                  />
                </div>
                <span class="upload-btn">
                  <input
                    id="tpd-new-course-file-input"
                    type="file"
                    accept="image/png, image/jpeg"
                  />
                  <label for="tpd-new-course-file-input"
                    >Choose File to Upload</label
                  >
                </span>
                <p>Max Upload Size: 5mb</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
