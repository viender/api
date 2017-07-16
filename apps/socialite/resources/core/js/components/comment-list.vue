<template>
    <div class="commentList">
        <div class="commentList-commentForm">
            <comment-create-form :commentable="commentable" @comment-posted="emitCommentPosted($event)" v-if="$viender.user"></comment-create-form>
        </div>

        <div class="commentList-comments">
            <ul class="collection u-border--none">
                <li v-for="comment in comments">
                    <comment :comment="comment"></comment>
                </li>
                <li class="commentList-comments-action" @click="fetchComments()" v-if="commentable.commentsPage <= commentable.commentsTotalPages">
                    <span v-show="!commentable.requestingFetchComments">Load More Comments</span>
                    <div class="progress" v-show="commentable.requestingFetchComments">
                        <div class="indeterminate"></div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
import Comment from 'viender_socialite/core/js/models/comment';

export default {
    props: ['commentable'],

    mounted() {
        const self = this;

        self.fetchComments();

        const commentTextArea = $('.commentList .materialize-textarea');

        commentTextArea.focus(function focus() {
            $('.navbar-mobile-menus').addClass('hidden');
        });

        commentTextArea.blur(function blur() {
            $('.navbar-mobile-menus').removeClass('hidden');
        });
    },

    computed: {
        comments() {
            return this.commentable.comments;
        },
    },

    methods: {
        emitCommentPosted(comment) {
            this.$emit('comment-posted');
        },

        fetchComments() {
            const self = this;

            self.commentable.fetchComments()
            .then((comments) => {
                comments.forEach((comment) => {
                    self.commentable.comments.push(new Comment(comment));
                });

                self.$forceUpdate();

                if (window.ga) {
                    ga('send', {
                        hitType: 'event',
                        eventCategory: 'Comments',
                        eventAction: `page_${this.page}`,
                        eventValue: 1,
                        eventLabel: 'Comment List Page Reach',
                    });
                }
            });
        },
    },
};
</script>

<style>
    .commentList-comments-action {
        font-weight: 600;
        color: #039be5;
        text-align: center;
    }
</style>
