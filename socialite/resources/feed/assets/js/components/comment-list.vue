<template>
	<div>
        <comment-create-form :commentable-comments-url="commentsUrl" @comment-posted="addComment($event.data)"></comment-create-form>
		<comment v-for="comment in comments" :comment="comment"></comment>
	</div>
</template>

<script>
export default {
	props: ['commentsUrl'],

	data() {
		return {
			comments: [],
			requesting: false,
			page: 1
		}
	},

    mounted() {
        this.fetchData();
    },

    methods: {
        fetchData() {
            var _this = this;

        	if(_this.requesting) return;

        	_this.requesting = true;

            axios.get(_this.commentsUrl, {
                params: {
                    with: ['owner'],
                    page: _this.page
                }
            })
            .then(function (response) {
                _this.comments = _this.comments.concat(response.data.data);
                _this.page++;
                _this.requesting = false
            })
            .catch(function (error) {
                console.log(error);
                _this.requesting = false
            });
        },

        addComment(comment) {
            this.comments.push(comment);
            this.$emit('comment-posted');
        }
    }
}
</script>