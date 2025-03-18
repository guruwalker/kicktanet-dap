<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed tpd-new-course-heading-title " type="button"
                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree">
                Course Builder
            </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="tpd-new-course-modal-btn">

                    <!-- modal-announcement-btn -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-topic" data-bs-whatever="@fat">
                        <span></span> Add New Topic
                    </button>
                    <!-- modal-announcement-btn-end -->

                    <!-- announcement modal -->
                    <modal-announcement modal-id="add-topic" />
                    <!-- announcement modal -->

                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>