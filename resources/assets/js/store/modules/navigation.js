import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        activeMenu: 0,
    },

    mutations: {
        [types.SET_ACTIVE_MENU](state, payload) {
            state.activeMenu = payload.activeMenu;
        },
    },

    actions: {

    },
};
