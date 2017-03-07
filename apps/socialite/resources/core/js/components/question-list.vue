<template>
    <div class="">
        <question :question="question" v-for="question in questions"></question>
        <button class="btn btn-default" @click="fetchData()">Load more</button>
    </div>
</template>

<script>
    export default {
        props: ['questionUrl'],

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
            }
        }
    }
</script>