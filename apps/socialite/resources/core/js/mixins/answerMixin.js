import * as types from '../store/mutation-types';
import * as answerEditOverlay from '../components/answer-edit-overlay';

export default {
    components: {
        'answer-edit-overlay': answerEditOverlay,
    },

    props: {
        answer: {
            type: Object,
            default: null,
        },
        showQuestion: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            showComments: false,
        };
    },

    methods: {
        showAnswer() {
            if (this.answer.deleted_at) return;
            this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, true);
            this.$store.dispatch('feed/setShowedAnswer', this.answer);

            const url = this.$viender.helpers.getUrl('self_html', this.answer);
            const page = this.answer.title;

            this.$viender.helpers.pushState({page, url});
            this.ga('show', 'Answer Show');
        },

        upvote() {
            const self = this;

            self.answer.upvote()
            .then((response) => {
                self.ga('upvote', 'Answers Upvoted');
            });
        },

        downvote() {
            const self = this;

            self.answer.downvote()
            .then((response) => {
                self.ga('downvote', 'Answers Downvoted');
            });
        },

        toggleComments() {
            this.showComments = !this.showComments;
            this.ga('toggle_comments', 'Answer Toggle Comments');
        },

        incrementCommentCount() {
            this.answer.comment_count += 1;
        },

        restore() {
            const self = this;

            self.answer.delete()
            .then(() => {
                self.answer.deleted_at = null;
            });
        },

        openEditOverlay() {
            console.log('open');
            this.$refs.editOverlay.open();
        },

        ga(eventAction, eventLabel = '') {
            if (!window.ga) return;

            ga('send', {
                hitType: 'event',
                eventCategory: 'Answers',
                eventAction: eventAction,
                eventLabel: eventLabel,
            });
        },
    },
};
