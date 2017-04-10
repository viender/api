import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        requesting: false,
        show: false,
        searchResults: [],
        url: Vue.prototype.$viender.helpers.api('search'),
    },

    mutations: {
        [types.SET_REQUESTING](state, requesting) {
            state.requesting = requesting;
        },

        [types.SET_SHOW](state, show) {
            state.show = show;
        },

        [types.SET_SEARCH_RESULTS](state, searchResults) {
            state.searchResults = searchResults;
        },
    },

    actions: {
        search({state, commit}, searchText) {
            console.log('searching...');
            return new Promise((resolve, reject) => {
                if(state.requesting) {
                    resolve(null);
                    return;
                }

                commit(types.SET_REQUESTING, true);

                axios.get(state.url, {
                    params: {
                        q: searchText,
                    }
                })
                .then(function (response) {
                    commit(types.SET_SEARCH_RESULTS, response.data.data);
                    commit(types.SET_REQUESTING, false);
                    resolve(response);
                })
                .catch(function (error) {
                    commit(types.SET_REQUESTING, false);
                    reject(error);
                });
            });
        }
    }
}
