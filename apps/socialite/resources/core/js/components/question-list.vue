<template>
    <div class="">
        <question :question="question" v-for="question in questions"></question>
        <button class="btn btn-default" @click="fetchData()">Load more</button>
        <answer-create-modal></answer-create-modal>
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
            return this.$store.state.questionList.questions;
        }
    },

    mounted() {
        this.$store.dispatch('questionList/setQuestionUrl', this.questionUrl);
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.$store.dispatch('questionList/fetchData');
        },
    }
}
</script>