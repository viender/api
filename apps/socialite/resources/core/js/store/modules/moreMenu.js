import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        activeMoreMenu: null,
    },

    mutations: {
        [types.SET_ACTIVE_MORE_MENU](state, {moreMenu}) {
            state.activeMoreMenu = moreMenu;
        },
    },

    actions: {
        closeActiveMoreMenu({state}) {
            if (state.activeMoreMenu) state.activeMoreMenu.close();
        },
    },
};
