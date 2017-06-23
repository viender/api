<template>
    <overlay ref="overlay">
        <strong slot="title">Edit Answer</strong>
        <div slot="content">
            <div class="">
                <div class="answerCreateModal">
                    <div class="answerCreateModal-content">
                        <answer-edit-form ref="form" :answer="answer"></answer-edit-form>
                    </div>
                    <button class="btn btn-default right" v-if="$viender.treasure.client.type === 'desktop'" @click="$refs.form.answer($event)">Submit</button>
                </div>
                <edit-credential-modal ref="editCredential"></edit-credential-modal>
            </div>
        </div>
    </overlay>
</template>

<script>
import answerEditForm from './answer-edit-form';
import editCredentialModal from 'viender_credential/core/js/components/edit-credential-modal';

export default {
    components: {
        'answer-edit-form': answerEditForm,
        'edit-credential-modal': editCredentialModal,
    },

    props: {
        answer: {
            type: Object,
            required: true,
        },
    },

    methods: {
        open() {
            this.$refs.overlay.open();
        },

        close() {
            this.$refs.overlay.close();
        },
    },
};
</script>
