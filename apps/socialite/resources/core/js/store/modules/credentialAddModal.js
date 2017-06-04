import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        visible: false,
        credentialInput: null,
        credentials: null,
    },

    mutations: {
        [types.SET_VISIBLE](state, {visible}) {
            state.visible = visible;
        },
        [types.SET_CREDENTIAL_INPUT](state, {credentialInput}) {
            state.credentialInput = credentialInput;
        },
    },

    actions: {

    },
};
