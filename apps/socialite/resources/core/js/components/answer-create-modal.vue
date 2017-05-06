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
            <img class="answerCreateModal-sendButton" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_sent_right_g60_24dp_r1.png" alt="send button" @click="$refs.form.answer($event)">
        </div>
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
            let _this = this;

            if(this.showModal) {
                Vue.nextTick(function () {
                    // $(_this.$refs.form.$refs.editor).summernote('editor.focus');
                });
            }
        }
    },

    methods: {
        modalClickHandle(event) {
            event.stopPropagation();
        },

        hideAnswerCreateModal(answer) {
            this.$store.commit('questionList/' + types.SET_SHOW_ANSWER_CREATE_MODAL, false);
        }
    }
}
</script>
