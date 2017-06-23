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
    props: {
        answer: {
            type: Object,
            required: true,
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
        };
    },

    computed: Object.assign(Vuex.mapState('credentials', [
        'selectedCredential',
    ]), {
        content() {
            return this.$store.state.editor.content;
        },

        question() {
            return this.answer.question;
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
        const self = this;

        let popOver = document.getElementsByClassName('note-popover');

        for (let i = 0; i < popOver.length; i++) {
            let p = popOver[i];
            p.parentNode.removeChild(p);
        }

        $(self.$refs.editor).summernote({
            minHeight: 400,
            toolbar: [
                ['style', ['bold', 'italic']],
                ['para', ['ul', 'ol']],
                ['insert', ['link', 'picture']],
            ],
        });

        if (self.answer.body) {
            $(self.$refs.editor).summernote('code', self.answer.body);
        } else {
            axios.get(self.$viender.helpers.getUrl('self', self.answer), {
                params: {
                    only: ['body'],
                },
            })
            .then(function(response) {
                self.answer.body = response.data.body;
                $(self.$refs.editor).summernote('code', self.answer.body);
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    },

    methods: {
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
