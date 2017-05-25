import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        notifications: [],
        requesting: false,
        requestingReadAll: false,
        url: null,
        readAllUrl: null,
        page: 1,
        totalPages: 2,
        readNotifs: null,
    },

    mutations: {
        [types.APPEND_NOTIFICATIONS](state, {notifications}) {
            state.notifications = notifications.concat(state.notifications);
        },

        [types.UPDATE_REQUESTING](state, {requesting}) {
            state.requesting = requesting;
        },

        [types.UPDATE_REQUESTING_READ_ALL](state, {requesting}) {
            state.requestingReadAll = requesting;
        },

        [types.SET_URL](state, payload) {
            state.url = payload.url;
        },

        [types.SET_READ_ALL_URL](state, {url}) {
            state.readAllUrl = url;
        },

        [types.INCREMENT_PAGE](state) {
            state.page = state.page + 1;
        },

        [types.UPDATE_TOTAL_PAGES](state, {totalPages}) {
            state.totalPages = totalPages;
        },

        [types.SET_READ_NOTIFS](state, {notifications}) {
            state.readNotifs = notifications;
        },
    },

    actions: {
        fetchNotifications({state, commit, dispatch, rootState}, payload) {
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
                dispatch('applySessionReadNotifs');
            })
            .catch((error) => {
                console.log(error);
                commit(types.UPDATE_REQUESTING, {requesting: false});
            });
        },

        setAllAsRead({state, commit, rootState}, payload) {
            if(state.requestingReadAll) return;

            commit(types.UPDATE_REQUESTING_READ_ALL, {requesting: true});

            axios.post(state.readAllUrl, {
                _method: 'PUT',
            })
            .then((response) => {
                commit(types.UPDATE_REQUESTING_READ_ALL, {requesting: false});

                state.notifications.forEach((notification) => {
                    notification.read_at = true;
                });
            })
            .catch((error) => {
                commit(types.UPDATE_REQUESTING_READ_ALL, {requesting: false});
                console.log(error);
            });
        },

        readSessionReadNotifs({state, commit, rootState}) {
            const readNotifsString = sessionStorage.getItem('viender.readNotifs') || '{"data": []}';
            const readNotifs = JSON.parse(readNotifsString);
            commit(types.SET_READ_NOTIFS, {notifications: readNotifs.data});
            console.log('readSessionReadNotifs');
        },

        applySessionReadNotifs({state, commit, rootState}) {
            state.notifications.forEach((notification) => {
                if (state.readNotifs.indexOf(notification.id) !== -1) {
                    notification.read_at = true;
                }
            });
            console.log('applySessionReadNotifs');
        },
    },
};
