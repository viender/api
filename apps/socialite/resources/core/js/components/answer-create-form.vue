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
                        <span>
                            {{ $viender.user ? `${$viender.user.name}${selectedCredential ? ',' : ''}` : '' }}
                        </span>
                        <credential
                            v-if="selectedCredential"
                            :credential="selectedCredential">
                        </credential>
                        <br>
                        <a @click="showCredentialAddModal()">Edit Credential</a>
                    </span>
                </li>
            </ul>
        </div>
        <div class="answer-create-editor" ref="editor"></div>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import * as credentialTypes from 'viender_credential/core/js/store/mutation-types';
import credential from 'viender_credential/core/js/components/credential';

export default {

    mixins: [require('viender_core/js/mixins/urlHelper')],

    components: {
        credential,
    },

    data() {
        return {
            requesting: false,
            showQuestionDetail: false,
        };
    },

    computed: Object.assign(Vuex.mapState('credentials', [
        'selectedCredential',
    ]), {
        content() {
            return this.$store.state.editor.content;
        },

        question() {
            return this.$store.state.editor.question;
        },
    }),

    watch: {
        question() {
            this.showQuestionDetail = false;
        },

        selectedCredential() {
            this.$store.commit('editor/' + types.SET_CREDENTIAL_ID, {id: this.selectedCredential.id});
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
                        self.$store.commit('editor/' + types.UPDATE_EDITOR_CONTENT, {contents});
                        self.$emit('on-change', contents);

                        const userDataString = window.localStorage.getItem(self.$viender.user.login)
                            || `{"drafts": []}`;
                        const userData = JSON.parse(userDataString);
                        const answer = userData.drafts.find((a) => {
                            return a.questionId === self.question.id;
                        }) || null;

                        if (answer) {
                            answer.questionId = self.question.id;
                            answer.answer = contents;
                        } else {
                            userData.drafts.push({
                                questionId: self.question.id,
                                answer: contents,
                            });
                        }

                        window.localStorage.setItem(self.$viender.user.login, JSON.stringify(userData));
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

            axios.post(this.getUrl('answers', this.question) + '?with=owner', {
                body: self.content.body.contents,
                credential_id: self.selectedCredential.id,
            })
                .then(function(response) {
                    if(response.status == 200) {
                        if (self.$store.state.feed) {
                            self.$store.commit('feed/addAnswer', response.data);
                        }
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

            this.ga('create', 'Answer Create');
        },

        toggleQuestionDetail() {
            this.showQuestionDetail = ! this.showQuestionDetail;
        },

        showCredentialAddModal() {
            this.$store.commit(`credentials/${credentialTypes.SET_VISIBLE}`, {visible: true});
        },

        ga(eventAction, eventLabel = '') {
            if (!window.ga) return;

            ga('send', {
                hitType: 'event',
                eventCategory: 'Answers',
                eventAction: eventAction,
                eventLabel: eventLabel,
            });
        },
    },
};
</script>

<style>
    .answerCreateForm-addCredentialButton {
        text-transform: none;
        padding: 0 6px;
        line-height: 22px;
        height: 22px;
        margin-left: 10px;
    }
</style>
