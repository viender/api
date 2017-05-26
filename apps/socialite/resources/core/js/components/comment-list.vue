<template>
    <div class="commentList">
        <div class="commentList-commentForm">
            <comment-create-form :commentable-comments-url="commentsUrl" @comment-posted="addComment($event.data)"></comment-create-form>
        </div>

        <div class="commentList-comments">
            <ul class="collection u-border--none">
                <li v-for="comment in comments">
                    <comment :comment="comment"></comment>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: ['commentsUrl'],

    data() {
        return {
            comments: [],
            requesting: false,
            page: 1,
        };
    },

    mounted() {
        this.fetchData();

        const commentTextArea = $('.commentList .materialize-textarea');

        commentTextArea.focus(function focus() {
            $('.navbar-mobile-menus').addClass('hidden');
        });

        commentTextArea.blur(function blur() {
            $('.navbar-mobile-menus').removeClass('hidden');
        });
    },

    methods: {
        fetchData() {
            const self = this;

            if(self.requesting) return;

            self.requesting = true;

            axios.get(self.commentsUrl, {
                params: {
                    with: ['owner'],
                    page: self.page,
                },
            })
            .then((response) => {
                self.comments = self.comments.concat(response.data.data);
                self.page++;
                self.requesting = false;
            })
            .catch((error) => {
                console.log(error);
                self.requesting = false;
            });
        },

        addComment(comment) {
            if(comment.commentable_type === 'Comment') {
                this.comments.push(comment);
            } else {
                this.comments.unshift(comment);
            }

            this.$emit('comment-posted');
        },
    },
};
</script>
