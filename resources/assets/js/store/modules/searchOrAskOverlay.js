import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        requesting: false,
        show: false,
        searchText: null,
        questionDetail: null,
        searchResults: [],
        showMoreFields: false,
        selectedTopics: [],
        postQuestionUrl: Vue.prototype.$viender.helpers.api('/questions'),
    },

    mutations: {
        [types.SET_REQUESTING](state, requesting) {
            state.requesting = requesting;
        },

        [types.SET_SHOW](state, show) {
            if(show) {
                document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
            } else {
                document.getElementsByTagName('body')[0].style.overflowY = 'auto';
            }

            state.show = show;
        },

        [types.SET_SEARCH_TEXT](state, searchText) {
            state.searchText = searchText;
        },

        [types.SET_SEARCH_RESULTS](state, searchResults) {
            state.searchResults.searchResults;
        },

        [types.SET_SHOW_MORE_FIELDS] (state, showMoreFields) {
            state.showMoreFields = showMoreFields;
        },

        [types.TOGGLE_SHOW_MORE_FIELDS] (state) {
            state.showMoreFields = !state.showMoreFields;
        },

        [types.ADD_TO_SELECTED_TOPICS](state, topic) {
            state.selectedTopics.push(topic);
        },

        [types.REMOVE_FROM_SELECTED_TOPICS](state, topic) {
            state.selectedTopics = state.selectedTopics.filter(selectedTopic => selectedTopic.id !== topic.id);
        },

        [types.SET_QUESTION_DETAIL](state, questionDetail) {
            state.questionDetail = questionDetail;
        },
    },

    actions: {
        postQuestion({state, commit}) {
            if(state.requesting) return;

            commit(types.SET_REQUESTING, true);

            axios.post(state.postQuestionUrl, {
                title: state.searchText,
                body: state.questionDetail,
                topics: state.selectedTopics,
            })
            .then(function (response) {
                document.location = Vue.prototype.$viender.helpers.getUrl('self_html', response.data);
                commit(types.SET_REQUESTING, false);
            })
            .catch(function (error) {
                if (error.response.status === 409) {
                    let slug = state.searchText.replace(/[\s]/g, '-').replace(/[|&;$%@"<>()+,?]/g, "");
                    const questionUrl = Vue.prototype.$viender.helpers.url(`questions/${slug}`);
                    console.log(questionUrl);
                    document.location = questionUrl;
                }

                commit(types.SET_REQUESTING, false);
            });
        }
    }
}
