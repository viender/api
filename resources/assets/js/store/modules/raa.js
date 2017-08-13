import * as types from '../mutation-types';
import helper from 'viender_core/js/helpers/url';

export default {
    namespaced: true,

    state: {
        requesting: false,
        show: false,
        searchResults: [],
        url: helper.api('search'),
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
            return new Promise((resolve, reject) => {
                console.log('searching...');

                if (searchText === '') {
                    commit(types.SET_SHOW, false);
                    reject({ code: 1, error: 'Search text can\'t be empty.'});
                    return;
                }

                if(state.requesting) {
                    resolve(null);
                    reject({code: 2, error: 'Wait for previous request to complete.'});
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
                    commit(types.SET_SHOW, true);
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
