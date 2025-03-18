<template>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button tpd-new-course-heading-title" type="button" data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne">
                Course Info
            </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
                <div class="tpd-new-course-box-1">
                    <div class="tpd-input">
                        <label>Course Title</label>
                        <input type="text" placeholder="New Course" />
                    </div>
                    <div class="tpd-input">
                        <label>Course Slug</label>
                        <input type="text" placeholder="new course" />
                    </div>
                    <p>Permalink: <a href="#">https://demo.themepure.net/acadia/new-course</a></p>
                    <div class="tpd-input about-height">
                        <label>About Course</label>
                        <textarea placeholder="About Course"></textarea>
                    </div>
                </div>
                <div class="tpd-new-course-box-2">
                    <h4 class="tpd-new-course-setting-title">Course Settings</h4>
                    <div class="tp-dashboard-tab-list">
                        <ul>
                            <li>
                                <a class="active" href="#"><span><svg-setting /></span> General</a>
                            </li>
                            <li>
                                <a href="#"><span><svg-pen-two /></span> Content Drip</a>
                            </li>
                        </ul>
                    </div>
                    <div class="tpd-input">
                        <label>Maximum Students</label>
                        <input type="number" placeholder="4" />
                        <p><span><svg-info-one /></span>Number of students that can enrol in this course. Set 0 for no
                            limits.</p>
                    </div>
                    <div class="tpd-input">
                        <label>Difficulty Level</label>
                        <input type="text" placeholder="Intermediate" />
                        <p><span><svg-info-one /></span>Course difficulty level</p>
                    </div>
                    <div class="tpd-input">
                        <label>Public Course</label>
                        <div class="switcher">
                            <label for="toggle-0">
                                <input type="checkbox" id="toggle-0" />
                                <span><small></small></span>
                            </label>
                        </div>
                        <p><span><svg-info-one /></span>Make This Course Public. No enrollment required.</p>
                    </div>
                    <div class="tpd-input">
                        <label>Q&A</label>
                        <div class="switcher">
                            <label for="toggle-1">
                                <input type="checkbox" id="toggle-1" />
                                <span><small></small></span>
                            </label>
                        </div>
                        <p class="m-0"><span><svg-info-one /></span>Enable Q&A section for your course</p>
                    </div>
                </div>
                <div class="tpd-new-course-box-3">
                    <div class="tpd-new-course-categories">
                        <div class="tpd-new-course-select2">
                            <div class="tpd-input">
                                <label>Choose a Category</label>
                                <ClientOnly>
                                    <select-course-info-category />
                                </ClientOnly>
                            </div>
                        </div>
                        <div class="tpd-input mt-35">
                            <label class="font">Course Price</label>
                            <div class="tpd-order-filter tpd-redio-style tmy-tab">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item p-relative" role="presentation">
                                        <button class="nav-link" id="home-tab" data-bs-toggle="tab"
                                            data-bs-target="#home" type="button" role="tab" aria-selected="false"
                                            tabIndex={-1}>
                                            <span class="tpd-redio-style-span"></span>
                                            <span>Free</span>
                                        </button>
                                    </li>
                                    <li class="nav-item p-relative" role="presentation">
                                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab"
                                            data-bs-target="#profile" type="button" role="tab" aria-selected="false"
                                            tabIndex={-1}>
                                            <span class="tpd-redio-style-span"></span>
                                            <span>Paid</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tpd-input-box d-flex">
                            <div class="tpd-input">
                                <label>Regular Price ($)</label>
                                <input type="text" placeholder="Set course price" />
                            </div>
                            <div class="tpd-input">
                                <label>Discounted Price ($)</label>
                                <input type="number" placeholder="20" />
                            </div>
                        </div>
                        <div class="tpd-input course-file">
                            <label>Course Thumbnail</label>
                            <div class="tpd-new-course-file-content text-center"
                                style="background-image: url(/images/dashboard/bg/select-file.png);">
                                <div class="tpd-new-course-file-thumb mb-15">
                                    <img src="/images/dashboard/bg/select-file-icon.png" alt="file-icon" />
                                </div>
                                <span class="upload-btn">
                                    <input id="tpd-new-course-file-input" type="file" accept="image/png, image/jpeg" />
                                    <label for="tpd-new-course-file-input">Choose Image to Upload</label>
                                </span>
                                <p>Size: 700x430 pixels</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>
