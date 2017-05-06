<template>
    <div class="answerCreateForm">
        <div style="padding-bottom: 20px;">
            <h4 class="answerCreateForm-question"><a :href="question ? getUrl('self_html', question) : ''">{{ question ? question.title : '' }}</a></h4>
            <div :class="showQuestionDetail ? 'answerCreateForm-questionDetail' : 'answerCreateForm-questionDetail shrinked'" @click="showQuestionDetail = !showQuestionDetail">
                {{ question ? question.body : '' }}
            </div>
            <hr>
            <ul class="collection">
                <li class="collection-item avatar">
                    <img :src="$viender.treasure.user ? getUrl('avatar', $viender.treasure.user) : ''" alt="" class="circle">
                    <span class="card-title">
                        {{ $viender.treasure.user ? $viender.treasure.user.name : '' }}
                    </span>
                </li>
            </ul>
        </div>
        <div class="answer-create-editor" ref="editor"></div>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';

export default {

    mixins: [require('viender_core/js/mixins/urlHelper')],

    data() {
        return {
            requesting: false,
            showQuestionDetail: false,
        };
    },

    computed: {
        content() {
            return this.$store.state.editor.content;
        },

        question() {
            return this.$store.state.editor.question;
        },
    },

    watch: {
        question() {
            this.showQuestionDetail = false;
        },
    },

    mounted() {
        let self = this;

        let popOver = document.getElementsByClassName('note-popover');

        for (let i = 0; i < popOver.length; i++) {
            let p = popOver[i];
            p.parentNode.removeChild(p);
        }

        $(document).ready(function() {
            $(self.$refs.editor).summernote({
                minHeight: 400,
                toolbar: [
                    ['style', ['bold', 'italic']],
                    ['para', ['ul', 'ol']],
                    ['insert', ['link', 'picture']],
                ],
                callbacks: {
                    onChange: function(contents, $editable) {
                        self.$store.commit('editor/' + types.UPDATE_EDITOR_CONTENT, contents);
                        self.$emit('on-change', contents);
                    },
                },
            });
        });

        this.$store.commit('editor/' + types.SET_EDITOR_ELEMENT, $(self.$refs.editor));
    },

    methods: {
        answer(event) {
            let self = this;

            if(event) event.preventDefault();

            if(self.requesting) return;

            if( ! self.content.body) return;

            self.requesting = true;

            axios.post(this.getUrl('answers', this.question) + '?with=owner', self.content)
                .then(function(response) {
                    if(response.status == 200) {
                        self.$store.commit('feed/addAnswer', response.data);
                        self.$emit('answer-posted', response.data);
                        self.$store.commit('editor/' + types.UPDATE_EDITOR_CONTENT, null);
                        self.$store.commit('questionList/' + types.SET_AS_ANSWERED, self.question);
                        $(self.$refs.editor).summernote('code', '');
                    }
                    self.requesting = false;
                })
                .catch(function(error) {
                    if(error.response) {
                        if(error.response.status == 401) {
                            document.location = url('login');
                        }
                    }
                    self.requesting = false;
            });
        },

        toggleQuestionDetail() {
            this.showQuestionDetail = ! this.showQuestionDetail;
        },
    },
};
</script>
