<template>
	<div  class="answer-container">
	    <div class="answer-heading">
	        <strong><h4><a :href="'//api.viender.dev/questions/' + answer.question.slug">{{ answer.question.title }}</a></h4></strong>

	        <div class="row">
                <!-- Avatar -->
                <div class="avatar col-xs-2">
                    <img :src="getUrl('avatar', answer.owner)" alt="" class="img-fluid img-circle" style="width: 62px">
                </div>
                
                <!-- Answerer Bio -->
                <div class="author-bio col-xs-10">
                    <p class=""><strong><a class="profile-link" :href="url('users/' + answer.owner.login)">{{ answer.owner.name }}</a></strong>, Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
	    </div>
	    <div class="answer-body">
	        {{ answer.body }}
	    </div>
	    <div class="answer-footer row">
	    	<div class="col-xs-4"><button class="btn btn-default" @click="upvote">Upvote | {{ upvoteCount }}</button></div>
	    	<div class="col-xs-4"><a class="btn btn-link" @click="downvote">Downvote</a></div>
	    	<div class="col-xs-4"><a class="btn btn-link" @click="toggleComments()">Comments <span>({{ commentCount }})</span></a></div>
	    </div>
	    <div class="panel-footer" v-if="showComments">
	    	<comment-list :comments-url="getUrl('comments', answer)" @comment-posted="incrementCommentCount()"></comment-list>
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

<style>
	.avatar {
		padding-right: 0px;
		width: 14.666667%;
	}

	.author-bio {
		padding-left: 6px;
	}
</style>