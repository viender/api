<template>
    <div class="question">
        <div class="card question-container" v-if="! (questionObj ? questionObj.downvoted : true)">
            <a :href="$viender.helpers.getUrl('self_html', questionObj)"><h2 class="card-title">{{ questionObj ? questionObj.title : '' }}</h2></a>

            <div v-if="questionObj ? !questionObj.deleted_at : false" :class="expandQuestionDetail ? 'answerCreateForm-questionDetail' : 'answerCreateForm-questionDetail shrinked'" @click="toggleQuestionDetail()">
                {{ questionObj ? questionObj.body : '' }}
            </div>

            <div v-else :class="expandQuestionDetail ? 'answerCreateForm-questionDetail' : 'answerCreateForm-questionDetail shrinked'">
                <span>Deleted.</span>
            </div>

            <div class="card-action" v-if="questionObj ? !questionObj.deleted_at : false">
                <ul class="card-action-list">
                    <li class="card-action-item">
                        <button class="btn btn-default" @click="showAnswerCreateModal()"
                            v-if=" ! (questionObj ? questionObj.answered : true)">
                            Answer
                        </button>
                        <a class="grey-text darken-3" v-else>
                            Answered
                        </a>
                    </li>
                    <li class="card-action-item">
                        <a @click="downvote">Downvote</a>
                    </li>
                    <li class="card-action-item">
                        <a @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
                    </li>
                    <li class="card-action-item--right">
                        <more-menu :model="questionObj || null"></more-menu>
                    </li>
                </ul>
            </div>

            <comment-list :commentable="questionObj" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
        </div>

        <div class="card u-margin--none u-box-shadow--none" v-if="questionObj ? questionObj.downvoted : false">
            <div class="card-content">
                <strong>You downvoted this question</strong>
                <p>Downvoting low-quality content improves Viender for everyone.</p>
            </div>
            <div class="card-action">
                <a @click="downvote">Undo</a>
                <!-- <a @click="downvote">Report</a> -->
            </div>
        </div>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import Question from 'viender_socialite/core/js/models/question';

export default {
    props: ['question', 'url', 'showDetail'],

    data() {
        return {
            expandQuestionDetail: false,
            questionObj: null,
            requesting: false,
            upvoteCount: 0,
            commentCount: 0,
            showComments: false,
            staticPreloaders: document.getElementsByClassName('question-static-preloader'),
            answerText: {
                body: null,
            },
        };
    },

    mounted() {
        const self = this;

        // if the argument is an question object, use it.
        // if the argument is an url, feth question from there.
        if (self.question) {
            self.questionObj = self.question;
            self.upvoteCount = self.question.upvote_count;
            self.commentCount = self.question.comment_count;
            self.hideStaticPreloaders();
        } else if (self.url) {
            const url = self.url;

            axios.get(url, {
                params: {
                    with: ['owner'],
                },
            })
            .then(function(response) {
                self.questionObj = new Question(response.data);
                self.upvoteCount = response.data.upvote_count;
                self.commentCount = response.data.comment_count;
                self.hideStaticPreloaders();
            })
            .catch(function(error) {
                console.log(error);
            });
        } else {
            console.error('question and url not defined.');
        }

        for (let i = 0; i < this.staticPreloaders.length; i++) {
            this.staticPreloaders[i].style.borderBottom = '0';
        }
    },

    methods: {
        hideStaticPreloaders() {
            for (let i = 0; i < this.staticPreloaders.length; i++) {
                this.staticPreloaders[i].style.display = 'none';
            }
        },

        showAnswerCreateModal() {
            this.$store.commit('questionList/' + types.SET_SHOW_ANSWER_CREATE_MODAL, true);
            this.$store.dispatch('editor/setQuestion', {
                question: this.questionObj,
                answerText: this.answerText,
            });
            this.ga('show_answer_form', 'Question Show Answer Form');
        },

        downvote() {
            const self = this;

            self.questionObj.downvote()
            .then((response) => {
                self.ga('downvote', 'Questions Downvoted');
            });
        },

        toggleComments() {
            this.showComments = !this.showComments;
            this.ga('toggle_comments', 'Question Toggle Comments');
        },

        toggleQuestionDetail() {
            this.expandQuestionDetail = !this.expandQuestionDetail;
            this.ga('toggle_question_detail', 'Question Toggle Detail');
        },

        incrementCommentCount() {
            this.commentCount++;
        },

        ga(eventAction, eventLabel = '') {
            if (!window.ga) return;

            ga('send', {
                hitType: 'event',
                eventCategory: 'Questions',
                eventAction: eventAction,
                eventLabel: eventLabel,
            });
        },
    },
};
</script>
