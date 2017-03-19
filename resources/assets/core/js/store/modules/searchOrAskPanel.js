import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
        requesting: false,
        showPanel: false,
        searchText: null,
        searchResults: []
    },

    mutations: { 
        [types.SET_REQUESTING] (state, requesting) {
            state.requesting = requesting;
        },

        [types.SET_SHOW_PANEL] (state, showPanel) {
            state.showPanel = showPanel;
        },

        [types.SET_SEARCH_TEXT] (state, searchText) {
            state.searchText = searchText;
        },
        [types.SET_SEARCH_RESULTS] (state, searchResults) {
            state.searchResults.searchResults;
        },
    },

    actions: {

    }
}