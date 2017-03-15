<template>
	<div class="row u-margin--none">
		<div class="col s12">
			<div class="card u-margin--none u-box-shadow--none" v-if="! question.downvoted">
				<div class="card-content">
					<span class="card-title"><h4><a :href="getUrl('self_html', question)">{{ question.title }}</a></h4></span>
				</div>
				<div class="card-action u-border--only-bottom" v-if=" ! question.answered">
			    	<button class="btn btn-default" @click="showAnswerCreateModal()">Answer</button>
			    	<a @click="downvote">Downvote</a>
			    	<a @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
					<comment-list :comments-url="getUrl('comments', question)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
				</div>
				<div class="card-action u-border--only-bottom" v-else>
					Answered
				</div>
			</div>
			<div class="card u-margin--none u-box-shadow--none" v-else>
				<div class="card-content">
					<strong>You downvoted this question</strong>
					<p>Downvoting low-quality content improves Viender for everyone.</p>
				</div>
				<div class="card-action u-border--only-bottom" v-if=" ! question.answered">
			    	<a @click="downvote">Undo</a>
			    	<a @click="downvote">Report</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {
    props: ['question'],

    mixins: [require('viender_core/js/mixins/urlHelper')],

    data() {
    	return {
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
    	this.upvoteCount = this.question.upvote_count;
    	this.commentCount = this.question.comment_count;
    },

    methods: {
    	showAnswerCreateModal() {
    		this.$store.commit('questionList/' + types.SET_SHOW_ANSWER_CREATE_MODAL, true);
    		this.$store.dispatch('editor/setQuestion', {
    			question: this.question,
    			answerText: this.answerText
    		});
    	},

    	downvote() {
    		var _this = this;

    		if(_this.requesting) return;

    		_this.requesting = true;

			axios.post(this.getUrl('downvotes', _this.question), {})
				.then(function (response) {
			        if(response.status == 201) {
				    	_this.question.downvoted = true;
			        }
			        if(response.status == 204) {
				    	_this.question.downvoted = false;
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