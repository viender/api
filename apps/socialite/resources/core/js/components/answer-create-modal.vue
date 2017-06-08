<template>
    <div class="answerCreateModal-overlay" @click="hideAnswerCreateModal()" v-show="showModal">
        <div class="answerCreateModal" @click="modalClickHandle($event)">
            <div class="answerCreateModal-content">
                <answer-create-form ref="form" @answer-posted="hideAnswerCreateModal($event)"></answer-create-form>
            </div>
            <button class="btn btn-default right" v-if="$viender.treasure.client.type === 'desktop'" @click="$refs.form.answer($event)">Submit</button>
        </div>
        <div class="modal-action" v-if="$viender.treasure.client.type !== 'desktop'">
            <i aria-hidden="true" class="fa fa-angle-left fa-2x"></i>
            <i @click="$refs.form.answer($event)" class="modal-action-send material-icons right">send</i>
        </div>
        <edit-credential-modal ref="addCredential"></edit-credential-modal>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
    computed: {
        showModal() {
            return this.$store.state.questionList.showAnswerCreateModal;
        },
        question() {
            return this.$store.state.editor.question;
        },
    },

    watch: {
        showModal() {
            const self = this;

            if(this.showModal) {
                Vue.nextTick(() => {
                    $(self.$refs.form.$refs.editor).summernote('editor.focus');
                });
            }
        },
    },

    methods: {
        modalClickHandle(event) {
            event.stopPropagation();
        },

        hideAnswerCreateModal(answer) {
            this.$store.commit('questionList/' + types.SET_SHOW_ANSWER_CREATE_MODAL, false);
        },
    },
};
</script>
