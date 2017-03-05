<template>
	<li class="collection-item avatar avatar--small u-border--none">
		<img :src="getUrl('avatar', comment.owner)" alt="" class="u-dimension--small circle">
		<span class="title">
			<strong>
				<a class="profile-link" :href="url('users/' + comment.owner.login)">{{ comment.owner.name }}</a>
			</strong>
		</span>
		<p>{{ comment.body }}</p>
		<div class="card-action u-border--only-bottom">
			<a @click="upvote">Upvote | {{ upvoteCount }}</a>
			<a @click="downvote">Downvote</a>
			<a @click="toggleComments()">Comments <span>({{ commentCount }})</span></a>
		</div>
		 <comment-list :comments-url="getUrl('comments', comment)" @comment-posted="updateCommentCount()" v-if="showComments"></comment-list> 
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

			axios.post(this.getUrl('downvotes', this.comment), {})
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

    	updateCommentCount() {
    		this.commentCount++;
    	}
    }

}
</script>