import * as types from '../mutation-types';
import Question from 'viender_socialite/core/js/models/question';

export default {
    namespaced: true,

    state: {
        page: 1,
        totalPages: 2,
        requesting: false,
        questions: [],
        questionUrl: {},
        showAnswerCreateModal: false,
    },

    mutations: {
        [types.ADD_QUESTIONS](state, questions) {
            questions.forEach((question) => {
                state.questions.push(new Question(question));
            });
        },

        [types.REMOVE_QUESTION](state, question) {
            state.questions.splice(state.questions.indexOf(question), 1);
        },

        [types.SET_AS_ANSWERED](state, question) {
            state.questions[state.questions.indexOf(question)].answered = true;
        },

        [types.SET_QUESTIONS_URL](state, url) {
            state.questionUrl = url;
        },

        [types.INCREMENT_PAGE](state) {
            state.page++;
        },

        [types.UPDATE_REQUESTING](state, requesting) {
            state.requesting = requesting;
        },

        [types.SET_SHOW_ANSWER_CREATE_MODAL](state, showAnswerCreateModal) {
            if(showAnswerCreateModal) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            } else {
                $('.answer-create-modal-overlay').scrollTop(0);
                document.getElementsByTagName('body')[0].style.overflow = 'scroll';
                $('.modal').modal('hide');
            }

            const imagePopOver = document.getElementsByClassName('note-image-popover')[0];

            if(imagePopOver) imagePopOver.style.display = 'none';

            state.showAnswerCreateModal = showAnswerCreateModal;
        },
    },

    actions: {
        setQuestionUrl({state, commit, rootState}, url) {
            commit(types.SET_QUESTIONS_URL, url);
        },

        fetchData({state, commit, rootState}) {
            return new Promise((resolve, reject) => {
                if(state.requesting) return;

                commit(types.UPDATE_REQUESTING, true);

                axios.get(state.questionUrl, {
                    params: {
                        with: ['owner', 'answer'],
                        page: state.page,
                    },
                })
                .then((response) => {
                    state.totalPages = response.data.meta.pagination.total_pages;
                    commit(types.ADD_QUESTIONS, response.data.data);
                    commit(types.INCREMENT_PAGE);
                    commit(types.UPDATE_REQUESTING, false);
                    resolve(response.data);
                })
                .catch((error) => {
                    console.log(error);
                    commit(types.UPDATE_REQUESTING, false);
                    reject(error);
                });
            });
        },
    },
};
