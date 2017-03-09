import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
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
        }
    },

    actions: {

    }
}