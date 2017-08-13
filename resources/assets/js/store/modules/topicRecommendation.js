import * as types from '../mutation-types';
import helper from 'viender_core/js/helpers/url';

export default {
    namespaced: true,

    state: {
        requesting: false,
        show: false,
        searchText: null,
        searchResults: [],
        selectedTopics: [],
        url: helper.api('topics'),
    },

    mutations: {
        [types.SET_REQUESTING](state, requesting) {
            state.requesting = requesting;
        },

        [types.SET_SHOW](state, show) {
            state.show = show;
        },

        [types.SET_SEARCH_TEXT](state, searchText) {
            state.searchText = searchText;
        },

        [types.SET_SEARCH_RESULTS](state, searchResults) {
            state.searchResults = searchResults;
        },

        [types.ADD_TO_SELECTED_TOPICS](state, topic) {
            state.selectedTopics.push(topic);
        },

        [types.REMOVE_FROM_SELECTED_TOPICS](state, topic) {
            state.selectedTopics = state.selectedTopics.filter(selectedTopic => selectedTopic.id !== topic.id);
        },
    },

    actions: {
        showTopicRecommendations({state, commit}) {
            setTimeout(() => {
                commit(types.SET_SHOW, true);
            }, 100);
        },

        hideTopicRecommendations({state, commit}) {
            setTimeout(() => {
                commit(types.SET_SHOW, false);
            }, 200);
        },
    }
}
