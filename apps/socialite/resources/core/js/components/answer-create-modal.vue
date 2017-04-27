<template>
    <div class="answerCreateModal-overlay" @click="hideAnswerCreateModal()" v-show="showModal">
        <div class="answerCreateModal" @click="modalClickHandle($event)">
            <div class="answerCreateModal-content">
                <answer-create-form ref="form" @answer-posted="hideAnswerCreateModal($event)"></answer-create-form>
            </div>
        </div>
        <div class="modal-action">
            <i aria-hidden="true" class="fa fa-angle-left fa-2x"></i>
            <img class="answerCreateModal-sendButton" src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_sent_right_g60_24dp_r1.png" alt="send button" @click="$refs.form.answer($event)">
            <!-- <a class="btn"><i class="fa fa-paper-plane" aria-hidden="true" @click="$refs.form.answer($event)"></i></a> -->
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

            if (this.$store.state.feed) {
                this.$store.commit('feed/addAnswer', answer);
            }
        }
    }
}
</script>
