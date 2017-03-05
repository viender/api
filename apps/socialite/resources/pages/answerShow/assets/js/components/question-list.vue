<template>
    <div class="">
        <question :question="question" v-for="question in questions"></question>
        <button class="btn btn-default" @click="fetchData()">Load more</button>
    </div>
</template>

<script>
    export default {
        props: ['questionsUrl'],

        computed: {
            questions() {
                return this.$store.state.feed.questions;
            }
        },

        mounted() {
            this.$store.commit('feed/setFeedUrl', this.feedUrls);
            this.fetchData();
        },

        methods: {
            fetchData() {
                this.$store.dispatch('feed/fetchData');
            }
        }
    }
</script>