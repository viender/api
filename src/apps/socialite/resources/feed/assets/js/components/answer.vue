<template>
	<div class="row u-margin--none">
		<div class="col s12">
			<div class="card u-margin--none u-box-shadow--none">
				<div class="card-content">
					<!-- <img :src="getUrl('avatar', answer.owner)" alt="" class="circle"> -->
					<span class="card-title"><h4><a :href="url(answer.question.slug)">{{ answer.question.title }}</a></h4></span>
					<p>{{ answer.body }}</p>
				</div>
				<div class="card-action u-border--only-bottom">
			    	<button class="btn btn-default" @click="upvote">Upvote | {{ upvoteCount }}</button>
			    	<a @click="downvote">Downvote</a>
			    	<a @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
					<comment-list :comments-url="getUrl('comments', answer)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
        props: ['answer'],

        mixins: [require('../mixins/urlHelper')],

        data() {
        	return {
        		requesting: false,
        		upvoteCount: 0,
        		commentCount: 0,
        		showComments: false
        	}
        },

        mounted() {
        	this.upvoteCount = this.answer.upvote_count;
        	this.commentCount = this.answer.comment_count;
        },

        methods: {
        	upvote() {
        		var _this = this;

        		if(_this.requesting) return;

        		_this.requesting = true;

				axios.post(this.getUrl('upvotes', this.answer), {})
					.then(function (response) {
					    if(response.status == 201) {
					        _this.upvoteCount += 1;
					    }
					    if(response.status == 204) {
					        _this.upvoteCount -= 1;
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

        	downvote() {
        		var _this = this;

        		if(_this.requesting) return;

        		_this.requesting = true;

				axios.post(this.getUrl('downvotes', this.answer), {})
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