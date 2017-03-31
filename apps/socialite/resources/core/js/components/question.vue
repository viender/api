<template>
	<div class="row u-margin--none question">
		<div class="col s12">
			<div class="card u-margin--none u-box-shadow--none" v-if="! (questionObj ? questionObj.downvoted : true)">
				<div class="card-content">
					<span class="card-title"><h4><a :href="$viender.helpers.getUrl('self_html', questionObj)">{{ questionObj ? questionObj.title : '' }}</a></h4></span>
				</div>
				<div class="card-action">
			    	<button class="btn btn-default" @click="showAnswerCreateModal()"
			    		v-if=" ! (questionObj ? questionObj.answered : true)">
			    		Answer
			    	</button>
					<a class="grey-text darken-3" v-else>
						Answered
					</a>
			    	<a @click="downvote">Downvote</a>
			    	<a @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
					<comment-list :comments-url="$viender.helpers.getUrl('comments', questionObj)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
				</div>
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
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
    props: ['question', 'url', 'showDetail'],

    data() {
    	return {
    		questionObj: null,
    		requesting: false,
    		upvoteCount: 0,
    		commentCount: 0,
    		showComments: false,
    		answerText: {
    			body: null
    		}
    	}
    },

    mounted() {
    	var _this = this;

    	if (_this.question) {
    		_this.questionObj = _this.question;
	    	_this.upvoteCount = _this.question.upvote_count;
	    	_this.commentCount = _this.question.comment_count;
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
            })
            .catch(function (error) {
                console.log(error);
            });
    	} else {
    		throw 'question and url not defined.';
    	}
    	
    },

    methods: {
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
