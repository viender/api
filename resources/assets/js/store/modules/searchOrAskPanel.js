import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        requesting: false,
        showPanel: false,
        searchText: null,
        searchResults: [],
        showMoreFields: false,
        selectedTopics: [],
    },

    mutations: {
        [types.SET_REQUESTING] (state, requesting) {
            state.requesting = requesting;
        },

        [types.SET_SHOW_PANEL] (state, showPanel) {
            if(showPanel) {
                document.getElementsByTagName('body')[0].style.overflow = 'hidden';
            } else {
                document.getElementsByTagName('body')[0].style.overflow = 'scroll';
            }

            state.showPanel = showPanel;
        },

        [types.SET_SEARCH_TEXT] (state, searchText) {
            state.searchText = searchText;
        },

        [types.SET_SEARCH_RESULTS] (state, searchResults) {
            state.searchResults.searchResults;
        },

        [types.SET_SHOW_MORE_FIELDS] (state, showMoreFields) {
            state.showMoreFields = showMoreFields;
        },

        [types.ADD_TO_SELECTED_TOPICS](state, topic) {
            state.selectedTopics.push(topic);
        },

        [types.REMOVE_FROM_SELECTED_TOPICS](state, topic) {
            state.selectedTopics = state.selectedTopics.filter(selectedTopic => selectedTopic.id !== topic.id);
        },
    },

    actions: {

    }
}
