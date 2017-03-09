import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
        page: 1,
        requesting: false,
        questions: [],
        questionUrl:{},
    },

    mutations: { 
        [types.ADD_QUESTIONS] (state, questions) {
            state.questions = state.questions.concat(questions);
        },

        [types.REMOVE_QUESTION] (state, question) {
            state.questions.splice(state.questions.indexOf(question), 1);
        },

        [types.SET_AS_ANSWERED] (state, question) {
            state.questions[state.questions.indexOf(question)].answered = true;
        },

        [types.SET_QUESTIONS_URL] (state, url) {
            state.questionUrl = url;
        },

        [types.INCREMENT_PAGE] (state) {
            state.page++;
        },

        [types.UPDATE_REQUESTING] (state, requesting) {
            state.requesting = requesting;
        }
    },

    actions: {
        setQuestionUrl({ state, commit, rootState }, url) {
            commit(types.SET_QUESTIONS_URL, url);
        },

        fetchData({ state, commit, rootState }) {
            if(state.requesting) return;

            commit(types.UPDATE_REQUESTING, true);

            axios.get(state.questionUrl, {
                params: {
                    with: ['owner', 'answer'],
                    page: state.page
                }
            })
            .then(function (response) {
                commit(types.ADD_QUESTIONS, response.data.data);
                commit(types.INCREMENT_PAGE);
                commit(types.UPDATE_REQUESTING, false);
            })
            .catch(function (error) {
                console.log(error);
                commit(types.UPDATE_REQUESTING, false);
            });
        }

    }
}