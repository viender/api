import * as types from '../mutation-types';
import Answer from 'viender_socialite/core/js/models/answer';

export default {
    namespaced: true,

    state: {
        page: 1,
        totalPages: 2,
        requesting: false,
        answers: [],
        feedUrls: {},
        showAnswerModal: false,
        showedAnswer: null,
    },

    getters: {
        getAnswerByUrl: (state, getters, commit) => (url) => {
            const result = state.answers.find((answer) =>
                Vue.prototype.$viender.helpers.getUrl('self_html', answer) === url);

            if (!result) {
                const apiUrl = Vue.prototype.$viender.treasure.env.api_url;

                axios.get(`${apiUrl}/questions${location.href.replace(location.origin + '/question', '')}`, {
                    params: {
                        with: ['owner', 'question'],
                    },
                })
                .then(function(response) {
                    state.showedAnswer = response.data;
                    state.showAnswerModal = true;
                })
                .catch(function(error) {
                    console.log(error);
                });
            }

            state.requesting = false;

            return result;
        },
    },

    mutations: {
        addAnswers(state, answers) {
            answers.forEach((answer) => {
                state.answers.push(new Answer(answer));
            });
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

        [types.SET_SHOW_ANSWER_SHOW_MODAL](state, showAnswerModal) {
            if(showAnswerModal) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            } else {
                document.getElementsByTagName('body')[0].style.overflow = 'scroll';
            }

            state.showAnswerModal = showAnswerModal;
        },

        [types.SET_SHOWED_ANSWER](state, showedAnswer) {
            state.showedAnswer = showedAnswer;
        },

        addAnswer(state, answer) {
            state.answers.unshift(answer);
        },
    },

    actions: {
        fetchData({state, commit, rootState}) {
            return new Promise((resolve, reject) => {
                if(state.requesting) return;

                commit('updateRequesting', true);

                axios.get(state.feedUrls.answers, {
                    params: {
                        with: ['owner', 'question'],
                        page: state.page,
                    },
                })
                .then(function(response) {
                    state.totalPages = response.data.meta.pagination.total_pages;
                    commit('addAnswers', response.data.data);
                    commit('incrementPage');
                    commit('updateRequesting', false);
                    resolve(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                    commit('updateRequesting', false);
                    reject(error);
                });

                // Fetch answer if answer show page.
                const path = window.location.pathname.split('/');
                if (path[1] === 'question' && path[3] === 'answers' && state.answers.length === 0) {
                    const apiUrl = Vue.prototype.$viender.treasure.env.api_url;

                    axios
                    .get(`${apiUrl}/questions${location.href.replace(location.origin + '/question', '')}`, {
                        params: {
                            with: ['owner', 'question'],
                        },
                    })
                    .then(function(response) {
                        commit(types.SET_SHOWED_ANSWER, new Answer(response.data));
                        commit(types.SET_SHOW_ANSWER_SHOW_MODAL, true);
                    })
                    .catch(function(error) {
                        console.log(error);
                    });
                }
            });
        },

        setShowedAnswer({state, commit, rootState}, showedAnswer) {
            if(showedAnswer ? ! showedAnswer.body : false) {
                if(state.requesting) return;

                commit('updateRequesting', true);

                axios.get(getUrl('self', showedAnswer), {
                    params: {
                        only: ['body'],
                    },
                })
                .then(function(response) {
                    showedAnswer.body = response.data.body;
                    commit(types.SET_SHOWED_ANSWER, showedAnswer);
                    commit('updateRequesting', false);
                })
                .catch(function(error) {
                    console.log(error);
                    commit('updateRequesting', false);
                });
            } else {
                commit(types.SET_SHOWED_ANSWER, showedAnswer);
            }
        },
    },
};
