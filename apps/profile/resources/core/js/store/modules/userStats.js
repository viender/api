import * as types from '../mutation-types';

export default {
    namespaced: true,
    
    state: { 
        followerCount: 0,
    },

    mutations: { 
        [types.SET_FOLLOWER_COUNT] (state, followerCount) {
            state.followerCount = followerCount;
        },

        [types.INCREMENT_FOLLOWER_COUNT] (state) {
            state.followerCount++;
        },

        [types.DECREMENT_FOLLOWER_COUNT] (state) {
            state.followerCount--;
        },
    },

    actions: {

    }
}
