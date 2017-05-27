<template>
    <div class="commentList">
        <div class="commentList-commentForm">
            <comment-create-form :commentable="commentable" @comment-posted="emitCommentPosted($event)"></comment-create-form>
        </div>

        <div class="commentList-comments">
            <ul class="collection u-border--none">
                <li v-for="comment in commentable.comments">
                    <comment :comment="comment"></comment>
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

        self.commentable.fetchComments()
        .then((comments) => {
            comments.forEach((comment) => {
                self.commentable.comments.push(new Comment(comment));
            });
        });

        const commentTextArea = $('.commentList .materialize-textarea');

        commentTextArea.focus(function focus() {
            $('.navbar-mobile-menus').addClass('hidden');
        });

        commentTextArea.blur(function blur() {
            $('.navbar-mobile-menus').removeClass('hidden');
        });
    },

    methods: {
        emitCommentPosted(comment) {
            this.$emit('comment-posted');
        },
    },
};
</script>
