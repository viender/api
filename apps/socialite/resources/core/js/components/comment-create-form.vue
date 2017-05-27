<template>
    <form method="POST" :action="$viender.helpers.getUrl('comments', commentable)" class="commentCreateForm">
        <div class="input-field">
            <textarea name="body" id="body" class="materialize-textarea" cols="30" rows="1" v-model="formData.body"></textarea>
            <label for="body">Comment</label>
            <button class="btn waves-effect waves-light commentCreateForm-submitButton" type="submit" name="action" @click="postComment($event)">
                Comment
            </button>
        </div>
        <!-- <input type="text" name="body" v-model="formData.body" class="commentCreateForm-textField"> -->
    </form>
</template>

<script>
import Comment from 'viender_socialite/core/js/models/comment';

export default {
    props: ['commentable'],

    data() {
        return {
            requesting: false,
            formData: {
                body: null,
            },
        };
    },

    methods: {
        postComment(event) {
            const self = this;

            if(event) event.preventDefault();

            self.commentable.comment(this.formData)
            .then((comment) => {
                if(comment.commentable_type === 'Comment') {
                    this.commentable.comments.push(new Comment(comment));
                } else {
                    this.commentable.comments.unshift(new Comment(comment));
                }
                self.formData.body = null;
                self.$emit('comment-posted');
                self.ga('create', 'Comment Create');
            });
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
