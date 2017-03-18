<template>
    <div class="answer-create-modal-overlay" @click="hideAnswerCreateModal()" v-show="showModal">
        <div class="answer-create-modal" @click="modalClickHandle($event)">
            <div class="answer-create-modal-content">
                <answer-create-form ref="answerCreateModal" @answer-posted="hideAnswerCreateModal()"></answer-create-form>
            </div>
        </div>
        <div class="modal-action">
            <span>X</span>
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
    },

    methods: {
        modalClickHandle(event) {
            event.stopPropagation();
        },

        hideAnswerCreateModal() {
            this.$store.commit('questionList/' + types.SET_SHOW_ANSWER_CREATE_MODAL, false);
        }
    }
}
</script>