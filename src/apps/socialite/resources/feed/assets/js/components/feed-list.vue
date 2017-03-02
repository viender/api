<template>
    <div class="row">
        <div class="col-md-6 col-md-offset-3">
            <answer v-for="answer in answers" :answer="answer"></answer>
            <button class="btn btn-default" @click="fetchData()">Load more</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['feedUrls'],

        computed: {
            answers() {
                return this.$store.state.feed.answers;
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

<style>
    .answer-container {
        border-bottom: 1px solid #e2e2e2;
        padding-bottom: 16px;
        max-width: 800px;
    }

    .answer-body {
        padding-bottom: 16px;
    }
</style>