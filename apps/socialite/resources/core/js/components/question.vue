<template>
	<div class="row u-margin--none">
		<div class="col s12">
			<div class="card u-margin--none u-box-shadow--none">
				<div class="card-content">
					<span class="card-title"><h4><a :href="getUrl('self_html', question)">{{ question.title }}</a></h4></span>
				</div>
				<div class="card-action u-border--only-bottom" v-if=" ! question.answered">
			    	<button class="btn btn-default" @click="answer()">Answer</button>
			    	<a @click="downvote">Downvote</a>
			    	<a @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
					<comment-list :comments-url="getUrl('comments', question)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
				</div>
				<div class="card-action u-border--only-bottom" v-else>
					Answered
				</div>
			</div>
		</div>
	</div>
</template>

<script>
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
        	answer() {
        		this.$emit('btn-answer-clicked', { question: this.question, answerText: this.answerText});
    //     		var _this = this;

    //     		if(_this.requesting) return;

    //     		_this.requesting = true;

				// axios.post(this.getUrl('upvotes', this.question), {})
				// 	.then(function (response) {
				// 	    if(response.status == 201) {
				// 	        _this.upvoteCount += 1;
				// 	    }
				// 	    if(response.status == 204) {
				// 	        _this.upvoteCount -= 1;
				// 	    }
				// 	    _this.requesting = false;
				// 	})
				// 	.catch(function (error) {
				// 	    if(error.response.status == 401) {
				// 	    	document.location = url('login');
				// 	    }
				// 	    _this.requesting = false;
				// });
        	},

        	downvote() {
        		var _this = this;

        		if(_this.requesting) return;

        		_this.requesting = true;

				axios.post(this.getUrl('downvotes', this.question), {})
					.then(function (response) {
					    if(response.status == 201) {
					        if(response.status == 201) {
					        	_this.upvoteCount -= 1;
					        }
					        if(response.status == 204) {
						        _this.upvoteCount += 1;
						    }
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