<template>
	<div  class="comment-container">
	    <div class="comment-heading">
	        <div class="row">
                <!-- Avatar -->
                <div class="avatar-container col-xs-1">
                    <img :src="getUrl('avatar', comment.owner)" alt="" class="avatar-comment img-fluid img-circle">
                </div>
                
                <!-- commenter Bio -->
                <div class="col-xs-11">
                    <p class=""><strong><a class="profile-link" :href="url('users/' + comment.owner.login)">{{ comment.owner.name }}</a></strong></p>
                </div>
            </div>
	    </div>
	    <div class="comment-body row">
	    	<div class="col-xs-11 col-xs-offset-1">
	        	{{ comment.body }}
	        </div>
	    </div>
	    <div class="comment-footer row">
	    	<div class="col-xs-11 col-xs-offset-1">
		    	<div class="col-xs-4"><button class="btn btn-link" @click="upvote">Upvote | {{ upvoteCount }}</button></div>
		    	<div class="col-xs-4"><a class="btn btn-link" @click="downvote">Downvote</a></div>
		    	<div class="col-xs-4"><a class="btn btn-link" @click="toggleComments()">Comments <span>({{ commentCount }})</span></a></div>
		    </div>
	    </div>
	    <div class="panel-footer row" v-if="showComments">
	    	<div class="col-xs-11 col-xs-offset-1">
		    	<comment-list :comments-url="getUrl('comments', comment)" @comment-posted="updateCommentCount()"></comment-list>
		    </div>
	    </div>
	</div>
</template>

<script>
export default {
	props: ['comment'],

    mixins: [require('../mixins/urlHelper')],

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

<style>
	.comment-container {
		padding-top: 20px;
	}

	.comment-body {
		padding-bottom: 18px;
	}

	.avatar-container {
		padding-right: 0;
	}

	.avatar-comment {
		width: 25px;
	}

	.panel-footer {
		border-top: none;
	}
</style>