import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        visible: false,
        credentialInput: null,
        credentials: [],
        requesting: false,
        submitting: false,
        page: 1,
        totalPages: 1,
        credentialsUrl: null,
        selectedCredential: null,
        showAddCredentialOverlay: false,
        form: {
            employment: {
                type: 'employment',
                position: null,
                company_or_organization: null,
                start_year: null,
                end_year: null,
                still_here: null,
            },

            education: {
                type: 'education',
                school: null,
                concentration: null,
                secondary_concentration: null,
                degree_type: null,
                graduation_year: null,
            },

            location: {
                type: 'location',
                location: null,
                start_year: null,
                end_year: null,
                still_here: null,
            },

            topic: {
                type: 'topic',
                topic: null,
                experience: null,
            },
        },
    },

    getters: {
        selectedCredentialText(state) {
            if (state.selectedCredential) {
                return window.Vue.prototype.$viender.helpers.credentialText(state.selectedCredential);
            }

            return '';
        },
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
        [types.SET_SHOW_ADD_CREDENTIAL_OVERLAY](state, {show}) {
            state.showAddCredentialOverlay = show;
        },
        [types.SET_FORM_INPUT](state, {form, key, value}) {
            form = state.form[form];

            if (form) {
                form[key] = value;
            }
        },
        [types.SET_SUBMITTING](state, {submitting}) {
            state.submitting = submitting;
        },
        [types.PUSH_CREDENTIAL](state, {credential}) {
            state.credentials.push(credential);
        },
        [types.UNSHIFT_CREDENTIAL](state, {credential}) {
            state.credentials.unshift(credential);
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

        submitCredential({state, commit}, {credential}) {
            return new Promise((resolve, reject) => {
                if(state.submitting) return;

                commit(types.SET_SUBMITTING, true);

                axios.post(state.credentialsUrl, {credential})
                .then((response) => {
                    commit(types.SET_SUBMITTING, false);
                    resolve(response.data);
                })
                .catch((error) => {
                    commit(types.SET_SUBMITTING, false);
                    reject(error);
                });
            });
        },
    },
};
