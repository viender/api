<template>
	<div class="row u-margin--none">
		<div class="col s12">
			<div class="card u-margin--none u-box-shadow--none" v-if="answer">
				<div class="card-content">
					<span class="card-title">
						<h4><a :href="getUrl('self_html', answer.question)">{{ answer.question.title }}</a></h4>
					</span>
					<hr style="margin-bottom: 30px;">
				  	<ul class="collection">
						<li class="collection-item avatar">
							<img :src="getUrl('avatar', answer.owner)" alt="" class="circle">
							<a :href="getUrl('self_html', answer.owner)">
								<span class="card-title">{{ answer.owner.name }}</span>
							</a>
						</li>
					</ul>
					<div class="answer-content" v-html="answer.body"></div>
				</div>
				<div class="card-action u-border--only-bottom">
			    	<span style="cursor: pointer;" @click="upvote">
				    	<span style="padding-right: 5px;">{{ upvoteCount }}</span>
				    	<a :style="! answer.upvoted ? 'color: grey;' : ''" class="material-icons dp48">thumb_up</a>
			    	</span>
			    	<a :style="! answer.downvoted ? 'color: grey;' : ''" @click="downvote" class="material-icons dp48">thumb_down</a>
			    	<a style="color: grey;" @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
					<comment-list :comments-url="getUrl('comments', answer)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    props: ['answer'],

    mixins: [require('viender_core/js/mixins/urlHelper')],

    data() {
    	return {
    		requesting: false,
    		showComments: false
    	}
    },

    computed: {
    	upvoteCount() {
    		return this.answer ? this.answer.upvote_count : 0;
    	},

    	commentCount() {
    		return this.answer ? this.answer.comment_count : 0;
    	}
    },

    methods: {
    	upvote() {
    		var _this = this;

    		if(_this.requesting) return;

    		_this.requesting = true;

			axios.post(this.getUrl('upvotes', this.answer), {})
				.then(function (response) {
				    if(response.status == 201) {
				        _this.answer.upvote_count += 1;
				    	_this.answer.upvoted = true;
				    	_this.answer.downvoted = false;
				    }
				    if(response.status == 204) {
				        _this.answer.upvote_count -= 1;
				    	_this.answer.upvoted = false;
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
			        	if(_this.answer.upvoted) _this.answer.upvote_count -= 1;
				    	_this.answer.upvoted = false;
				    	_this.answer.downvoted = true;
			        }
			        if(response.status == 204) {
				    	_this.answer.downvoted = false;
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
