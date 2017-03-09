<template>
	<li class="collection-item avatar avatar--small u-border--none">
		<img :src="getUrl('avatar', comment.owner)" alt="" class="u-dimension--small circle">
		<span class="title">
			<strong>
				<a class="profile-link" :href="url('users/' + comment.owner.login)">{{ comment.owner.name }}</a>
			</strong>
		</span>
		<p style="padding-right: 5px;">{{ comment.body }}</p>
		<div class="card-action u-border--only-bottom">
	    	<span style="cursor: pointer;" @click="upvote">
		    	<span style="padding-right: 5px;">{{ upvoteCount }}</span>
		    	<a :style="! comment.upvoted ? 'color: grey;' : ''" class="material-icons dp48">thumb_up</a>
	    	</span>
	    	<a :style="! comment.downvoted ? 'color: grey;' : ''" @click="downvote" class="material-icons dp48">thumb_down</a>
	    	<a style="color: grey;" @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
			<comment-list :comments-url="getUrl('comments', comment)" @comment-posted="incrementCommentCount()" v-if="showComments"></comment-list>
		</div>
	</li>
</template>

<script>
export default {
	props: ['comment'],

    mixins: [require('viender_core/js/mixins/urlHelper')],

    data() {
    	return {
    		requesting: false,
    		upvoteCount: 0,
    		commentCount: 0,
    		showComments: false,
    	}
    },

    mounted() {
    	this.upvoteCount = this.comment.upvote_count;
    	this.commentCount = this.comment.comment_count;
    },

    methods: {
    	upvote() {
    		var _this = this;

    		if(_this.requesting) return;

    		_this.requesting = true;

			axios.post(this.getUrl('upvotes', this.comment), {})
				.then(function (response) {
				    if(response.status == 201) {
				        _this.upvoteCount += 1;
				    	_this.comment.upvoted = true;
				    	_this.comment.downvoted = false;
				    }
				    if(response.status == 204) {
				        _this.upvoteCount -= 1;
				    	_this.comment.upvoted = false;
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

			axios.post(this.getUrl('downvotes', this.comment), {})
				.then(function (response) {
			        if(response.status == 201) {
			        	if(_this.comment.upvoted)
			        		_this.upvoteCount -= 1;
				    	_this.comment.upvoted = false;
				    	_this.comment.downvoted = true;
			        }
			        if(response.status == 204) {
				    	_this.comment.downvoted = false;
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

    	updateCommentCount() {
    		this.commentCount++;
    	}
    }

}
</script>