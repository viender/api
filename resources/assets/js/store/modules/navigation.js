import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        activeMenu: 0,
        notificationCount: 0,
        showNotificationCount: false,
        setInterval: true,
        notificationCountUpdateInterval: 30000,
    },

    mutations: {
        [types.SET_ACTIVE_MENU](state, payload) {
            state.activeMenu = payload.activeMenu;
        },

        [types.SET_NOTIFICATION_COUNT](state, {count}) {
            state.notificationCount = count;
        },

        [types.SET_SHOW_NOTIFICATION_COUNT](state, {show}) {
            state.showNotificationCount = show;
        },
    },

    actions: {
        getNotificationCount({state, commit, dispatch}) {
            if (state.setInterval) {
                setInterval(() => {
                    dispatch('getNotificationCount');
                }, state.notificationCountUpdateInterval);

                state.setInterval = false;
            }

            return new Promise((resolve, reject) => {
                Vue.prototype.$viender.getNotificationCount()
                .then((data) => {
                    commit(types.SET_NOTIFICATION_COUNT, {count: data.count});
                    commit(types.SET_SHOW_NOTIFICATION_COUNT, {show: true});
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
            });
        },
    },
};
