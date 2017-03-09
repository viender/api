<template>
	<div>
		<div ref="editor"></div>
		<button class="btn btn-default" type="submit" @click="answer($event)">Submit</button>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {

	mixins: [require('viender_core/js/mixins/urlHelper')],

	data() {
		return {
			requesting: false
		}
	},

    computed: {
        content() {
            return this.$store.state.editor.content;
        },

        question() {
            return this.$store.state.editor.question;
        }
    },

	mounted() {
		var _this = this;

		$(document).ready(function() {
			$(_this.$refs.editor).summernote({
				height: 400,
				minHeight: 400,
				maxHeight: 400,
				toolbar: [
					['style', ['bold', 'italic']],
					['para', ['ul', 'ol']],
					['insert', ['link', 'picture']],
				],
				callbacks: {
					onChange: function(contents, $editable) {
					    _this.$store.commit('editor/' + types.UPDATE_EDITOR_CONTENT, contents);
					    _this.$emit('on-change', contents);
					}
				}
			});
		});
	},

	methods: {
		answer(event) {
			var _this = this;

			if(event) event.preventDefault();

			if(_this.requesting) return;

			if( ! _this.content.body) return;

			_this.requesting = true;

			axios.post(this.getUrl('answers', this.question) + '?with=owner', _this.content)
				.then(function (response) {
				    if(response.status == 200) {
				        _this.$emit('answer-posted', response);
				        _this.$store.commit('editor/' + types.UPDATE_EDITOR_CONTENT, null);
				        _this.$store.commit('answer/' + types.SET_AS_ANSWERED, _this.question);
				        $(_this.$refs.editor).summernote('code', '');
				        console.log(_this.getUrl('self_html', response.data));
				        // document.location = _this.getUrl('self_html', response.data);
				    }
				    _this.requesting = false;
				})
				.catch(function (error) {
					if(error.response) {
					    if(error.response.status == 401) {
					    	document.location = url('login');
					    }
					}
				    _this.requesting = false;
			});
		}
	}
}
</script>