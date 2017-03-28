import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
        page: 1,
        totalPages: 2,
        requesting: false,
        answers: [],
        feedUrls:{},
        showAnswerModal: false,
        showedAnswer: null,
    },

    mutations: { 
        addAnswers(state, answers) {
            state.answers = state.answers.concat(answers);
        },

        setFeedUrl(state, url) {
            state.feedUrls = url;
        },

        incrementPage(state) {
            state.page++;
        },

        updateRequesting(state, requesting) {
            state.requesting = requesting;
        },

        [types.SET_SHOW_ANSWER_SHOW_MODAL] (state, showAnswerModal) {
            if(showAnswerModal) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                
            } else {
                document.getElementsByTagName('body')[0].style.overflow = 'scroll';
            }
            
            state.showAnswerModal = showAnswerModal;
        },

        [types.SET_SHOWED_ANSWER] (state, showedAnswer) {
            state.showedAnswer = showedAnswer;
        }
    },

    actions: {
        fetchData({ state, commit, rootState }) {
            if(state.requesting) return;

            commit('updateRequesting', true);

            axios.get(state.feedUrls.answers, {
                params: {
                    with: ['owner', 'question'],
                    page: state.page
                }
            })
            .then(function (response) {
                state.totalPages = response.data.meta.pagination.total_pages;
                commit('addAnswers', response.data.data);
                commit('incrementPage');
                commit('updateRequesting', false);
            })
            .catch(function (error) {
                console.log(error);
                commit('updateRequesting', false);
            });
        },

        setShowedAnswer({ state, commit, rootState }, showedAnswer) {
            if(showedAnswer ? ! showedAnswer.body : false) {
                if(state.requesting) return;

                commit('updateRequesting', true);

                axios.get(getUrl('self', showedAnswer), {
                    params: {
                        with: ['owner', 'question'],
                        page: state.page
                    }
                })
                .then(function (response) {
                    showedAnswer.body = response.data.body;
                    commit('updateRequesting', false);
                })
                .catch(function (error) {
                    console.log(error);
                    commit('updateRequesting', false);
                });
            }

            commit(types.SET_SHOWED_ANSWER, showedAnswer);
        }
    }
}
