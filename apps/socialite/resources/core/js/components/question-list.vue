<template>
    <div class="">
        <question :question="question" v-for="question in questions"></question>
        <div class="preloader preloader-wrapper small active" v-show="requesting">
            <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
        <button style="width: 100%; padding-left: 0;" class="btn btn-default" @click="fetchData()" v-show=" ! requesting && page < totalPages">Load more</button>
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
        requesting() {
            return this.$store.state.questionList.requesting;
        },

        questions() {
            return this.$store.state.questionList.questions;
        },

        page() {
            return this.$store.state.questionList.page - 1;
        },

        totalPages() {
            return this.$store.state.questionList.totalPages;
        },
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
