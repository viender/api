<template>
    <div class="">
        <answer-preview :answer="answer" v-for="answer in answers" v-if="answers[0] ? answers[0].preview : true" :show-question="options.answers.showQuestion"></answer-preview>
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
import * as types from '../store/mutation-types';

export default {
    props: {
        feedUrls: {
            type: Object,
            default: null,
        },
        options: {
            type: Object,
            default: function() {
                return {
                    answers: {
                        showQuestion: true,
                    },
                };
            },
        },
    },

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

        showedAnswer() {
            return this.$store.state.feed.showedAnswer;
        },
    },

    created() {
        $(window).on('popstate', () => {
            const basePath = window.location.pathname.split('/')[1];
            if (basePath && basePath !== '') {
                const answer = this.$store.getters['feed/getAnswerByUrl'](window.location.href);

                this.$store.commit('feed/' + types.SET_SHOWED_ANSWER, answer);
                this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, true);
            } else {
                this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, false);
            }
        });

        this.$store.commit('feed/setFeedUrl', this.feedUrls);
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.$store.dispatch('feed/fetchData');
        },
    },
};
</script>
