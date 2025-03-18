<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed tpd-new-course-heading-title" type="button"
                data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour">
                Instructors
            </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
            <div class="accordion-body">
                <div class="tpd-new-course-instructor">
                    <div class="tpd-new-course-instructor-user d-flex align-items-center">
                        <img src="/images/dashboard/profile/reviews-profile-4.png" alt="profile-img" />
                        <span>Indigo Violet</span>
                    </div>
                    <!-- modal-announcement-btn -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#add-instructor"
                        data-bs-whatever="@fat"><span>
                            <svg-user />
                        </span> Add Instructor
                    </button>
                    <!-- modal-announcement-btn-end -->
                </div>
            </div>
        </div>
    </div>

    <!-- announcement modal -->
    <modal-announcement modal-id="add-instructor" />
    <!-- announcement modal -->
</template>

<script setup lang="ts">

</script>
