<template>
	<div class="row u-margin--none">
		<div class="col s12">
			<div class="card u-margin--none u-box-shadow--none">
				<div class="card-content" @click="showAnswer()">
					<span class="card-title">
						<h4><a :href="getUrl('self_html', answer.question)" @click="titleClickHandle($event)">{{ answer.question.title }}</a></h4>
					</span>
				  	<ul class="collection">
						<li class="collection-item avatar">
							<img :src="getUrl('avatar', answer.owner)" alt="" class="circle">
							<span class="card-title">
								{{ answer.owner.name }}
							</span>
						</li>
					</ul>
					<div class="answer-content">
						<div style="display: inline" v-html="answer.preview"></div>
						<a style="cursor: pointer" v-if="answer.preview.length >= 258">(more)</a>
					</div>
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
import * as types from '../store/mutation-types';

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
    	titleClickHandle(event) {
            event.stopPropagation();
        },

    	showAnswer() {
    		this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, true);
    		this.$store.dispatch('feed/setShowedAnswer', this.answer);
    	},

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
			        	if(_this.answer.upvoted)
			        		_this.answer.upvote_count -= 1;
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