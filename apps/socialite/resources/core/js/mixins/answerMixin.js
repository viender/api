import * as types from '../store/mutation-types';

export default {
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
            requesting: false,
            showComments: false,
        };
    },

    computed: {
        upvoteCount() {
            return this.answer ? this.answer.upvote_count : 0;
        },

        commentCount() {
            return this.answer ? this.answer.comment_count : 0;
        },
    },

    methods: {
        showAnswer() {
            if (this.answer.deleted_at) return;
            this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, true);
            this.$store.dispatch('feed/setShowedAnswer', this.answer);

            const url = this.$viender.helpers.getUrl('self_html', this.answer);
            const page = this.answer.title;

            this.$viender.helpers.pushState({page, url});
        },

        upvote() {
            const self = this;

            if(self.requesting) return;

            self.requesting = true;

            axios.post(this.getUrl('upvotes', this.answer), {})
                .then(function(response) {
                    if(response.status == 201) {
                        self.answer.upvote_count += 1;
                        self.answer.upvoted = true;
                        self.answer.downvoted = false;
                    }
                    if(response.status == 204) {
                        self.answer.upvote_count -= 1;
                        self.answer.upvoted = false;
                    }
                    self.requesting = false;
                })
                .catch(function(error) {
                    if(error.response.status == 401) {
                        document.location = url('login');
                    }
                    self.requesting = false;
            });
        },

        downvote() {
            const self = this;

            if(self.requesting) return;

            self.requesting = true;

            axios.post(this.getUrl('downvotes', this.answer), {})
                .then(function(response) {
                    if(response.status == 201) {
                        if(self.answer.upvoted)
                            self.answer.upvote_count -= 1;
                        self.answer.upvoted = false;
                        self.answer.downvoted = true;
                    }
                    if(response.status == 204) {
                        self.answer.downvoted = false;
                    }
                    self.requesting = false;
                })
                .catch(function(error) {
                    if(error.response.status == 401) {
                        document.location = url('login');
                    }
                    self.requesting = false;
            });
        },

        toggleComments() {
            this.showComments = !this.showComments;
        },

        incrementCommentCount() {
            this.commentCount++;
        },
    },
};
