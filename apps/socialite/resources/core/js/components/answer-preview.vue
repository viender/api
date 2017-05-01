<template>
    <div>
        <div class="row u-margin--none answer">
            <div class="col s12">
                <div class="card u-margin--none u-box-shadow--none">
                    <div class="card-content" @click="showAnswer()">
                        <span class="card-title" v-if="showQuestion">
                            <h4><a :href="getUrl('self_html', answer.question)" @click="stopPropagation($event)">{{ answer.question.title }}</a></h4>
                        </span>
                        <ul class="collection">
                            <li class="collection-item avatar">
                                <img :src="getUrl('avatar', answer.owner)" alt="" class="circle">
                                <a :href="getUrl('self_html', answer.owner)" @click="stopPropagation($event)">
                                    <span class="card-title">{{ answer.owner.name }}</span>
                                </a>
                            </li>
                        </ul>
                        <div class="answer-content">
                            <div style="display: inline" v-html="answer.preview"></div>
                            <a style="cursor: pointer" v-if="answer.preview.length >= 258">(more)</a>
                        </div>
                    </div>
                    <div class="card-action">
                        <ul class="card-action-list">
                            <li class="card-action-item">
                                <span style="cursor: pointer;" @click="upvote">
                                    <span style="padding-right: 5px;">{{ upvoteCount }}</span>
                                    <a class="material-icons dp48" :class="answer.upvoted ? 'active' : ''">thumb_up</a>
                                </span>
                            </li>
                            <li class="card-action-item">
                                <a @click="downvote" class="material-icons dp48" :class="answer.downvoted ? 'active' : ''">thumb_down</a>
                            </li>
                            <li class="card-action-item">
                                <a @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
                            </li>
                            <li class="card-action-item--right" @click="$event.stopPropagation(); showPopup = !showPopup;">
                                <a><i class="fa fa-ellipsis-v" aria-hidden="true"></i></a>
                                <div class="card-action-popup-container" :class="showPopup ? 'active' : ''" @click="$event.stopPropagation()">
                                    <div class="card-action-popup-content">
                                        <ul class="card-action-popup-list">
                                            <li class="card-action-popup-item" v-if="answer.owner.id === $viender.user.id">
                                                <a>Delete</a>
                                            </li>
                                            <li class="card-action-popup-item" v-if="answer.owner.id !== $viender.user.id">
                                                <a>Report</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <comment-list :comments-url="getUrl('comments', answer)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
    </div>
</template>

<script>
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

    mixins: [require('viender_core/js/mixins/urlHelper')],

    data() {
        return {
            requesting: false,
            showComments: false,
            showPopup: false,
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

    created() {
        const self = this;

        $('body').click(() => {
            self.showPopup = false;
        });
    },

    methods: {
        stopPropagation(event) {
            event.stopPropagation();
        },

        showAnswer() {
            this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, true);
            this.$store.dispatch('feed/setShowedAnswer', this.answer);
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
</script>
