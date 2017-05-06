<template>
	<div class="question">
		<div class="card question-container" v-if="! (questionObj ? questionObj.downvoted : true)">
			<a :href="$viender.helpers.getUrl('self_html', questionObj)"><h2 class="card-title">{{ questionObj ? questionObj.title : '' }}</h2></a>

            <p v-if="questionObj ? !questionObj.deleted_at : false" :class="expandQuestionDetail ? 'answerCreateForm-questionDetail' : 'answerCreateForm-questionDetail shrinked'" @click="expandQuestionDetail = !expandQuestionDetail">
                {{ questionObj ? questionObj.body : '' }}
            </p>

            <p v-else>
                Deleted.
            </p>

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
            <comment-list :comments-url="$viender.helpers.getUrl('comments', questionObj)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
		</div>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

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
                body: null
            }
    	}
    },

    mounted() {
    	var _this = this;

        // if the argument is an question object, use it.
        // if the argument is an url, feth question from there.
    	if (_this.question) {
    		_this.questionObj = _this.question;
	    	_this.upvoteCount = _this.question.upvote_count;
	    	_this.commentCount = _this.question.comment_count;
            _this.hideStaticPreloaders();
    	} else if (_this.url) {
    		var url = _this.url;

			axios.get(url, {
                params: {
                    with: ['owner'],
                }
            })
            .then(function (response) {
                _this.questionObj = response.data;
                _this.upvoteCount = response.data.upvote_count;
    			_this.commentCount = response.data.comment_count;
                _this.hideStaticPreloaders();
            })
            .catch(function (error) {
                console.log(error);
            });
    	} else {
    		throw 'question and url not defined.';
    	}

        for (var i = 0; i < this.staticPreloaders.length; i++) {
            this.staticPreloaders[i].style.borderBottom = '0';
        }
    },

    methods: {
        hideStaticPreloaders() {
            for (var i = 0; i < this.staticPreloaders.length; i++) {
                this.staticPreloaders[i].style.display = 'none';
            }
        },

    	showAnswerCreateModal() {
    		this.$store.commit('questionList/' + types.SET_SHOW_ANSWER_CREATE_MODAL, true);
    		this.$store.dispatch('editor/setQuestion', {
    			question: this.questionObj,
    			answerText: this.answerText
    		});
    	},

    	downvote() {
    		var _this = this;

    		if(_this.requesting) return;

    		_this.requesting = true;

			axios.post(this.$viender.helpers.getUrl('downvotes', _this.questionObj), {})
				.then(function (response) {
			        if(response.status == 201) {
				    	_this.questionObj.downvoted = true;
			        }
			        if(response.status == 204) {
				    	_this.questionObj.downvoted = false;
				    }
				    _this.requesting = false;
				})
				.catch(function (error) {
				    if(error.response.status == 401) {
				    	document.location = url('login');
				    }
				    _this.requesting = false;
			});
    	},

    	toggleComments() {
    		this.showComments = !this.showComments;
    	},

    	incrementCommentCount() {
    		this.commentCount++;
    	}
    }
}
</script>
