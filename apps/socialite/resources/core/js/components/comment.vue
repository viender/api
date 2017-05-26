<template>
        <div class="comment">
                <img :src="getUrl('avatar', comment.owner)" alt="" class="u-dimension--small circle comment-avatar">
                <span class="comment-owner">
                    <strong>
                        <a class="profile-link" :href="$viender.helpers.getUrl('self_html', comment.owner)">{{ comment.owner.name }}</a>
                    </strong>
                </span>
                <div class="comment-body">
                        <p v-if="!comment.deleted_at">{{ comment.body }}</p>
                        <p v-else>Deleted.</p>
                </div>
                <div class="comment-action" v-if="!comment.deleted_at">
                        <ul class="card-action-list">
                                <li class="card-action-item">
                                        <span class="comment-action--item" @click="upvote">
                                            <span>{{ upvoteCount }}</span>
                                            <a class="material-icons dp48" :class="comment.upvoted ? 'active' : ''">thumb_up</a>
                                        </span>
                                </li>
                                <li class="card-action-item">
                                        <a class="comment-action--item material-icons dp48" :class="comment.downvoted ? 'active' : ''" @click="downvote">thumb_down</a>
                                </li>
                                <li class="card-action-item" v-if="comment.commentable_type !== 'Comment'">
                                        <a class="comment-action--item" @click="toggleComments()">Replies <span>({{ commentCount }})</span></a>
                                </li>
                                <li class="card-action-item--right">
                                        <more-menu :model="comment"></more-menu>
                                </li>
                        </ul>
                    <comment-list :comments-url="getUrl('comments', comment)" @comment-posted="incrementCommentCount()" v-if="showComments && comment.commentable_type !== 'Comment'"></comment-list>
                </div>
        </div>
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
        };
    },

    mounted() {
        this.upvoteCount = this.comment.upvote_count;
        this.commentCount = this.comment.comment_count;
    },

    methods: {
        upvote() {
            const self = this;

            if (self.requesting) return;

            self.requesting = true;

            axios.post(this.getUrl('upvotes', this.comment), {})
            .then((response) => {
                if (response.status == 201) {
                    self.upvoteCount += 1;
                    self.comment.upvoted = true;
                    self.comment.downvoted = false;
                }
                if (response.status == 204) {
                    self.upvoteCount -= 1;
                    self.comment.upvoted = false;
                }
                this.ga('upvote', 'Comments Upvoted');
                self.requesting = false;
            })
            .catch((error) => {
                if (error.response.status == 401) {
                    document.location = url('login');
                }
                self.requesting = false;
            });
        },

        downvote() {
            const self = this;

            if (self.requesting) return;

            self.requesting = true;

            axios.post(this.getUrl('downvotes', this.comment), {})
            .then((response) => {
                if (response.status == 201) {
                    if (self.comment.upvoted) self.upvoteCount -= 1;
                    self.comment.upvoted = false;
                    self.comment.downvoted = true;
                }
                if (response.status == 204) {
                    self.comment.downvoted = false;
                }
                this.ga('downvote', 'Comments Downvoted');
                self.requesting = false;
            })
            .catch((error) => {
                if (error.response.status == 401) {
                    document.location = url('login');
                }
                self.requesting = false;
            });
        },

        toggleComments() {
            this.showComments = !this.showComments;
            this.ga('toggle_comments', 'Comment Toggle Comments');
        },

        incrementCommentCount() {
            this.commentCount++;
        },

        ga(eventAction, eventLabel = '') {
            if (!window.ga) return;

            ga('send', {
                hitType: 'event',
                eventCategory: 'Comments',
                eventAction: eventAction,
                eventLabel: eventLabel,
            });
        },
    },
};
</script>
