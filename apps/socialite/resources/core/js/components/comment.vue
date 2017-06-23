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
                                            <span>{{ comment.upvote_count }}</span>
                                            <a class="material-icons dp48" :class="comment.upvoted ? 'active' : ''">thumb_up</a>
                                        </span>
                                </li>
                                <li class="card-action-item">
                                        <a class="comment-action--item material-icons dp48" :class="comment.downvoted ? 'active' : ''" @click="downvote">thumb_down</a>
                                </li>
                                <li class="card-action-item" v-if="comment.commentable_type !== 'Comment'">
                                        <a class="comment-action--item" @click="toggleComments()">Replies <span>({{ comment.comment_count }})</span></a>
                                </li>
                                <li class="card-action-item--right">
                                    <more-menu ref="moreMenu" :model="comment" v-if="$viender.treasure.client.type === 'desktop'">
                                    </more-menu>
                                    <more-menu-mobile ref="moreMenu" :model="comment" v-else>
                                    </more-menu-mobile>
                                </li>
                        </ul>
                    <comment-list :commentable="comment" @comment-posted="incrementCommentCount()" v-if="showComments && comment.commentable_type !== 'Comment'"></comment-list>
                </div>
        </div>
</template>

<script>
import moreMenuMobile from './more-menu-mobile';

export default {
    props: ['comment'],

    mixins: [require('viender_core/js/mixins/urlHelper')],

    components: {
        moreMenuMobile,
    },

    data() {
        return {
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

            self.comment.upvote()
            .then(() => {
                self.ga('upvote', 'Comments Upvoted');
            });
        },

        downvote() {
            const self = this;

            self.comment.downvote()
            .then(() => {
                this.ga('downvote', 'Comments Downvoted');
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
