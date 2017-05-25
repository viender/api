import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        notifications: [],
        requesting: false,
        url: null,
        page: 1,
        totalPages: 2,
    },

    mutations: {
        [types.APPEND_NOTIFICATIONS](state, payload) {
            state.notifications = payload.notifications.concat(state.notifications);
        },

        [types.UPDATE_REQUESTING](state, payload) {
            state.requesting = payload.requesting;
        },

        [types.SET_URL](state, payload) {
            state.url = payload.url;
        },

        [types.INCREMENT_PAGE](state, payload) {
            state.page = state.page + 1;
        },

        [types.UPDATE_TOTAL_PAGES](state, payload) {
            state.totalPages = payload.totalPages;
        },
    },

    actions: {
        fetchNotifications({state, commit, rootState}, payload) {
            if(state.requesting) return;

            commit(types.UPDATE_REQUESTING, {requesting: true});

            axios.get(state.url, {
                params: {
                    with: ['owner', 'question'],
                    page: state.page,
                },
            })
            .then((response) => {
                console.log(response);
                commit(types.UPDATE_TOTAL_PAGES, {totalPages: response.data.last_page});
                commit(types.INCREMENT_PAGE);
                commit(types.UPDATE_REQUESTING, {requesting: false});
                commit(types.APPEND_NOTIFICATIONS, {notifications: response.data.data});
            })
            .catch((error) => {
                console.log(error);
                commit(types.UPDATE_REQUESTING, {requesting: false});
            });
        },
    }
}
