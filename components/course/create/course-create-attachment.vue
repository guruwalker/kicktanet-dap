<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed tpd-new-course-heading-title" type="button"
                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive">
                Course Attachments
            </button>
        </h2>
        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="tpd-new-course-instructor">
                    <span class="upload-btn">
                        <input id="tpd-new-course-file" type="file" accept="image/png, image/jpeg" />
                        <label for="tpd-new-course-file"><span><svg-attachment /></span> Upload Attachments</label>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>