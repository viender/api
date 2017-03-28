<template>
    <div class="">
        <answer-preview :answer="answer" v-for="answer in answers" v-if="answers[0] ? answers[0].preview : true"></answer-preview>
        <answer :answer="answer" v-for="answer in answers" v-else></answer>
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
        <button v-show="! requesting && page < totalPages" style="width: 100%; padding-left: 0;" class="btn btn-default" @click="fetchData()">Load more</button>
    </div>
</template>

<script>
export default {
    props: ['feedUrls'],

    computed: {
        requesting() {
            return this.$store.state.feed.requesting;
        },

        answers() {
            return this.$store.state.feed.answers;
        },

        page() {
            return this.$store.state.feed.page - 1;
        },

        totalPages() {
            return this.$store.state.feed.totalPages;
        },
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
