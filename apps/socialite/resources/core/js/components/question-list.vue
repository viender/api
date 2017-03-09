<template>
    <div class="">
        <question @btn-answer-clicked="showAnswerCreateModal($event)" :question="question" v-for="question in questions"></question>
        <button class="btn btn-default" @click="fetchData()">Load more</button>
        <div class="answer-create-modal"  v-show="showModal">
            <div class="answer-create-modal-content">
                <answer-create-form ref="answerCreateModal" @answer-posted="hideAnswerCreateModal()"></answer-create-form>
            </div>
        </div>
        <div class="answer-create-modal-overlay" @click="hideAnswerCreateModal()" v-show="showModal"></div>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
    props: ['questionUrl'],

    data() {
        return {
            showModal: false,
        }
    },

    computed: {
        questions() {
            return this.$store.state.answer.questions;
        }
    },

    mounted() {
        this.$store.dispatch('answer/setQuestionUrl', this.questionUrl);
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.$store.dispatch('answer/fetchData');
        },

        showAnswerCreateModal(eventData) {
            this.$store.commit('editor/' + types.SET_EDITOR_CONTENT, eventData.answerText);
            this.$store.commit('editor/' + types.SET_EDITOR_QUESTION, eventData.question);
            $(this.$refs.answerCreateModal.$refs.editor).summernote('code', eventData.answerText.body);
            this.showModal = true;
        },

        hideAnswerCreateModal() {
            this.showModal = false;
            document.getElementsByClassName("note-image-popover")[0].style.display = 'none';
        }
    }
}
</script>

<style>
    .answer-create-modal {
        position: fixed;
        top: 100px;
        z-index: 1041;
        width: 600px;
        overflow: visible;
        background-color: #f5f5f5;
    }

    .answer-create-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: .9;
        z-index: 9;
    }
</style>