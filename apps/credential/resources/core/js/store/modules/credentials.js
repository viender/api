import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        visible: false,
        credentialInput: null,
        credentials: [],
        requesting: false,
        page: 1,
        totalPages: 1,
        credentialsUrl: null,
        selectedCredential: null,
        selectedCredentialText: null,
    },

    mutations: {
        [types.SET_VISIBLE](state, {visible}) {
            state.visible = visible;
        },
        [types.SET_CREDENTIAL_INPUT](state, {credentialInput}) {
            state.credentialInput = credentialInput;
        },
        [types.SET_REQUESTING](state, {requesting}) {
            state.requesting = requesting;
        },
        [types.INCREMENT_PAGE](state) {
            state.page += 1;
        },
        [types.SET_CREDENTIALS_URL](state, {url}) {
            state.credentialsUrl = url;
        },
        [types.PUSH_CREDENTIALS](state, {credentials}) {
            credentials.data.forEach((credential) => {
                state.credentials.push(credential);
            });
        },
        [types.SET_SELECTED_CREDENTIAL](state, {credential}) {
            state.selectedCredential = credential;
        },
        [types.SET_SELECTED_CREDENTIAL_TEXT](state, {text}) {
            state.selectedCredentialText = text;
        },
    },

    actions: {
        fetchCredentials({state, commit}) {
            return new Promise((resolve, reject) => {
                if(state.requesting) return;

                commit(types.SET_REQUESTING, true);

                axios.get(state.credentialsUrl, {
                    params: {
                        page: state.page,
                    },
                })
                .then((response) => {
                    state.totalPages = response.data.meta.pagination.total_pages;
                    commit(types.INCREMENT_PAGE);
                    commit(types.SET_REQUESTING, false);
                    commit(types.PUSH_CREDENTIALS, {credentials: response.data});
                    resolve(response.data);
                })
                .catch((error) => {
                    commit(types.SET_REQUESTING, false);
                    reject(error);
                });
            });
        },
    },
};
