<template>
	<form method="POST" :action="commentableCommentsUrl" class="commentCreateForm">
		<input type="text" name="body" v-model="formData.body" class="commentCreateForm-textField">
		<button class="btn waves-effect waves-light commentCreateForm-submitButton" type="submit" name="action" @click="postComment($event)">
			Comment
		</button>
	</form>
</template>

<script>
export default {
	props: ['commentableCommentsUrl'],

	data() {
		return {
			requesting: false,
			formData: {
				body: null,
			}
		}
	},

	methods: {
		postComment(event) {
			var _this = this;

			if(event) event.preventDefault();

			if(_this.requesting) return;

			if( ! _this.formData.body) return;

			_this.requesting = true;

			axios.post(this.commentableCommentsUrl + '?with=owner', this.formData)
				.then(function (response) {
				    if(response.status == 200) {
				        _this.$emit('comment-posted', response);
				        _this.formData.body = null;
				    }
				    _this.requesting = false;
				})
				.catch(function (error) {
				    if(error.response.status == 401) {
				    	document.location = url('login');
				    }
				    _this.requesting = false;
			});
		}
	}
}
</script>
