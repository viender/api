<template>
	<div>
		<div style="padding-bottom: 20px;">
			<h4><a :href="question ? getUrl('self_html', question) : ''">{{ question ? question.title : '' }}</a></h4>
			<div>{{ question ? question.body : '' }}</div>
			<hr>
			<ul class="collection">
				<li class="collection-item avatar">
					<img :src="user ? getUrl('avatar', user) : ''" alt="" class="circle">
					<span class="card-title">
						{{ user ? user.name : '' }}
					</span>
				</li>
			</ul>
		</div>
		<div class="answer-create-editor" ref="editor"></div>
		<button class="btn btn-default" type="submit" @click="answer($event)">Submit</button>
	</div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {

	mixins: [require('viender_core/js/mixins/urlHelper')],

	data() {
		return {
			requesting: false,
			user: null
		}
	},

	created() {
		var _this = this;

		document.addEventListener('userFetched', function () {
		    _this.user = window.treasure.user;
		});
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

		this.$store.commit('editor/' + types.SET_EDITOR_ELEMENT, $(_this.$refs.editor));
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
				        _this.$store.commit('questionList/' + types.SET_AS_ANSWERED, _this.question);
				        $(_this.$refs.editor).summernote('code', '');
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
