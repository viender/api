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
        <answer-create-modal :url="$viender.helpers.getUrl('self', $store.state.editor.content)" method="PUT" :init-content="true"></answer-create-modal>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import answerCreateModal from 'viender_socialite/core/js/components/answer-create-modal';
import answerCreateForm from 'viender_socialite/core/js/components/answer-create-form';

export default {
    components: {
        'answer-create-modal': answerCreateModal,
        'answer-create-form': answerCreateForm,
    },

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
        const self = this;

        $(window).on('popstate', () => {
            const path = window.location.pathname.split('/');
            if (path[1] === 'question' && path[3] === 'answers') {
                const answer = this.$store.getters['feed/getAnswerByUrl'](window.location.href);
                this.$store.dispatch('feed/setShowedAnswer', answer);
                this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, true);
            } else {
                this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, false);
            }
        });

        $(window).on('scroll', function() {
            if($(window).scrollTop() + $(window).height() >= $(document).height() - 1000) {
                if (self.page <= self.totalPages) {
                    self.fetchData();
                }
            }
        });

        this.$store.commit('feed/setFeedUrl', this.feedUrls);
        this.fetchData();
    },

    methods: {
        fetchData() {
            this.$store.dispatch('feed/fetchData')
            .then(()=> {
                if (window.ga) {
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'Feed',
                        eventAction: `page_${this.page}`,
                        eventValue: 1,
                        eventLabel: 'Feed Page Reach',
                    });
                }
            });
        },
    },
};
</script>
