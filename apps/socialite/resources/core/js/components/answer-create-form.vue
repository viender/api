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
import Answer from 'viender_socialite/core/js/models/answer';

export default {
    props: {
        method: {
            type: String,
            default: 'POST',
        },

        initContent: {
            type: Boolean,
            default: false,
        },

        url: {
            type: String,
            default: null,
        },
    },

    mixins: [require('viender_core/js/mixins/urlHelper')],

    components: {
        credential,
    },

    data() {
        return {
            requesting: false,
            showQuestionDetail: false,
            summernote: null,
            thumbnail: null,
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
        answer() {
            return this.$store.state.editor.content;
        },
    }),

    watch: {
        question() {
            this.showQuestionDetail = false;
        },

        selectedCredential() {
            if (this.selectedCredential) {
                this.$store.commit('editor/' + types.SET_CREDENTIAL_ID, {id: this.selectedCredential.id});
            }
        },

        answer() {
            if (this.initContent) {
                $(this.$refs.editor).summernote('code', this.answer.body.content);
                this.$store.commit('credentials/SET_SELECTED_CREDENTIAL',
                    {credential: this.answer.credential});
            }
        },
    },

    mounted() {
        let self = this;

        let popOver = document.getElementsByClassName('note-popover');

        for (let i = 0; i < popOver.length; i++) {
            let p = popOver[i];
            p.parentNode.removeChild(p);
        }

        console.log('sadfasdfsdf');

        $(document).ready(function() {
            self.summernote = $(self.$refs.editor).summernote({
                minHeight: 400,
                toolbar: [
                    ['style', ['bold', 'italic']],
                    ['para', ['ul', 'ol']],
                    ['insert', ['link', 'picture']],
                ],
                disableResizeImage: true,
                callbacks: {
                    onImageUpload: self.handleImageUpload,
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
        handleImageUpload(files) {
            const data = new FormData();
            data.append('file', files[0]);
            axios.post(api('upload'), data)
            .then((res) => {
                if (!this.thumbnail) this.thumbnail = res.data.picture_large_url;
                const storageHost = this.$viender.treasure.env.storage_host;
                const node = document.createElement('IMG');
                node.setAttribute('src', `${storageHost}${res.data.picture_original_url}`);
                node.setAttribute('width', '100%');
                $(this.$refs.editor).summernote('insertNode', node);
            });
        },

        answerQuestion(event) {
            let self = this;

            let url = self.url;

            if(event) event.preventDefault();

            if(self.requesting) return;

            if( ! self.content.body) return;

            self.requesting = true;

            if (self.$store.state.questionList.createModalMethod === 'PUT') {
                url = self.$viender.helpers.getUrl('self', self.$store.state.editor.content);
            }

            axios.post(url || this.getUrl('answers', self.question) + '?with=owner', {
                thumbnail: this.thumbnail,
                body: self.content.body.contents,
                credential_id: self.selectedCredential ? self.selectedCredential.id : null,
                _method: self.method,
            })
                .then(function(response) {
                    if(response.status == 200) {
                        if (self.$store.state.feed) {
                            let existingAnswer = self.$store.state.feed.answers.find((answer) => {
                                return answer.id === response.data.id;
                            });

                            if (existingAnswer) {
                                existingAnswer.preview = response.data.preview;
                                existingAnswer.body = self.answer.body.contents;
                                existingAnswer.credential = new Answer(response.data.credential);
                            } else {
                                response.data.body = self.answer.body;
                                self.$store.commit('feed/addAnswer', new Answer(response.data));
                            }
                        }

                        self.$emit('answer-posted', response.data);
                        self.$store.commit('questionList/' + types.SET_AS_ANSWERED, self.question);
                        $(self.$refs.editor).summernote('code', '');
                    }
                    self.requesting = false;
                })
                .catch(function(error) {
                    if(error.response) {
                        if(error.response.status == 401) {
                            document.location = url('/');
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
