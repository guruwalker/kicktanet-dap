<template>
    <form id="contact-form">
        <div class="tp-contact-input-form application">
            <h4 class="tp-application-from-title">Applicant Details</h4>
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>First name</label>
                        <input type="text" placeholder="First name">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Last name</label>
                        <input type="text" placeholder="Last name">
                    </div>
                </div>
                <div class="col-xl-12 col-lg-12">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Email address</label>
                        <input type="email" placeholder="Email address">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Zip code</label>
                        <input type="text" placeholder="Zip code">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Phone number</label>
                        <input type="text" placeholder="Phone number">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Date of birth</label>
                        <ui-date-picker :date="selectedDate" @update:date="updateDate" />
                        <span class="icon"><svg-calender/></span>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Student type</label>
                        <div class="tp-application-select">
                            <select class="nice-select wide">
                                <option value="csc">CSC</option>
                                <option value="architecture">Architecture</option>
                                <option value="eee">EEE</option>
                            </select>
                            <!-- <ui-nice-select
                                :options="[
                                { value: 'csc', text: 'CSC' },
                                { value: 'architecture', text: 'Architecture' },
                                { value: 'eee', text: 'EEE' },
                                ]"
                                name="Student type"
                                :default-current="0"
                                @onChange="handleDegree"
                                class="wide"
                            /> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-contact-input-form application">
            <h4 class="tp-application-from-title">Education Records</h4>
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>School</label>
                        <input type="text" placeholder="School">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Year of completion</label>
                        <input type="text" placeholder="Year of completion">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Highest qualification</label>
                        <input type="text" placeholder="Highest qualification">
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Current status</label>
                        <div class="tp-application-select">
                            <select class="nice-select wide">
                                <option value="csc">CSC</option>
                                <option value="architecture">Architecture</option>
                                <option value="eee">EEE</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-contact-input-form application">
            <h4 class="tp-application-from-title">Education Details</h4>
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Select area of study</label>
                        <div class="tp-application-select">
                            <select class="nice-select wide">
                                <option value="csc">CSC</option>
                                <option value="architecture">Architecture</option>
                                <option value="eee">EEE</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Degree level</label>
                        <input type="text" placeholder="Degree level">
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-contact-input-form application">
            <h4 class="tp-application-from-title">Documentation</h4>
            <div class="row">
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Upload passport or birth documentation</label>
                        <input type="text">
                        <input id="cv" type="file" hidden="">
                        <label class="hide" for="cv">
                            <span>Choose File</span>
                        </label>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Upload Curriculum Vitae (CV) or Resume</label>
                        <input type="text">
                        <input id="cvi" type="file" hidden="">
                        <label class="hide" for="cvi">
                            <span>Choose File</span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="tp-contact-input-form">
            <h4 class="tp-application-from-title">Additional Details</h4>
            <div class="row">
                <div class="col-lg-12">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Application full name</label>
                        <input type="text">
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="tp-contact-input schedule p-relative">
                        <label>Additional information</label>
                        <textarea></textarea>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="tp-contact-input-remeber schedule">
                        <input id="remeber" type="checkbox">
                        <label for="remeber">By submitting this form, you agree to the KICTANet University privacy notice.</label>
                    </div>
                </div>
                <div class="tp-schedule-btn">
                    <button class="tp-btn">Submit Aplication <span><svg-arrow-next-two /></span></button>
                    <p class="ajax-response"></p>
                </div>
            </div>
        </div>
    </form>
</template>

<script setup lang="ts">

const selectedDate = ref<Date>(new Date());

const updateDate = (newDate: Date) => {
  selectedDate.value = newDate;
};

function handleStatus(item: { value: string; label: string }) {
        console.log(item);
  }
function handleDegree(item: { value: string; label: string }) {
    console.log(item);
 }
</script>
