import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
        page: 1,
        requesting: false,
        users: [],
        url: '',
    },

    mutations: { 
        [types.ADD_USERS] (state, users) {
            state.users = state.users.concat(users);
        },

        [types.SET_URL] (state, url) {
            state.url = url;
        }
    },

    actions: {
        fetchData({ state, commit, rootState }) {
            if(state.requesting) return;

            state.requesting = true;

            axios.get(state.url, {
                params: {
                    page: state.page
                }
            })
            .then(function (response) {
                commit(types.ADD_USERS, response.data.data);
                state.page++;
                state.requesting = false;
            })
            .catch(function (error) {
                state.requesting = false;
            });
        },
    }
}
