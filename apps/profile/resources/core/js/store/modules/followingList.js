import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
        page: 1,
        totalPages: 2,
        requesting: false,
        followings: [],
        url: '',
    },

    mutations: { 
        [types.ADD_FOLLOWINGS] (state, followings) {
            state.followings = state.followings.concat(followings);
        },

        [types.SET_URL] (state, url) {
            state.url = url;
        }
    },

    actions: {
        fetchData({ state, commit, rootState }) {
            if (state.requesting || state.page > state.totalPages) return;

            state.requesting = true;

            axios.get(state.url, {
                params: {
                    page: state.page
                }
            })
            .then(function (response) {
                state.totalPages = response.data.meta.pagination.total_pages;
                commit(types.ADD_FOLLOWINGS, response.data.data);
                state.page++;
                state.requesting = false;
            })
            .catch(function (error) {
                state.requesting = false;
            });
        },

        reset({ state, commit, rootState }) {
            state.followings = [];
            state.page = 1;
        },
    }
}
