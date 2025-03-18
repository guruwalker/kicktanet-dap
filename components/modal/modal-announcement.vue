<template>
    <div class="modal fade tpd-modal-announcement" :id="modalId" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="tpd-modal-title" id="exampleModalLabel">Add Announcement</h4>
                    <button type="button" class="tpd-modal-btn-close" data-bs-dismiss="modal" aria-label="Close">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                                fill="none">
                                <path d="M13 1L1 13" stroke="#757C8E" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M1 1L13 13" stroke="#757C8E" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm">
                        <div class="tpd-input-white mb-20">
                            <label>Announcement Title</label>
                            <input type="text" placeholder="Test Announcement" v-model="title">
                        </div>
                        <div class="tpd-input-white mb-20">
                            <label>Announcement Title</label>
                            <input type="text" placeholder="Test Announcement" v-model="announcement">
                        </div>
                        <div class="tpd-input-white">
                            <label for="message-text" class="col-form-label">Summary</label>
                            <textarea class="form-control" id="message-text" placeholder="Lorem Ipsum...."></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="tpd-btn-cancel" data-bs-dismiss="modal"
                        aria-label="Close">Cancel</button>
                    <button type="button" class="tpd-btn-edit ml-10">Publish</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

type IProps = {
    modalId: string,
    edit?: {
        announcement?: string,
        courseTitle?: string
    }
}

const props = withDefaults(defineProps<IProps>(), {
    modalId: 'add-topic'
})

// State
const title = ref<string>('');
const announcement = ref<string>('');

// Watch edit to populate fields when modal opens
watch(
  () => props.edit,
  (newEdit) => {
    title.value = newEdit?.courseTitle || '';
    announcement.value = newEdit?.announcement || '';
  },
  { immediate: true }
);

const submitForm = () => {
  console.log(title.value, announcement.value); 
};
</script>
