module.exports = {
    namespaced: true,
    
    state: { 
        page: 1,
        requesting: false,
        questions: [],
        feedUrls:{},
    },

    mutations: { 
        addQuestions(state, questions) {
            state.questions = state.questions.concat(questions);
        },

        setFeedUrl(state, url) {
            state.feedUrls = url;
        },

        incrementPage(state) {
            state.page++;
        },

        updateRequesting(state, requesting) {
            state.requesting = requesting;
        }
    },

    actions: {
        fetchData({ state, commit, rootState }) {
            if(state.requesting) return;

            commit('updateRequesting', true);

            axios.get(state.feedUrls.questions, {
                params: {
                    with: ['owner', 'question'],
                    page: state.page
                }
            })
            .then(function (response) {
                commit('addquestions', response.data.data);
                commit('incrementPage');
                commit('updateRequesting', false);
            })
            .catch(function (error) {
                console.log(error);
                commit('updateRequesting', false);
            });
        }

    }
}