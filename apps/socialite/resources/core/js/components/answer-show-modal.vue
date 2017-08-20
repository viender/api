<template>
    <div ref="modal" class="answer-show-modal-overlay" @click="hideAnswerCreateModal()" v-show="showAnswerModal">
        <div class="answer-show-modal" @click="modalClickHandle($event)">
            <answer :answer="answer" v-if="answer ? answer.body : false"></answer>
            <div class="preloader-wrapper small active" style="position: fixed; top: calc(50% - 75px); left: calc(50% - 18px);" v-else>
                <div class="spinner-layer spinner-blue-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
            <div>
                <about-author
                    ref="aboutAuthor"
                    :user="answer ? answer.owner : {}">
                </about-author>
            </div>
        </div>
        <div class="modal-action center" style="bottom: 0; top: initial;">
            <i style="color: #657786" class="fa fa-times" aria-hidden="true"></i>
        </div>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import AboutAuthor from './about-author';

export default {
    props: [''],

    components: {
        AboutAuthor,
    },

    mixins: [require('viender_core/js/mixins/urlHelper')],

    computed: {
        answer() {
            return this.$store.state.feed.showedAnswer;
        },

        showAnswerModal() {
            return this.$store.state.feed.showAnswerModal;
        },
    },

    watch: {
        answer(answer) {
            this.$refs.aboutAuthor.checkFollowingStatus(answer.owner);
        },
    },

    methods: {
        modalClickHandle(event) {
            event.stopPropagation();
        },

        hideAnswerCreateModal() {
            $(this.$refs.modal).scrollTop(0);
            this.$store.commit('feed/' + types.SET_SHOW_ANSWER_SHOW_MODAL, false);

            const url = '/';
            const page = 'Home';

            Vue.prototype.$viender.helpers.pushState({page, url});
        },
    },
};
</script>
