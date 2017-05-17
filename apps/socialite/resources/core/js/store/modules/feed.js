import * as types from '../mutation-types';

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

                const url = '/';
                const page = 'Home';

                if (window.history ? window.history.pushState : false) {
                    window.history.pushState({
                        Page: page,
                        Url: url,
                    }, page, url);
                }

                if (window.ga) {
                    ga('set', 'page', relativeUrl(url));
                    ga('send', 'pageview');
                }
            }

            state.showAnswerModal = showAnswerModal;
        },

        [types.SET_SHOWED_ANSWER] (state, showedAnswer) {
            state.showedAnswer = showedAnswer;
        },

        addAnswer(state, answer) {
            state.answers.unshift(answer);
        },
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
                        only: ['body'],
                    }
                })
                .then(function (response) {
                    showedAnswer.body = response.data.body;
                    commit(types.SET_SHOWED_ANSWER, showedAnswer);
                    commit('updateRequesting', false);
                })
                .catch(function (error) {
                    console.log(error);
                    commit('updateRequesting', false);
                });
            } else {
                commit(types.SET_SHOWED_ANSWER, showedAnswer);
            }

        }
    }
}
