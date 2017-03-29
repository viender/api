import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
        page: 0,
        totalPages: 1,
        requesting: false,
        followers: [],
        url: '',
    },

    mutations: { 
        [types.ADD_FOLLOWERS] (state, followers) {
            state.followers = state.followers.concat(followers);
        },

        [types.SET_URL] (state, url) {
            state.url = url;
        }
    },

    actions: {
        fetchData({ state, commit, rootState }) {
            if (state.requesting || state.page + 1 > state.totalPages) return;

            state.requesting = true;

            axios.get(state.url, {
                params: {
                    page: state.page + 1
                }
            })
            .then(function (response) {
                state.totalPages = response.data.meta.pagination.total_pages;
                commit(types.ADD_FOLLOWERS, response.data.data);
                state.page++;
                state.requesting = false;
            })
            .catch(function (error) {
                state.requesting = false;
            });
        },

        reset({ state, commit, rootState }) {
            state.followers = [];
            state.page = 1;
        },
    }
}
