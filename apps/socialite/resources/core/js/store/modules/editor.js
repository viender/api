import * as types from '../mutation-types';

export default {
    namespaced: true,

    state: {
        editorElement: null,
        question: null,
        content: null
    },

    mutations: {
        [types.SET_EDITOR_CONTENT] (state, content) {
            state.content = content;
        },

        [types.UPDATE_EDITOR_CONTENT] (state, body) {
            if(state.content) {
                state.content.body = body;
            }
        },

        [types.SET_EDITOR_QUESTION] (state, question) {
            state.question = question;
        },

        [types.SET_EDITOR_ELEMENT] (state, editorElement) {
            state.editorElement = editorElement;
        }
    },

    actions: {
        setQuestion({ state, commit, rootState }, payload) {
            commit(types.SET_EDITOR_CONTENT, payload.answerText);
            commit(types.SET_EDITOR_QUESTION, payload.question);
            if(state.editorElement) {
                state.editorElement.summernote('code', payload.answerText.body);
            }
        },
    }
}
