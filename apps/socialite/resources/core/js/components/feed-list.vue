<template>
    <div class="">
        <answer-preview :answer="answer" v-for="answer in answers"></answer-preview>
        <button class="btn btn-default" @click="fetchData()">Load more</button>
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